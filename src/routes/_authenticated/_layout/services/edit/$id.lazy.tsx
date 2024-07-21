import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/services/edit/$id',
)({
  component: () => <div>Em construção</div>,
});
