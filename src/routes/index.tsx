import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from '../Template';
import { Clients, Login } from '../features';
import FormClient from '../components/Client/FormClient';

// Rota
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="relatorios" element={<div>Relatorios</div>} />
          <Route path="clientes" element={<Outlet />}>
            <Route index element={<Clients />} />
            <Route path="create" element={<FormClient />} />
            <Route path="edit/:id" element={<FormClient />} />
          </Route>
          <Route path="servicos" element={<div>Serviços</div>} />
          <Route path="produtos" element={<div>Produtos</div>} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
