import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Template';
import Dashboard from '../features/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = lazy(() => import('../features/Login'));
const Customers = lazy(() => import('../features/Customers'));
const CustomerForm = lazy(() => import('../features/Customers/CustomerForm'));
const CustomerInfoForm = lazy(
  () => import('../features/Customers/CustomerInfoForm'),
);

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="relatorios" element={<Dashboard />} />
              <Route path="customers">
                <Route index element={<Customers />} />
                <Route path="add" element={<CustomerForm />} />
                <Route path="info/:id" element={<CustomerInfoForm />} />
                <Route path="edit/:id" element={<CustomerForm />} />
              </Route>
              <Route path="servicos" element={<div>Serviços</div>} />
              <Route path="produtos" element={<div>Produtos</div>} />
            </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
