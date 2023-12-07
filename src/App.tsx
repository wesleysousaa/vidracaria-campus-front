import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Router from './routes/index';

const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <AuthProvider> */}
        <Router />
        {/* </AuthProvider> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
}
