import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { CharactersList } from '../pages/harry-potter-page/CharactersList';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { CharactersDetails } from '../pages/harry-potter-page/CharacterDetails';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<CharactersList />} />
      <Route path="/character/:id" element={<CharactersDetails />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
