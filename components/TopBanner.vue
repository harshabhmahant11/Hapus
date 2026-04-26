<template>
  <div class="top-banner">
    <div class="banner-track">
      <span v-for="i in 3" :key="i" class="banner-content">
        🥭 100% Carbide Free Alphonso Mangoes &nbsp;|&nbsp; 🌿 Naturally Ripened &nbsp;|&nbsp; 🚚 Delivered in 2-3 Days &nbsp;|&nbsp; 📦 Order Now — Limited Stock &nbsp;|&nbsp;
      </span>
    </div>
  </div>
</template>

<style scoped>
.top-banner {
  background: linear-gradient(90deg, var(--leaf-green), #15803D);
  color: white;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 0;
  overflow: hidden;
  white-space: nowrap;
}

.banner-track {
  display: inline-flex;
  animation: scroll-left 30s linear infinite;
}

.banner-content {
  flex-shrink: 0;
  padding: 0 1rem;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
</style>
