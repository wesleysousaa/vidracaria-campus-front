import { lazy } from 'react';
import { PrivateRoute, PublicRoute } from './AuthRoutes';

import Products from '../features/Products';
import ProductsCreateForm from '../features/Products/ProductCreateForm';
import ProductsUpdateForm from '../features/Products/ProductUpdateForm';

const Login = lazy(() => import('../features/Login'));

const Customers = lazy(() => import('../features/Customers'));
const CustomerCreateForm = lazy(
  () => import('../features/Customers/CustomerCreateForm'),
);
const CustomerUpdateForm = lazy(
  () => import('../features/Customers/CustomerUpdateForm'),
);
const CustomerInfoForm = lazy(
  () => import('../features/Customers/CustomerInfoForm'),
);
const Dashboard = lazy(() => import('../features/Dashboard'));

const TemplateImports = {
  Login: Login,
  PrivateRoute: PrivateRoute,
  PublicRoute: PublicRoute,
  Dashboard: Dashboard,
  Customers: {
    index: Customers,
    CustomerCreateForm,
    CustomerUpdateForm,
    CustomerInfoForm,
  },
  Products: {
    index: Products,
    ProductsCreateForm,
    ProductsUpdateForm,
  },
};

export default TemplateImports;
