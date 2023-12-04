import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Template';
import { Clients, Login } from '../features';

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
