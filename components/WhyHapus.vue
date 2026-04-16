<template>
  <section id="why" class="why-section section-padding">
    <div class="container">
      <h2 class="section-title">Why Choose <span class="gold">Hapus</span>?</h2>
      <p class="section-subtitle">
        We don't just sell mangoes — we deliver a promise of purity, tradition, and unmatched flavour from India's finest mango-growing region.
      </p>

      <div class="features-grid">
        <div v-for="(feature, i) in features" :key="i" class="feature-card">
          <div class="feature-icon-wrap" :style="{ background: feature.bg }">
            <span class="feature-icon">{{ feature.icon }}</span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>

      <div class="trust-bar">
        <div class="trust-item" v-for="(item, i) in trustItems" :key="i">
          <span class="trust-icon">{{ item.icon }}</span>
          <span class="trust-text">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🌿',
    title: '100% Natural',
    desc: 'No artificial colors, no wax coating, no preservatives. Just pure, authentic Alphonso mangoes as nature intended.',
    bg: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)'
  },
  {
    icon: '🚫',
    title: 'Carbide Free',
    desc: 'We never use calcium carbide or any chemicals to ripen our mangoes. Each mango ripens naturally on the tree under the Konkan sun.',
    bg: 'linear-gradient(135deg, #FEF2F2, #FECACA)'
  },
  {
    icon: '☀️',
    title: 'Naturally Ripened',
    desc: 'Sun-kissed and tree-ripened for the perfect golden hue, rich aroma, and the signature creamy-sweet taste Hapus is famous for.',
    bg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)'
  },
  {
    icon: '🏔️',
    title: 'Ratnagiri & Devgad Origin',
    desc: 'Sourced exclusively from the Konkan belt — the GI-tagged homeland of Alphonso mangoes, where volcanic soil creates magic.',
    bg: 'linear-gradient(135deg, #F0F9FF, #BAE6FD)'
  },
  {
    icon: '👨‍🌾',
    title: 'Direct From Farmers',
    desc: 'No middlemen, no cold storage delays. Handpicked by farmers and shipped within 24 hours of harvest for peak freshness.',
    bg: 'linear-gradient(135deg, #FFF7ED, #FED7AA)'
  },
  {
    icon: '📦',
    title: 'Premium Packaging',
    desc: 'Each mango is individually cushioned in premium corrugated boxes designed to protect during transit and deliver perfection.',
    bg: 'linear-gradient(135deg, #FAF5FF, #E9D5FF)'
  }
]

const trustItems = [
  { icon: '✅', text: 'FSSAI Certified' },
  { icon: '🏷️', text: 'GI Tagged Alphonso' },
  { icon: '🔬', text: 'Lab Tested' },
  { icon: '🚚', text: 'Pan-India Delivery' },
  { icon: '💯', text: '100% Refund Guarantee' }
]
</script>

<style scoped>
.why-section {
  background: white;
}

.gold {
  color: var(--mango-deep);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: var(--bg-warm);
  border: 1px solid rgba(245, 158, 11, 0.08);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  border-color: rgba(245, 158, 11, 0.2);
}

.feature-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.feature-icon {
  font-size: 1.75rem;
}

.feature-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
}

.feature-desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.trust-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, var(--mango-cream), #FEF9E7);
  border-radius: 16px;
  border: 1px solid var(--mango-light);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-dark);
}

.trust-icon {
  font-size: 1.25rem;
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .trust-bar {
    gap: 1rem;
  }
}
</style>
