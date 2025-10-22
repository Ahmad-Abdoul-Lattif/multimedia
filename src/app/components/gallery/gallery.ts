import { Component,OnInit ,inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtifactService } from '../../services/artifact.service';
import { Artifact } from '../../models/artifact.model';


@Component({
  selector: 'app-gallery',
  imports: [FormsModule,CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit{

 private router = inject(Router);
  private route = inject(ActivatedRoute);
  private artifactService = inject(ArtifactService);

  allArtifacts = this.artifactService.getArtifacts();
  displayedArtifacts = signal<Artifact[]>([]);
  categories = this.artifactService.getCategories();

  selectedCategory = signal<string>('all');
  searchQuery = signal<string>('');
  viewMode = signal<'grid' | 'list'>('grid');

  trackById(index: number, item: any): any {
  return item.id; // ou item._id selon ta structure de données
}


  ngOnInit() {
    // Récupérer la catégorie depuis les query params
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.selectedCategory.set(category);
      }
      this.filterArtifacts();
    });
  }

  filterArtifacts() {
    let filtered = this.allArtifacts;

    // Filtrer par catégorie
    if (this.selectedCategory() !== 'all') {
      filtered = filtered.filter(a => a.category === this.selectedCategory());
    }

    // Filtrer par recherche
    if (this.searchQuery().trim()) {
      const query = this.searchQuery().toLowerCase();
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.artist.toLowerCase().includes(query) ||
        a.period.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query)
      );
    }

    this.displayedArtifacts.set(filtered);
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
    this.filterArtifacts();
  }

  onSearchChange(query: string) {
    this.searchQuery.set(query);
    this.filterArtifacts();
  }

  toggleViewMode() {
    this.viewMode.set(this.viewMode() === 'grid' ? 'list' : 'grid');
  }

  navigateToArtifact(id: string) {
    this.router.navigate(['/artifact', id]);
  }

  getCategoryColor(category: string): string {
    const cat = this.categories.find(c => c.id === category);
    return cat?.color || '#718096';
  }

  getCategoryName(category: string): string {
    const cat = this.categories.find(c => c.id === category);
    return cat?.name || category;
  }

}
