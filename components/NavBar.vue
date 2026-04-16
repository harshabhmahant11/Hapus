<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#" class="logo">
        <span class="logo-icon">🥭</span>
        <span class="logo-text">Hapus</span>
      </a>

      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#why" @click="menuOpen = false">Why Hapus</a>
        <a href="#products" @click="menuOpen = false">Mangoes</a>
        <a href="#how-it-works" @click="menuOpen = false">How It Works</a>
        <a href="#testimonials" @click="menuOpen = false">Reviews</a>
        <a href="#pre-order" class="nav-cta" @click="menuOpen = false">Pre-Order Now</a>
      </div>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
        <span :class="{ active: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 253, 247, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 253, 247, 0.98);
  border-bottom: 1px solid rgba(245, 158, 11, 0.15);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.75rem;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--earth-brown);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover {
  color: var(--mango-deep);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--mango-gold);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white !important;
  padding: 0.625rem 1.5rem;
  border-radius: 50px;
  font-weight: 600 !important;
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.nav-cta::after {
  display: none !important;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

.menu-toggle {
  display: none;
  background: none;
  width: 32px;
  height: 32px;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-dark);
  position: absolute;
  transition: all 0.3s ease;
}

.menu-toggle span { top: 50%; left: 50%; transform: translate(-50%, -50%); }
.menu-toggle span::before { content: ''; top: -7px; }
.menu-toggle span::after { content: ''; top: 7px; }

.menu-toggle span.active { background: transparent; }
.menu-toggle span.active::before { top: 0; transform: rotate(45deg); }
.menu-toggle span.active::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-warm);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    border-bottom: 2px solid var(--mango-light);
  }

  .nav-links.open {
    transform: translateY(0);
  }
}
</style>
