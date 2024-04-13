import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import queryClient from './config/queryClient';
import { useAuth } from './hooks/useAuth';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const authentication = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} context={{ authentication }} />
    </QueryClientProvider>
  );
}
