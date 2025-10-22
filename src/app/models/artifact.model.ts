// src/app/models/artifact.model.ts

export interface Artifact {
  id: string;
  title: string;
  artist: string;
  period: string;
  description: string;
  category: 'art' | 'science' | 'histoire' | 'culture';
  sketchfabId: string; // ID du modèle Sketchfab
  thumbnail: string;
  year: string;
  dimensions?: string;
  materials?: string;
  highlights: string[];
}

export interface MuseumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}