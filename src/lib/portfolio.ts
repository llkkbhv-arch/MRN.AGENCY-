import villa from '@/assets/villa.jpg'
import perfume from '@/assets/perfume.jpg'
import restaurant from '@/assets/restaurant.jpg'
import office from '@/assets/office.jpg'
import sneakers from '@/assets/sneakers.jpg'
import skincare from '@/assets/skincare.jpg'
import hotel from '@/assets/hotel.jpg'
import travel from '@/assets/travel.jpg'
import bakery from '@/assets/bakery.jpg'
import dental from '@/assets/dental.jpg'
import fitness from '@/assets/fitness.jpg'
import cycling from '@/assets/cycling.jpg'
import gallery from '@/assets/gallery.jpg'
import festival from '@/assets/festival.jpg'
import technology from '@/assets/technology.jpg'

export const projectCategories = ['Sites créatifs', 'Sites professionnels', 'E-commerce', 'Voyage & hôtellerie', 'Artisans & commerces', 'Santé & bien-être', 'Sport & lifestyle', 'Culture & événements'] as const

export const projects = [
  { id: 'architecture', name: 'L’art de vivre autrement.', category: 'Sites professionnels', field: 'Architecture & immobilier', image: villa, theme: 'architecture', label: 'Architecture', headline: 'Des lieux.\nDes émotions.', description: 'Une vitrine lumineuse où l’architecture prend toute sa place. Des projets mis en valeur et un parcours pensé pour donner envie de prendre contact.' },
  { id: 'essence', name: 'Une présence qui marque.', category: 'Sites créatifs', field: 'Beauté & lifestyle', image: perfume, theme: 'essence', label: 'Maison de parfum', headline: 'L’essence\nde l’exception.', description: 'Un univers immersif et une direction artistique affirmée. Une expérience éditoriale pour une maison de parfum fictive.' },
  { id: 'trattoria', name: 'Le goût des belles choses.', category: 'Sites créatifs', field: 'Restaurant & gastronomie', image: restaurant, theme: 'trattoria', label: 'Restaurant', headline: 'La dolce\nvita, à table.', description: 'Une adresse imaginaire, une identité généreuse et une carte gourmande. Une approche chaleureuse pour les métiers de la restauration.' },
  { id: 'conseil', name: 'L’expertise, sans détour.', category: 'Sites professionnels', field: 'Conseil & entreprise', image: office, theme: 'conseil', label: 'Cabinet de conseil', headline: 'Voir plus loin.\nAvancer ensemble.', description: 'Une présence claire, structurée et rassurante. Une vitrine professionnelle conçue pour présenter une expertise et ses services.' },
  { id: 'sneakers', name: 'Le prochain mouvement.', category: 'E-commerce', field: 'Sneakers & mode', image: sneakers, theme: 'sneakers', label: 'Sneaker shop', headline: 'MOVE\nDIFFERENT.', description: 'Une boutique fictive aux lignes sportives. Collections, fiches produit et sélection de tailles.' },
  { id: 'skincare', name: 'L’éclat au naturel.', category: 'E-commerce', field: 'Cosmétiques & soins', image: skincare, theme: 'skincare', label: 'Soins de peau', headline: 'Votre peau.\nVotre rituel.', description: 'Un concept beauté lumineux. Rituels, ingrédients et produits prennent le premier rôle.' },
  { id: 'hotel', name: 'Une parenthèse ailleurs.', category: 'Voyage & hôtellerie', field: 'Hôtel & escapades', image: hotel, theme: 'hotel', label: 'Boutique hôtel', headline: 'Ralentir.\nEnfin.', description: 'Une adresse fictive face à la mer. Chambres, expériences et découverte du lieu.' },
  { id: 'travel', name: 'L’appel du grand air.', category: 'Voyage & hôtellerie', field: 'Voyage & aventure', image: travel, theme: 'travel', label: 'Voyages outdoor', headline: 'PARTIR\nPLUS LOIN.', description: 'Une agence d’aventure imaginaire. Des destinations immersives et des itinéraires à explorer.' },
  { id: 'bakery', name: 'Le bon goût du quotidien.', category: 'Artisans & commerces', field: 'Boulangerie artisanale', image: bakery, theme: 'bakery', label: 'Maison artisanale', headline: 'Du grain.\nDu cœur.', description: 'Un concept de boulangerie de quartier. Produits du jour et savoir-faire artisanal.' },
  { id: 'dental', name: 'Un sourire, simplement.', category: 'Santé & bien-être', field: 'Cabinet dentaire', image: dental, theme: 'dental', label: 'Clinique dentaire', headline: 'Souriez.\nOn est là.', description: 'Une vitrine médicale fictive, claire et rassurante. Soins, équipe et prise de contact.' },
  { id: 'fitness', name: 'L’énergie sans limite.', category: 'Sport & lifestyle', field: 'Coaching & fitness', image: fitness, theme: 'fitness', label: 'Studio de sport', headline: 'PLUS FORT.\nCHAQUE JOUR.', description: 'Un studio de coaching imaginaire. Séances, programmes et identité visuelle énergique.' },
  { id: 'cycling', name: 'Tracer sa propre route.', category: 'Sport & lifestyle', field: 'Cyclisme & équipement', image: cycling, theme: 'cycling', label: 'Atelier cycliste', headline: 'LA ROUTE\nEST À VOUS.', description: 'Un concept dédié au vélo. Équipements, atelier et esprit de communauté.' },
  { id: 'gallery', name: 'L’art hors du cadre.', category: 'Sites créatifs', field: 'Art & galerie', image: gallery, theme: 'gallery', label: 'Galerie contemporaine', headline: 'Changer\nle regard.', description: 'Une galerie fictive à la composition éditoriale. Œuvres, artistes et expositions.' },
  { id: 'festival', name: 'La nuit nous appartient.', category: 'Culture & événements', field: 'Musique & festival', image: festival, theme: 'festival', label: 'Festival électronique', headline: 'FEEL\nTHE NIGHT.', description: 'Un festival imaginaire. Programmation, artistes et ambiance électrique.' },
  { id: 'technology', name: 'Le futur, au présent.', category: 'Sites professionnels', field: 'Technologie & produit', image: technology, theme: 'technology', label: 'Studio tech', headline: 'Less noise.\nMore future.', description: 'Une marque technologique fictive. Un produit mis en scène dans un univers précis et minimal.' },
] as const
export const offers = [
  { name: 'L’accompagnement', amount: 200, frequency: '/ mois', subtitle: 'Un site qui évolue avec vous.', features: ['Site complet et professionnel', 'Modifications incluses', 'Mises à jour et sécurité', 'Optimisation Google', 'Support et accompagnement'], maintenance: true },
  { name: 'L’essentiel', amount: 499, frequency: 'en une fois', subtitle: 'Votre site, prêt à prendre sa place.', features: ['Site complet et professionnel', 'Design adapté aux mobiles', 'Livraison du site finalisé'], exclusions: ['Sans modification après livraison', 'Sans maintenance ni support'], maintenance: false },
] as const
