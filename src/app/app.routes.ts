import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Gallery } from './components/gallery/gallery';
import { ArtifactDetail } from './components/artifact-detail/artifact-detail';
import { About } from './components/about/about';

export const routes: Routes = [
    {
    path: '',
    component: Home,
    title: 'Accueil - Musée Virtuel Interactif'
  },
  {
    path: 'gallery',
    component: Gallery,
    title: 'Collection - Musée Virtuel Interactif'
  },
  {
    path: 'artifact/:id',
    component: ArtifactDetail,
    title: 'Détail - Musée Virtuel Interactif'
  },
  {
    path: 'about',
    component: About,
    title: 'À Propos - Musée Virtuel Interactif'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
