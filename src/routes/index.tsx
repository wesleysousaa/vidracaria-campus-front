import { Box } from '@mui/material';
import Menu from '../components/Menu/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Rota
export default function Router() {
  return (
    <BrowserRouter>
      <Box display={'flex'} flexDirection={'row'}>
        <Menu />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Menu />}>
            <Route path="relatorios" element={<div>Relatorios</div>} />
            <Route path="clientes" element={<div>Clientes</div>} />
            <Route path="servicos" element={<div>Serviços</div>} />
            <Route path="produtos" element={<div>Produtos</div>} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
