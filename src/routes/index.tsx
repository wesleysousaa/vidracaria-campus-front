import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Template';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../features/Dashboard';

const Login = lazy(() => import('../features/Login'));
const Clients = lazy(() => import('../features/Clients'));
const FormClient = lazy(() => import('../features/Clients/FormClient'));
const InfoClient = lazy(() => import('../features/Clients/InfoClient'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="relatorios" element={<Dashboard />} />
              <Route path="clientes">
                <Route index element={<Clients />} />
                <Route path="add" element={<FormClient />} />
                <Route path="info/:id" element={<InfoClient />} />
                <Route path="edit/:id" element={<FormClient />} />
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
