<template>
  <section class="hero">
    <div class="hero-bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge fade-in">
          <span class="badge-dot"></span>
          Pre-Orders Open for 2026 Season
        </div>

        <h1 class="hero-title fade-in delay-1">
          The King of Mangoes,
          <span class="highlight">Alphonso</span>
          Straight from
          <span class="highlight-alt">Ratnagiri</span>
        </h1>

        <p class="hero-desc fade-in delay-2">
          Experience the authentic taste of Alphonso Hapus mangoes — 
          100% natural, carbide-free, and sun-ripened on the tree. 
          Handpicked from heritage farms in the Konkan belt.
        </p>

        <div class="hero-stats fade-in delay-3">
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Chemical Free</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Happy Families</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">98%</span>
            <span class="stat-label">A-Grade Mangoes</span>
          </div>
        </div>

        <div class="hero-actions fade-in delay-4">
          <a href="#pre-order" class="btn-primary">
            🥭 Pre-Order Now
            <span class="btn-arrow">→</span>
          </a>
          <a href="#products" class="btn-secondary">
            View Mangoes
          </a>
        </div>
      </div>

      <div class="hero-visual fade-in delay-2">
        <div class="mango-showcase">
          <img
            src="/images/mainn.jpg"
            alt="Premium Alphonso Hapus Mangoes from Ratnagiri"
            class="mango-img"
          />
          <div class="mango-glow"></div>
        </div>

        <div class="floating-card card-1">
          <span class="card-emoji">🌿</span>
          <span>Naturally Ripened</span>
        </div>

        <div class="floating-card card-2">
          <span class="card-emoji">🚫</span>
          <span>No Chemicals</span>
        </div>

        <div class="floating-card card-3">
          <span class="card-emoji">👨‍🌾</span>
          <span>Handpicked</span>
        </div>
      </div>
    </div>

    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(135deg, var(--mango-cream) 0%, #FEF9E7 50%, #FDF2D0 100%);
  padding: 4rem 0 6rem;
  overflow: hidden;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-bg-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--mango-gold);
  top: -100px;
  right: -100px;
  filter: blur(80px);
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--leaf-light);
  bottom: -50px;
  left: -50px;
  filter: blur(60px);
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: var(--mango-deep);
  top: 50%;
  left: 40%;
  filter: blur(80px);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid var(--mango-light);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--leaf-green);
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--leaf-light);
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.highlight {
  color: var(--mango-deep);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(245, 158, 11, 0.25);
  border-radius: 4px;
  z-index: -1;
}

.highlight-alt {
  color: var(--leaf-green);
}

.hero-desc {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(245, 158, 11, 0.12);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  width: fit-content;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--mango-deep);
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--mango-light);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.0625rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.5);
}

.btn-arrow {
  transition: transform 0.3s;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--earth-brown);
  border: 2px solid var(--earth-brown);
  transition: all 0.3s ease;
  text-align: center;
}

.btn-secondary:hover {
  background: var(--earth-brown);
  color: white;
}

/* Visual Side */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mango-showcase {
  position: relative;
  width: 420px;
  height: 420px;
}

.mango-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid white;
  box-shadow: 0 20px 60px rgba(245, 158, 11, 0.25);
  animation: float 6s ease-in-out infinite;
}

.mango-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%);
  z-index: -1;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  z-index: 3;
  animation: float 5s ease-in-out infinite;
}

.card-emoji {
  font-size: 1.25rem;
}

.card-1 {
  top: 10%;
  right: -10%;
  animation-delay: 0s;
  color: var(--leaf-green);
}

.card-2 {
  bottom: 20%;
  left: -5%;
  animation-delay: 1.5s;
  color: #DC2626;
}

.card-3 {
  bottom: 5%;
  right: 5%;
  animation-delay: 3s;
  color: var(--mango-deep);
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 1;
}

.hero-wave svg {
  width: 100%;
  display: block;
}

@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-content {
    order: 1;
  }

  .hero-visual {
    order: 0;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .hero-stats {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .hero-actions .btn-primary,
  .hero-actions .btn-secondary {
    width: 100%;
    max-width: 320px;
  }

  .mango-showcase {
    width: 280px;
    height: 280px;
  }

  .floating-card {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }

  .card-1 { right: 0%; }
  .card-2 { left: 5%; }
}

@media (max-width: 640px) {
  .hero {
    padding: 3rem 0 4rem;
    min-height: auto;
  }

  .hero-grid {
    gap: 2rem;
  }

  .hero-badge {
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  .hero-desc {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .hero-stats {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem;
  }

  .stat {
    width: 100%;
  }

  .stat-divider {
    display: none;
  }

  .hero-actions {
    gap: 0.75rem;
  }

  .hero-actions .btn-primary,
  .hero-actions .btn-secondary {
    max-width: none;
  }

  .mango-showcase {
    width: 220px;
    height: 220px;
  }

  .hero-visual {
    padding-top: 1rem;
  }

  .floating-card {
    display: none;
  }

  .shape-1 {
    width: 260px;
    height: 260px;
    top: -90px;
    right: -90px;
  }

  .shape-2 {
    width: 220px;
    height: 220px;
    bottom: -60px;
    left: -60px;
  }

  .shape-3 {
    width: 140px;
    height: 140px;
    top: 55%;
    left: 38%;
  }
}
</style>
