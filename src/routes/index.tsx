import { Route, Routes } from 'react-router';

import { FinalFeliz } from 'pages/FinalFeliz';
import { Homepage } from 'pages/Home';
import { Links } from 'pages/Links';
import { NotFound } from 'pages/NotFound';
import { NuBank } from 'pages/NuBank';
import { Rotas } from 'pages/Routes';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/finalfeliz" element={<FinalFeliz />} />
      <Route path="/presentes" element={<FinalFeliz />} />
      <Route path="/pix" element={<NuBank />} />
      <Route path="/links" element={<Links />} />
      <Route path="/rotas" element={<Rotas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
