import { Component,OnInit,inject,signal,PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ArtifactService } from '../../services/artifact.service';
import { Artifact } from '../../models/artifact.model';

@Component({
  selector: 'app-artifact-detail',
  imports: [CommonModule],
  templateUrl: './artifact-detail.html',
  styleUrl: './artifact-detail.css'
})
export class ArtifactDetail implements OnInit{

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private artifactService = inject(ArtifactService);
  private sanitizer = inject(DomSanitizer);
  private platformId: Object = inject(PLATFORM_ID);

  artifact = signal<Artifact | null>(null);
  relatedArtifacts = signal<Artifact[]>([]);
  sketchfabUrl = signal<SafeResourceUrl | null>(null);
  isLoading = signal(true);
  show3DViewer = signal(true);
  isFavorite = signal(false);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadArtifact(id);
    });
  }

  loadArtifact(id: string) {
    this.isLoading.set(true);
    
    const foundArtifact = this.artifactService.getArtifactById(id);
    
    if (foundArtifact) {
      this.artifact.set(foundArtifact);
      
      // Créer l'URL Sketchfab sécurisée
      const sketchfabEmbedUrl = `https://sketchfab.com/models/${foundArtifact.sketchfabId}/embed?autostart=1&ui_theme=dark&ui_infos=0`;
      this.sketchfabUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(sketchfabEmbedUrl));
      
      // Charger les artefacts similaires
      this.loadRelatedArtifacts(foundArtifact);
      
      this.isLoading.set(false);
    } else {
      // Rediriger vers la galerie si l'artefact n'existe pas
      this.router.navigate(['/gallery']);
    }
  }

  loadRelatedArtifacts(artifact: Artifact) {
    const related = this.artifactService
      .getArtifactsByCategory(artifact.category)
      .filter(a => a.id !== artifact.id)
      .slice(0, 3);
    
    this.relatedArtifacts.set(related);
  }

  goBack() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        this.router.navigate(['/gallery']);
      }
    }
  }

  navigateToArtifact(id: string) {
    this.router.navigate(['/artifact', id]);
    // Scroll to top
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleViewer() {
    this.show3DViewer.set(!this.show3DViewer());
  }

  getCategoryColor(category: string): string {
    const categories = this.artifactService.getCategories();
    const cat = categories.find(c => c.id === category);
    return cat?.color || '#718096';
  }

  // ✅ NOUVELLES MÉTHODES POUR LES BOUTONS

  // Bouton Partager
  shareArtifact() {
    const art = this.artifact();
    if (!art) return;

    if (isPlatformBrowser(this.platformId)) {
      // Si l'API Web Share est disponible (mobile)
      if (navigator.share) {
        navigator.share({
          title: art.title,
          text: `Découvrez ${art.title} par ${art.artist} sur le Musée Virtuel`,
          url: window.location.href
        }).catch(err => console.log('Erreur de partage:', err));
      } else {
        // Sinon, copier le lien dans le presse-papier
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('✅ Lien copié dans le presse-papier !');
        }).catch(err => {
          console.error('Erreur de copie:', err);
          alert('❌ Impossible de copier le lien');
        });
      }
    }
  }

  // Bouton Favori
  toggleFavorite() {
    const art = this.artifact();
    if (!art) return;

    if (isPlatformBrowser(this.platformId)) {
      const favorites = this.getFavorites();
      
      if (this.isFavorite()) {
        // Retirer des favoris
        const filtered = favorites.filter(id => id !== art.id);
        localStorage.setItem('favorites', JSON.stringify(filtered));
        this.isFavorite.set(false);
        alert('❤️ Retiré des favoris');
      } else {
        // Ajouter aux favoris
        favorites.push(art.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.isFavorite.set(true);
        alert('💚 Ajouté aux favoris !');
      }
    }
  }

  // Vérifier si l'artefact est en favori
  checkIfFavorite(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      const favorites = this.getFavorites();
      this.isFavorite.set(favorites.includes(id));
    }
  }

  // Récupérer les favoris du localStorage
  getFavorites(): string[] {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('favorites');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  }

  // Bouton Télécharger
  downloadInfo() {
    const art = this.artifact();
    if (!art) return;

    // Créer un fichier texte avec les infos
    const content = `
=================================
${art.title.toUpperCase()}
=================================

Artiste: ${art.artist}
Période: ${art.period}
Année: ${art.year}
Catégorie: ${art.category}
${art.materials ? `Matériaux: ${art.materials}` : ''}
${art.dimensions ? `Dimensions: ${art.dimensions}` : ''}

DESCRIPTION:
${art.description}

POINTS REMARQUABLES:
${art.highlights.map((h, i) => `${i + 1}. ${h}`).join('\n')}

---
Source: Musée Virtuel Interactif
URL: ${isPlatformBrowser(this.platformId) ? window.location.href : ''}
    `.trim();

    // Télécharger le fichier
    if (isPlatformBrowser(this.platformId)) {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${art.title.replace(/\s+/g, '_')}.txt`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }

}
