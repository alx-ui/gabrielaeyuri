import { Route, Routes } from 'react-router';

import { FinalFeliz } from 'pages/FinalFeliz';
import { Homepage } from 'pages/Home';
import { NotFound } from 'pages/NotFound';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/finalfeliz" element={<FinalFeliz />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
