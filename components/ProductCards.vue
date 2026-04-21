<template>
  <section id="products" class="products-section">
    <div class="container">
      <h2 class="section-title">Choose Your <span class="gold">Mangoes</span></h2>
      <p class="section-subtitle">
        Handpicked, graded by size, and packed with care. Every box is a promise of the finest Alphonso quality.
      </p>

      <div class="products-grid">
        <div v-for="(product, i) in products" :key="i" class="product-card" :class="{ featured: product.featured, 'sold-out': product.soldOut }">
          <div v-if="product.badge" class="product-badge" :class="product.badgeClass">
            {{ product.badge }}
          </div>

          <div class="product-image-wrap">
            <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
            <div v-if="product.soldOut" class="sold-out-overlay">
              <span class="sold-out-text">Sold Out</span>
            </div>
          </div>

          <div class="product-info">
            <div class="product-origin">{{ product.origin }}</div>
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-weight">{{ product.weight }}</p>

            <div class="product-features">
              <span v-for="(feat, j) in product.features" :key="j" class="product-feat">
                {{ feat }}
              </span>
            </div>

            <div class="product-pricing">
              <div class="price-current">₹{{ product.price.toLocaleString('en-IN') }}</div>
              <div v-if="product.mrp" class="price-mrp">₹{{ product.mrp.toLocaleString('en-IN') }}</div>
              <div v-if="product.mrp" class="price-discount">
                {{ Math.round(((product.mrp - product.price) / product.mrp) * 100) }}% OFF
              </div>
            </div>

            <a v-if="!product.soldOut" href="#pre-order" class="product-cta">
              Pre-Order Now →
            </a>
            <div v-else class="product-cta sold-out-btn">
              Sold Out
            </div>
          </div>
        </div>
      </div>

      <div class="products-note">
        <span class="note-icon">💡</span>
        <p>All prices include packaging & handling. Shipping charges may be extra based on your location.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from '~/config/products'
</script>

<style scoped>
.products-section {
  background: linear-gradient(180deg, white 0%, var(--mango-cream) 100%);
}

.gold {
  color: var(--mango-deep);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(245, 158, 11, 0.15);
}

.product-card.featured {
  border: 2px solid var(--mango-gold);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.12);
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 0.375rem 0.875rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
}

.badge-best {
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
}

.badge-popular {
  background: linear-gradient(135deg, var(--leaf-light), var(--leaf-green));
  color: white;
}

.badge-saver {
  background: linear-gradient(135deg, #8B5CF6, #6D28D9);
  color: white;
}

.badge-trial {
  background: linear-gradient(135deg, #3B82F6, #1D4ED8);
  color: white;
}

.badge-soldout {
  background: linear-gradient(135deg, #6B7280, #4B5563);
  color: white;
}

.product-image-wrap {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #FEF3C7, #FDE68A);
}

.product-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-card.sold-out {
  opacity: 0.75;
}

.sold-out-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.sold-out-text {
  background: white;
  color: #6B7280;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
}

.sold-out-btn {
  background: #D1D5DB !important;
  color: #6B7280 !important;
  cursor: not-allowed;
  pointer-events: none;
}

.product-info {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-origin {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--leaf-green);
  margin-bottom: 0.375rem;
}

.product-name {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.product-weight {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1rem;
}

.product-feat {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  background: var(--mango-light);
  color: var(--earth-brown);
  border-radius: 50px;
}

.product-pricing {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-top: auto;
}

.price-current {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.price-mrp {
  font-size: 0.9375rem;
  color: var(--text-light);
  text-decoration: line-through;
}

.price-discount {
  font-size: 0.75rem;
  font-weight: 700;
  color: #DC2626;
  background: #FEF2F2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
}

.product-cta {
  display: block;
  text-align: center;
  padding: 0.75rem;
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
}

.product-cta:hover {
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  transform: translateY(-2px);
}

.products-note {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  border-left: 4px solid var(--mango-gold);
}

.note-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.products-note p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .products-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .product-card {
    border-radius: 18px;
  }

  .product-features {
    gap: 0.5rem;
  }

  .product-pricing {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .product-cta {
    width: 100%;
  }
}
</style>
