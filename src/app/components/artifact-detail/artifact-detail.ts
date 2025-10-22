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

}
