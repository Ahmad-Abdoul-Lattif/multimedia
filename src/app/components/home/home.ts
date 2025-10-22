import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ArtifactService } from '../../services/artifact.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

   private router = inject(Router);
  private artifactService = inject(ArtifactService);

  categories = this.artifactService.getCategories();
  featuredArtifacts = this.artifactService.getArtifacts().slice(0, 3);

  navigateToGallery(categoryId?: string) {
    if (categoryId) {
      this.router.navigate(['/gallery'], { queryParams: { category: categoryId } });
    } else {
      this.router.navigate(['/gallery']);
    }
  }

  navigateToArtifact(id: string) {
    this.router.navigate(['/artifact', id]);
  }

  // ✅ Ajout de cette méthode pour corriger l’erreur
  getCategoryColor(category: string): string {
    const cat = this.categories.find(c => c.id === category);
    return cat?.color || '#718096';
  }
}
