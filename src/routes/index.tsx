import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader';
import TemplateImports from './TemplateImports';

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader open={true} />}>
        <Routes>
          <Route element={<TemplateImports.PrivateRoute />}>
            <Route path="relatorios" element={<TemplateImports.Dashboard />} />
            <Route path="customers">
              <Route index element={<TemplateImports.Customers.index />} />
              <Route
                path="add"
                element={<TemplateImports.Customers.CustomerCreateForm />}
              />
              <Route
                path="info/:id"
                element={<TemplateImports.Customers.CustomerInfoForm />}
              />
              <Route
                path="edit/:id"
                element={<TemplateImports.Customers.CustomerUpdateForm />}
              />
            </Route>
            <Route path="servicos" element={<div>Serviços</div>} />
            <Route path="produtos" element={<div>Produtos</div>} />
          </Route>
          <Route element={<TemplateImports.PublicRoute />}>
            <Route path="/" element={<TemplateImports.Login />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
