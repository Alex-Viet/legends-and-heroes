import { Route, Routes } from 'react-router-dom';
import { CharactersList } from '../pages/harry-potter-page/CharactersList';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { CharactersDetails } from '../pages/harry-potter-page/CharacterDetails';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/character/:id" element={<CharactersDetails />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
