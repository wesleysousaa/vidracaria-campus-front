import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../features/Login';
import Layout from '../Template';
import Clients from '../features/Clients';

// Rota
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="relatorios" element={<div>Relatorios</div>} />
          <Route path="clientes" element={<Clients />} />
          <Route path="servicos" element={<div>Serviços</div>} />
          <Route path="produtos" element={<div>Produtos</div>} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
