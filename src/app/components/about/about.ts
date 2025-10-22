import { Component,inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtifactService } from '../../services/artifact.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  // ✅ Injection du service
  private artifactService = inject(ArtifactService);

  features = [
    {
      icon: '🎨',
      title: 'Collection Diversifiée',
      description: 'Découvrez des artefacts provenant de différentes cultures, périodes et disciplines artistiques.'
    },
    {
      icon: '🔬',
      title: 'Technologie 3D',
      description: 'Visualisez chaque œuvre en détail grâce à nos modèles 3D interactifs haute résolution.'
    },
    {
      icon: '🎓',
      title: 'Contenu Éducatif',
      description: 'Apprenez l\'histoire, le contexte culturel et la signification de chaque artefact.'
    },
    {
      icon: '🌍',
      title: 'Accessible Partout',
      description: 'Explorez le musée depuis n\'importe quel appareil, à tout moment et n\'importe où.'
    },
    {
      icon: '🎯',
      title: 'Navigation Intuitive',
      description: 'Filtrez, recherchez et découvrez facilement les œuvres qui vous intéressent.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Une expérience muséale moderne qui allie patrimoine et technologies numériques.'
    }
  ];

  technologies = [
    { name: 'Angular 18+', description: 'Framework moderne avec standalone components' },
    { name: 'Sketchfab API', description: 'Intégration de modèles 3D interactifs' },
    { name: 'TypeScript', description: 'Typage fort et code maintenable' },
    { name: 'CSS3', description: 'Animations et design responsive' }
  ];

  // ✅ STATS DYNAMIQUES
  get stats() {
    return [
      { 
        value: this.artifactService.getArtifacts().length.toString(),
        label: 'Artefacts' 
      },
      { 
        value: this.artifactService.getCategories().length.toString(),
        label: 'Catégories' 
      },
      { 
        value: '24/7', 
        label: 'Accessible' 
      },
      { 
        value: '3D', 
        label: 'Visualisation' 
      }
    ];
  }

}
