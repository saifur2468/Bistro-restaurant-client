import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './AllComponent/Layout/Router/Router';
import AuthProvider from './AllComponent/Firebase/Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </AuthProvider>


  </React.StrictMode>
);
