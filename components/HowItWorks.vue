<template>
  <section id="how-it-works" class="how-section section-padding">
    <div class="container">
      <h2 class="section-title">Farm to <span class="gold">Your Doorstep</span></h2>
      <p class="section-subtitle">
        A transparent journey from the orchards of Konkan to your table — no middlemen, no compromises.
      </p>

      <div class="steps-grid">
        <div v-for="(step, i) in steps" :key="i" class="step-card">
          <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="step-icon">{{ step.icon }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
          <div v-if="i < steps.length - 1" class="step-connector"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: '📝',
    title: 'Place Your Pre-Order',
    desc: 'Select your preferred box size and fill in the pre-order form. Secure your mangoes before the season rush.'
  },
  {
    icon: '👨‍🌾',
    title: 'Harvested Fresh',
    desc: 'Your mangoes are handpicked at the perfect stage from Ratnagiri/Devgad orchards by our partner farmers.'
  },
  {
    icon: '🔍',
    title: 'Quality Checked',
    desc: 'Every mango is individually inspected for size, aroma, and ripeness. Only the best make it to your box.'
  },
  {
    icon: '📦',
    title: 'Packed & Shipped',
    desc: 'Mangoes are cushioned in premium boxes and dispatched via express cold-chain delivery within 24 hours.'
  },
  {
    icon: '🥭',
    title: 'Enjoy at Home',
    desc: 'Receive perfectly ripened, aromatic Alphonso mangoes at your doorstep. The taste of pure Konkan sunshine!'
  }
]
</script>

<style scoped>
.how-section {
  background: white;
}

.gold {
  color: var(--mango-deep);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  position: relative;
}

.step-card {
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
}

.step-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--mango-light);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.step-desc {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -0.75rem;
  width: 1.5rem;
  height: 2px;
  background: linear-gradient(90deg, var(--mango-gold), var(--mango-light));
  z-index: 1;
}

@media (max-width: 968px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .step-connector {
    display: none;
  }
}

@media (max-width: 640px) {
  .steps-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .step-card {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    text-align: left;
    gap: 0 1rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--mango-light);
  }

  .step-number {
    display: none;
  }

  .step-icon {
    grid-row: 1 / 3;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
}
</style>
