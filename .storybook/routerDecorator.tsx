import type { PartialStoryFn, StoryContext } from '@storybook/types';
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import React from 'react';

export default function withRouter(
  Story: PartialStoryFn,
  { parameters }: StoryContext,
) {
  const {
    initialEntries = ['/'],
    initialIndex,
    routes = ['/'],
  } = parameters?.router || {};

  const rootRoute = createRootRoute();

  const children = routes.map((path) =>
    createRoute({
      path,
      getParentRoute: () => rootRoute,
      component: Story,
    }),
  );

  rootRoute.addChildren(children);

  const router = createRouter({
    history: createMemoryHistory({ initialEntries, initialIndex }),
    routeTree: rootRoute,
  });

  return <RouterProvider router={router} />;
}

declare module '@storybook/types' {
  interface Parameters {
    router?: {
      initialEntries?: string[];
      initialIndex?: number;
      routes?: string[];
    };
  }
}
