import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
    CustomerCreateForm: CustomerCreateForm,
    CustomerUpdateForm: CustomerUpdateForm,
    CustomerInfoForm: CustomerInfoForm,
  },
};

export default TemplateImports;