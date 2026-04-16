export const products = [
  {
    id: 'premium',
    name: 'Alphonso Premium Box',
    origin: 'Ratnagiri',
    weight: '12 Mangoes · 240g-270g/piece',
    pieces: '12 pcs, 240-270g',
    price: 2500,
    mrp: 3000,
    badge: 'Best Seller',
    badgeClass: 'badge-best',
    featured: true,
    image: 'https://images.pexels.com/photos/4687187/pexels-photo-4687187.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    features: ['Jumbo Size', 'GI Tagged', 'Gift Ready']
  },
  {
    id: 'classic',
    name: 'Alphonso Classic Box',
    origin: 'Ratnagiri & Devgad',
    weight: '12 Mangoes · 210g-240g/piece',
    pieces: '12 pcs, 210-240g',
    price: 2000,
    mrp: 2500,
    badge: 'Popular',
    badgeClass: 'badge-popular',
    featured: false,
    image: 'https://images.pexels.com/photos/28939331/pexels-photo-28939331.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    features: ['Size A', 'Family Pack', 'Natural']
  },
  {
    id: 'family',
    name: 'Alphonso Family Peti',
    origin: 'Ratnagiri',
    weight: '48 Mangoes · 4 Dozen Box · 210g-240g/piece',
    pieces: '48 pcs, 210-240g',
    price: 8500,
    mrp: 11000,
    badge: 'Mega Saver',
    badgeClass: 'badge-saver',
    featured: false,
    image: 'https://images.pexels.com/photos/5097708/pexels-photo-5097708.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    features: ['Bulk Pack', '23% Off', 'Free Shipping']
  },
  {
    id: 'trial',
    name: 'Alphonso Trial Pack',
    origin: 'Devgad',
    weight: '6 Mangoes · 800g-1000g total',
    pieces: '6 pcs, 800-1000g',
    price: 900,
    mrp: null,
    badge: 'Try First',
    badgeClass: 'badge-trial',
    featured: false,
    image: 'https://images.pexels.com/photos/17104932/pexels-photo-17104932.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    features: ['Starter Pack', 'Mixed Sizes', 'Best Value']
  }
]

export function formatPrice(price) {
  return price.toLocaleString('en-IN')
}

export function getProductLabel(product) {
  return `${product.name} — ${product.weight} — ₹${formatPrice(product.price)}`
}

export function getProductValue(product) {
  return `${product.name} (${product.pieces}) - ₹${formatPrice(product.price)}`
}
