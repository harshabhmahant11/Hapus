export const products = [
  {
    id: 'premium',
    name: 'Alphonso Premium Box',
    origin: 'Ratnagiri & Devgad',
    weight: '12 Mangoes · 200g-240g/piece',
    pieces: '12 pcs, 200-240g',
    price: 1599,
    mrp: 2500,
    badge: 'Best Seller',
    badgeClass: 'badge-best',
    featured: false,
    image: '/images/premium-mangoes.PNG',
    features: ['Premium Quality', 'Gift Ready']
  },
    {
    id: 'trial',
    name: 'Alphonso Trial Pack (Premium)',
    origin: 'Ratnagiri & Devgad',
    weight: '6 Mangoes · 1000g-1500g total',
    pieces: '6 pcs, 1000-1500g',
    price: 849,
    mrp: 1250,
    badge: 'Try First',
    badgeClass: 'badge-trial',
    featured: false,
    image: '/images/trailimg.jpeg',
    features: ['Starter Pack','Best Value']
  },
  {
    id: 'classic',
    name: 'Alphonso Classic Box',
    origin: 'Ratnagiri & Devgad',
    weight: '12 Mangoes · 180g-200g/piece',
    pieces: '12 pcs, 180-200g',
    price: 1099,
    mrp: 2000,
   badge: 'Sold Out',
    badgeClass: 'badge-soldout',
    featured: false,
    image: '/images/mango.jpg',
    features: ['Family Pack', 'Natural'],
    soldOut: true
  },

    {
    id: 'trial',
    name: 'Alphonso Trial Pack (Classic)',
    origin: 'Ratnagiri & Devgad',
    weight: '6 Mangoes · 800g-1000g total',
    pieces: '6 pcs, 800-1000g',
    price: 599,
    mrp: 1000,
    badge: 'Sold Out',
    badgeClass: 'badge-soldout',
    featured: false,
    image: '/images/trialClassic.jpg',
    features: ['Starter Pack', 'Best Value'],
    soldOut: true
  },
  // {
  //   id: 'family',
  //   name: 'Alphonso Family Peti (Premium)',
  //   origin: 'Ratnagiri & Devgad',
  //   weight: '48 Mangoes · 4 Dozen Box · 200g-240g/piece',
  //   pieces: '48 pcs, 200-240g',
  //   price: 6999,
  //   mrp: 10000,
  //   badge: 'Mega Saver',
  //   badgeClass: 'badge-saver',
  //   featured: false,
  //   image: '/images/premiumPeti.PNG',
  //   features: ['Bulk Pack', '30% Off', 'Free Shipping']
  // },
  // {
  //   id: 'family',
  //   name: 'Alphonso Family Peti (Classic)',
  //   origin: 'Ratnagiri & Devgad',
  //   weight: '48 Mangoes · 4 Dozen Box · 180g-200g/piece',
  //   pieces: '48 pcs, 180-200g',
  //   price: 3999,
  //   mrp: 8000,
  //   badge: 'Mega Saver',
  //   badgeClass: 'badge-saver',
  //   featured: false,
  //   image: '/images/peti.webp',
  //   features: ['Bulk Pack', '44% Off', 'Free Shipping']
  // }
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
