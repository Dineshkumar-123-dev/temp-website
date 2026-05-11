export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Chronograph',
    price: 249,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    description: 'A timeless timepiece featuring a clean dial with slim hands and a premium Italian leather strap. Water-resistant to 50m with sapphire crystal glass.',
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: '2',
    name: 'Noise Cancelling Headphones',
    price: 349,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    description: 'Immerse yourself in pure sound with adaptive noise cancellation and 30-hour battery life. Premium over-ear design with memory foam cushions.',
    featured: true,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: '3',
    name: 'Smart Speaker Hub',
    price: 199,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=800',
    description: 'Control your entire home with just your voice. 360° room-filling sound with deep bass and an elegant matte finish that complements any interior.',
    featured: true,
    rating: 4.7,
    reviewCount: 205,
  },
  {
    id: '4',
    name: 'Leather Weekend Bag',
    price: 189,
    originalPrice: 240,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
    description: 'The perfect companion for your short trips. Hand-stitched from full-grain vegetable-tanned leather that develops a beautiful patina over time.',
    featured: false,
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 59,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1586816832793-dc444f0530fb?auto=format&fit=crop&q=80&w=800',
    description: '15W fast wireless charging for all Qi-compatible devices. Ultra-thin profile with a non-slip surface and an intelligent LED status indicator.',
    featured: true,
    isNew: true,
    rating: 4.6,
    reviewCount: 441,
  },
  {
    id: '6',
    name: 'Mechanical Keyboard',
    price: 159,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800',
    description: 'Satisfying tactile feedback with customizable per-key RGB lighting. Hot-swappable switches and an aircraft-grade aluminium body.',
    featured: false,
    rating: 4.8,
    reviewCount: 199,
  },
  {
    id: '7',
    name: 'Ceramic Desk Lamp',
    price: 129,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-thrown ceramic base with warm-tone LED lighting. Touch-dimming control and an architect-style adjustable arm for focused task lighting.',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 63,
  },
  {
    id: '8',
    name: 'Titanium Fountain Pen',
    price: 95,
    originalPrice: 120,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=800',
    description: 'A writing instrument built for a lifetime. Grade-5 titanium body with a 14k gold nib that flexes perfectly to your writing style.',
    featured: false,
    rating: 5.0,
    reviewCount: 38,
  },
];

export const categories = ['All', ...new Set(products.map(p => p.category))];
