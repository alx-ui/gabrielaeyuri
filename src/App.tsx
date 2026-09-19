import { BrowserRouter } from 'react-router';

import { MainRoutes } from 'routes';

export function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
