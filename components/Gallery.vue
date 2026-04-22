<template>
  <section class="gallery-section">
    <div class="container">
      <div class="gallery-header">
        <h2 class="section-title">Our <span class="gold">Alphonso Mangoes</span></h2>
        <p class="section-subtitle">
         <strong>Original Pictures</strong> — Straight from our orchards in Ratnagiri & Devgad. See the authentic beauty of premium Alphonso mangoes
        </p>
      </div>

      <div class="carousel-wrapper">
        <!-- Left Arrow -->
        <button
          class="carousel-arrow carousel-arrow-left"
          @click="prevSlide"
          aria-label="Previous images"
        >
          ❮
        </button>

        <!-- Carousel Container -->
        <div class="carousel-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }">
            <div v-for="image in galleryImages" :key="image.id" class="carousel-slide">
              <img 
                :src="image.image" 
                :alt="image.alt" 
                class="gallery-image" 
                loading="lazy"
                @click="openLightbox(image)"
              />
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          class="carousel-arrow carousel-arrow-right"
          @click="nextSlide"
          aria-label="Next images"
        >
          ❯
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="carousel-dots">
        <button
          v-for="i in totalDots"
          :key="i"
          class="dot"
          :class="{ active: i === currentDot }"
          @click="goToSlide(i)"
          :aria-label="`Go to slide group ${i}`"
        ></button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="lightbox-fade">
      <div v-if="selectedImage" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox" aria-label="Close lightbox">✕</button>
          <img :src="selectedImage.image" :alt="selectedImage.alt" class="lightbox-image" />
          <div class="lightbox-caption">{{ selectedImage.alt }}</div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { galleryImages } from '~/config/gallery'

const visibleImages = ref(3)
const currentIndex = ref(0)
const selectedImage = ref(null)

const totalDots = computed(() => {
  return Math.ceil(galleryImages.length / visibleImages.value)
})

const currentDot = computed(() => {
  return Math.floor(currentIndex.value / visibleImages.value) + 1
})

const maxIndex = computed(() => {
  return galleryImages.length - visibleImages.value
})

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value
  }
}

const goToSlide = (dotIndex) => {
  currentIndex.value = (dotIndex - 1) * visibleImages.value
}

const openLightbox = (image) => {
  selectedImage.value = image
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
}

const handleResize = () => {
  const width = window.innerWidth
  if (width <= 640) {
    visibleImages.value = 1
  } else if (width <= 1024) {
    visibleImages.value = 2
  } else {
    visibleImages.value = 3
  }
  currentIndex.value = 0
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.gallery-section {
  background: white;
}

.gold {
  color: var(--mango-deep);
}

.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.carousel-container {
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(135deg, #FEF3C7, #FDE68A);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 calc(100% / 3);
  padding: 1rem;
}

.gallery-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

/* Responsive carousel slides */
@media (max-width: 1024px) {
  .carousel-slide {
    flex: 0 0 50%;
    padding: 0.75rem;
  }

  .gallery-image {
    height: 240px;
  }
}

@media (max-width: 640px) {
  .carousel-slide {
    flex: 0 0 100%;
    padding: 0.5rem;
  }

  .gallery-image {
    height: 300px;
  }
}

.carousel-arrow {
  position: relative;
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.carousel-arrow:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

.carousel-arrow:active {
  transform: scale(0.95);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--mango-gold);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--mango-gold);
  transform: scale(1.2);
}

.dot:hover {
  background: var(--mango-light);
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.lightbox-close:hover {
  background: #f0f0f0;
  transform: scale(1.1);
}

.lightbox-caption {
  color: white;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.95rem;
}

/* Lightbox Transition */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .carousel-arrow {
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
}

@media (max-width: 640px) {
  .carousel-wrapper {
    gap: 0.75rem;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.125rem;
  }

  .carousel-dots {
    gap: 0.5rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .lightbox-overlay {
    padding: 1rem;
  }

  .lightbox-close {
    top: -35px;
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
  }
}
</style>
