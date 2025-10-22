import { Injectable, signal } from '@angular/core';
import { Artifact, MuseumCategory } from '../models/artifact.model';

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {

  private artifacts = signal<Artifact[]>([
    {
      id: '1',
      title: 'Buste de Néfertiti',
      artist: 'Thoutmôsis',
      period: 'Égypte Antique',
      description: 'Ce buste emblématique représente la reine Néfertiti, épouse du pharaon Akhenaton. Chef-d\'œuvre de l\'art égyptien du Nouvel Empire, il illustre l\'idéal de beauté de l\'époque avec ses traits délicats et sa couronne distinctive.',
      category: 'histoire',
      sketchfabId: 'd148f771c3f44225b56cb7ce8d3c5ce6',
      thumbnail: 'https://media.istockphoto.com/id/921659032/photo/polished-egyptian-brass-bust-of-nefertiti.webp?s=1024x1024&w=is&k=20&c=OtaChWgh1S1ca_R8ZhAoQjRMxftoJ3ObW9k9q2U7A1g=',
      year: '1345 av. J.-C.',
      materials: 'Calcaire, stuc peint',
      highlights: [
        'Symbole de l\'art égyptien',
        'Excellente conservation des couleurs',
        'Représentation de la beauté royale'
      ]
    },
    {
      id: '2',
      title: 'Statue de David',
      artist: 'Michel-Ange',
      period: 'Renaissance',
      description: 'Cette sculpture monumentale en marbre représente le héros biblique David. Elle symbolise la force et la beauté idéale de la Renaissance italienne.',
      category: 'art',
      sketchfabId: 'c96412af8b3943bc93fc96d62a9690d4',
      thumbnail: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400',
      year: '1501-1504',
      dimensions: '5,17 m de hauteur',
      materials: 'Marbre de Carrare',
      highlights: [
        'Chef-d\'œuvre de la Renaissance',
        'Proportions anatomiques parfaites',
        'Symbole de Florence'
      ]
    },
    {
      id: '3',
      title: 'Squelette de Tyrannosaure Rex',
      artist: 'Nature',
      period: 'Crétacé supérieur',
      description: 'Le Tyrannosaure Rex était l\'un des plus grands prédateurs terrestres ayant jamais existé. Ce fossile quasi-complet offre un aperçu fascinant de la préhistoire.',
      category: 'science',
      sketchfabId: '77e21c4e5d65468bbe11780ae0557b95',
      thumbnail: 'https://images.unsplash.com/photo-1577471486886-1e34bbae345f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
      year: '68-66 millions d\'années',
      dimensions: '12 m de longueur, 4 m de hauteur',
      highlights: [
        'Prédateur apex du Crétacé',
        'Mâchoire extrêmement puissante',
        'Fossile exceptionnellement préservé'
      ]
    },
    {
      id: '4',
      title: 'Masque Dogon',
      artist: 'Artisan Dogon',
      period: 'Art Africain Traditionnel',
      description: 'Les masques Dogon du Mali sont utilisés lors de cérémonies rituelles importantes. Leur géométrie complexe représente des figures mythologiques et spirituelles.',
      category: 'culture',
      sketchfabId: '2328911ac2404752bf6521aba70cac5a',
      thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400',
      year: 'XIXe-XXe siècle',
      materials: 'Bois, pigments naturels',
      highlights: [
        'Symbolisme cosmologique',
        'Art cérémoniel sacré',
        'Patrimoine culturel malien'
      ]
    },
    {
      id: '5',
      title: 'Armure de Samouraï',
      artist: 'Maître armurier japonais',
      period: 'Période Edo',
      description: 'Cette armure complète témoigne du raffinement et de la sophistication de l\'artisanat japonais. Chaque pièce est finement travaillée et décorée.',
      category: 'histoire',
      sketchfabId: 'a971e7ca8c444859b3f8f1f9ba79b327',
      thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400',
      year: '1603-1868',
      materials: 'Acier, laque, soie, cuir',
      highlights: [
        'Protection et esthétique',
        'Symbole du bushido',
        'Artisanat d\'exception'
      ]
    },
    {
      id: '6',
      title: 'Vase grec à figures rouges',
      artist: 'Peintre attique',
      period: 'Grèce Antique',
      description: 'Ce vase illustre la technique de la figure rouge, où le fond est peint en noir laissant apparaître l\'argile rouge pour les personnages.',
      category: 'art',
      sketchfabId: '94d1b11f5397484990f8a56e4df191b9',
      thumbnail: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400',
      year: '480-470 av. J.-C.',
      materials: 'Céramique, argile',
      highlights: [
        'Technique de figure rouge',
        'Scènes mythologiques',
        'Art céramique grec classique'
      ]
    },
    {
  id: '7',
  title: 'Épée Médiévale',
  artist: 'Forgeron médiéval',
  period: 'Moyen Âge',
  description: 'Épée longue européenne du XIIIe siècle. Arme noble des chevaliers, elle était symbole de statut et d\'honneur au Moyen Âge.',
  category: 'histoire',
  sketchfabId: '86ccc7d241e046c3b37d46f362b7c3ed',
  thumbnail: 'https://images.unsplash.com/photo-1600081729801-fd151cba450f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  year: '1200-1300',
  dimensions: '100 cm de longueur',
  materials: 'Acier forgé, poignée en bois',
  highlights: [
    'Arme de chevalier',
    'Forge traditionnelle',
    'Symbole d\'honneur médiéval'
  ]
},
{
  id: '8',
  title: 'Buste de Jules César',
  artist: 'Sculpteur romain',
  period: 'Rome Antique',
  description: 'Portrait réaliste de Jules César, général et dictateur romain. Ce buste montre les traits caractéristiques du conquérant des Gaules.',
  category: 'art',
  sketchfabId: 'b7ac28da27d0474dbf4e2bf6bfbb5f8e',
  thumbnail: 'https://images.unsplash.com/photo-1758485551689-026a7e27405e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  year: '44 av. J.-C.',
  materials: 'Marbre',
  highlights: [
    'Portrait réaliste romain',
    'Figure historique majeure',
    'Art du portrait impérial'
  ]
},
{
  id: '9',
  title: 'Vénus de Milo',
  artist: 'Alexandros d\'Antioche',
  period: 'Grèce Hellénistique',
  description: 'Sculpture grecque représentant Aphrodite (Vénus). Célèbre pour ses bras manquants et sa beauté intemporelle, elle incarne l\'idéal esthétique de la Grèce antique.',
  category: 'art',
  sketchfabId: 'c78940a56b7f4dd798bb57d629a450ee', 
  thumbnail: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400',
  year: '130-100 av. J.-C.',
  dimensions: '2,02 m de hauteur',
  materials: 'Marbre de Paros',
  highlights: [
    'Icône de la beauté classique',
    'Mystère des bras manquants',
    'Trésor du Louvre'
  ]
},
{
  id: '10',
  title: 'Bouclier Spartiate',
  artist: 'Artisan grec',
  period: 'Grèce Antique',
  description: 'Bouclier hoplon circulaire utilisé par les guerriers spartiates. Pièce essentielle de l\'équipement de la phalange grecque.',
  category: 'histoire',
  sketchfabId: '20e98e1c662f4ad4ad56c7ed1a59f3c7',
  thumbnail: 'https://media.istockphoto.com/id/1356522741/photo/a-senior-bearded-warrior-gladiator-holding-a-fiery-weapon.webp?s=1024x1024&w=is&k=20&c=FICnbRKOFTW3q6-v-Hkwmp0MP_vOhkNYrJnqcZKg1Jg=',
  year: '500-400 av. J.-C.',
  dimensions: '90 cm de diamètre',
  materials: 'Bronze, bois',
  highlights: [
    'Arme défensive spartiate',
    'Formation en phalange',
    'Symbole du courage grec'
  ]
},

{
  id: '11',
  title: 'Casque de Gladiateur',
  artist: 'Forgeron romain',
  period: 'Empire Romain',
  description: 'Casque ornementé d\'un gladiateur romain. Ces casques spectaculaires étaient conçus autant pour la protection que pour impressionner la foule.',
  category: 'histoire',
  sketchfabId: '93a91a8e821e46f09e7cc26803ddf5c0',
  thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
  year: '100 ap. J.-C.',
  materials: 'Bronze, fer',
  highlights: [
    'Combat dans l\'arène',
    'Décoration élaborée',
    'Spectacle romain'
  ]
},

{
  id: '12',
  title: 'Squelette de Diplodocus',
  artist: 'Nature',
  period: 'Jurassique supérieur',
  description: 'Dinosaure herbivore géant pouvant atteindre 25 mètres de longueur. Son long cou lui permettait d\'atteindre la végétation en hauteur.',
  category: 'science',
  sketchfabId: '2beaf41980a947219ac71293f18acf98',
  thumbnail: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400',
  year: '150 millions d\'années',
  dimensions: '25 m de longueur',
  highlights: [
    'Herbivore géant',
    'Long cou caractéristique',
    'Fossile impressionnant'
  ]
},

{
  id: '13',
  title: 'Fossile d\'Ammonite',
  artist: 'Nature',
  period: 'Mésozoïque',
  description: 'Mollusque marin éteint avec une coquille spiralée. Les ammonites sont des fossiles index précieux pour dater les roches sédimentaires.',
  category: 'science',
  sketchfabId: '19ad3293c2634e399a62f69da3405b94',
  thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
  year: '200-65 millions d\'années',
  dimensions: '5-30 cm de diamètre',
  highlights: [
    'Coquille spiralée parfaite',
    'Fossile index géologique',
    'Extinction avec les dinosaures'
  ]
},
{
  id: '14',
  title: 'Cerveau Humain Anatomique',
  artist: 'Modèle médical',
  period: 'Anatomie Moderne',
  description: 'Modèle anatomique détaillé du cerveau humain montrant toutes les structures cérébrales. Outil essentiel pour l\'enseignement médical.',
  category: 'science',
  sketchfabId: 'e073c2590bc24daaa7323f4daa5b7784',
  thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400',
  year: 'Contemporain',
  highlights: [
    'Organe le plus complexe',
    'Centre du système nerveux',
    'Outil pédagogique médical'
  ]
},
{
  id: '15',
  title: 'Masque Maori',
  artist: 'Artisan maori',
  period: 'Culture Polynésienne',
  description: 'Masque traditionnel maori de Nouvelle-Zélande. Les motifs gravés (ta moko) racontent l\'histoire et le statut social du porteur.',
  category: 'culture',
  sketchfabId: 'd7191a9d1a324f2c8c5e2035bc5b701c', // Cherche "maori mask" sur Sketchfab
  thumbnail: 'https://plus.unsplash.com/premium_photo-1668780832722-86f023a88b6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
  year: 'Traditionnel',
  materials: 'Bois sculpté',
  highlights: [
    'Art polynésien sacré',
    'Tatouages symboliques',
    'Héritage culturel maori'
  ]
},
{
  id: '17',
  title: 'Statue Moai',
  artist: 'Peuple Rapa Nui',
  period: 'Culture de l\'Île de Pâques',
  description: 'Statue monolithique emblématique de l\'Île de Pâques. Ces géants de pierre représentent les ancêtres déifiés du peuple Rapa Nui.',
  category: 'culture',
  sketchfabId: '7eb3505d8fa249f589bc63174c09a738',
  thumbnail: 'https://images.unsplash.com/photo-1543346876-cefa4c22eb0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
  year: '1250-1500',
  dimensions: '4 m de hauteur moyenne',
  materials: 'Tuf volcanique',
  highlights: [
    'Mystère archéologique',
    'Sculptures monumentales',
    'Patrimoine mondial UNESCO'
  ]
},
{
  id: '18',
  title: 'Sitar Indien',
  artist: 'Luthier indien',
  period: 'Musique Classique Indienne',
  description: 'Instrument à cordes pincées emblématique de la musique classique indienne. Le sitar produit un son méditatif et envoûtant.',
  category: 'culture',
  sketchfabId: 'be957f7c52164164bee1170ed592e36c',
  thumbnail: 'https://media.istockphoto.com/id/186104280/photo/playing-the-sitar.webp?s=1024x1024&w=is&k=20&c=uFHKH8a4qOmHLOzuNuxdY8OSUa7OyspE4XWrx-DDhqQ=',
  year: 'Contemporain',
  materials: 'Bois de teck, calebasse',
  highlights: [
    'Musique classique indienne',
    'Son méditatif unique',
    'Tradition millénaire'
  ]
},
{
  id: '19',
  title: 'Cœur Humain Anatomique',
  artist: 'Modèle médical',
  period: 'Anatomie Cardiovasculaire',
  description: 'Modèle anatomique du cœur humain montrant les quatre cavités, les valves cardiaques et les principaux vaisseaux sanguins. Le cœur pompe environ 7 000 litres de sang par jour.',
  category: 'science',
  sketchfabId: 'a70c0c47fe4b4bbfabfc8f445365d5a4',
  thumbnail: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400',
  year: 'Contemporain',
  dimensions: '300 g de poids',
  highlights: [
    'Pompe vitale du corps',
    'Bat 100 000 fois par jour',
    'Centre du système circulatoire'
  ]
},
    
  ]);

  private categories = signal<MuseumCategory[]>([
    {
      id: 'art',
      name: 'Art',
      description: 'Sculptures, peintures et œuvres d\'art à travers les âges',
      icon: '🎨',
      color: '#e74c3c'
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Découvertes scientifiques et merveilles naturelles',
      icon: '🔬',
      color: '#3498db'
    },
    {
      id: 'histoire',
      name: 'Histoire',
      description: 'Artefacts historiques et témoignages du passé',
      icon: '🏛️',
      color: '#f39c12'
    },
    {
      id: 'culture',
      name: 'Culture',
      description: 'Patrimoine culturel et traditions du monde',
      icon: '🌍',
      color: '#27ae60'
    }
  ]);

  getArtifacts() {
    return this.artifacts();
  }

  getArtifactById(id: string): Artifact | undefined {
    return this.artifacts().find(a => a.id === id);
  }

  getArtifactsByCategory(category: string): Artifact[] {
    return this.artifacts().filter(a => a.category === category);
  }

  getCategories() {
    return this.categories();
  }

  searchArtifacts(query: string): Artifact[] {
    const lowerQuery = query.toLowerCase();
    return this.artifacts().filter(a =>
      a.title.toLowerCase().includes(lowerQuery) ||
      a.artist.toLowerCase().includes(lowerQuery) ||
      a.description.toLowerCase().includes(lowerQuery)
    );
  }
}





