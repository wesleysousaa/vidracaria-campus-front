import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../features/Login';
import Menu from '../components/Menu/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Menu />}>
          <Route path="relatorios" element={<div>Relatorios</div>} />
          <Route path="clientes" element={<div>Clientes</div>} />
          <Route path="servicos" element={<div>Serviços</div>} />
          <Route path="produtos" element={<div>Produtos</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
