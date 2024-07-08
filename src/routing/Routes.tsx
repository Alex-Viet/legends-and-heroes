import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { CharactersList } from '../pages/harry-potter-page/CharactersList';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<CharactersList />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
