import { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './Template';

const Login = lazy(() => import('./features/Login'));
const Clients = lazy(() => import('./features/Clients'));
const FormClient = lazy(() => import('./features/Clients/FormClient'));
const InfoClient = lazy(() => import('./features/Clients/InfoClient'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="relatorios" element={<div>Relatorios</div>} />
            <Route path="clientes" element={<Outlet />}>
              <Route index element={<Clients />} />
              <Route path="create" element={<FormClient />} />
              <Route path="info/:id" element={<InfoClient />} />
              <Route path="edit/:id" element={<FormClient />} />
            </Route>
            <Route path="servicos" element={<div>Serviços</div>} />
            <Route path="produtos" element={<div>Produtos</div>} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
