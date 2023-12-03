import Menu from '../components/Menu/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Rota
export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<>Login</>} />
        <Route path="/relatorios" element={<>Relatorios</>} />
        <Route path="/clientes" element={<>Clientes</>} />
        <Route path="/servicos" element={<>Serviços</>} />
        <Route path="/produtos" element={<>Produtos</>} />
      </Routes>
    </BrowserRouter>
  );
}
