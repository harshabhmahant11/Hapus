<template>
  <section id="testimonials" class="testimonials-section section-padding">
    <div class="container">
      <h2 class="section-title">What Our <span class="gold">Customers</span> Say</h2>
      <p class="section-subtitle">
        Thousands of families trust Hapus for authentic Alphonso mangoes every season.
      </p>

      <div class="testimonials-grid">
        <div v-for="(review, i) in reviews" :key="i" class="review-card">
          <div class="review-stars">
            <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= review.stars }">★</span>
          </div>
          <p class="review-text">"{{ review.text }}"</p>
          <div class="review-author">
            <div class="author-avatar" :style="{ background: review.color }">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div class="author-name">{{ review.name }}</div>
              <div class="author-location">{{ review.location }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="social-proof">
        <div class="proof-item">
          <span class="proof-number">4.8</span>
          <div class="proof-stars">★★★★★</div>
          <span class="proof-label">Average Rating</span>
        </div>
        <div class="proof-divider"></div>
        <div class="proof-item">
          <span class="proof-number">5000+</span>
          <span class="proof-label">Happy Customers</span>
        </div>
        <div class="proof-divider"></div>
        <div class="proof-item">
          <span class="proof-number">15,000+</span>
          <span class="proof-label">Boxes Delivered</span>
        </div>
        <div class="proof-divider"></div>
        <div class="proof-item">
          <span class="proof-number">98%</span>
          <span class="proof-label">Repeat Orders</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    stars: 5,
    text: 'The best Alphonso mangoes I\'ve had in years! You can actually smell them the moment you open the box. My kids couldn\'t stop eating them. Ordering 2 more boxes next week!',
    color: 'linear-gradient(135deg, #F59E0B, #D97706)'
  },
  {
    name: 'Rajesh Patel',
    location: 'Pune',
    stars: 5,
    text: 'Finally found a trustworthy source for chemical-free mangoes. The taste is exactly like what we used to get from our relatives\' farm in Ratnagiri. Pure nostalgia!',
    color: 'linear-gradient(135deg, #22C55E, #166534)'
  },
  {
    name: 'Ananya Desai',
    location: 'Bangalore',
    stars: 5,
    text: 'Ordered the trial pack first and was blown away by the quality. Now I\'ve pre-ordered the family peti for the whole season. Worth every rupee — no more market uncertainty!',
    color: 'linear-gradient(135deg, #8B5CF6, #6D28D9)'
  },
  {
    name: 'Dr. Mehta',
    location: 'Delhi',
    stars: 5,
    text: 'As a doctor, I\'m very careful about what my family eats. These mangoes are genuinely carbide-free — the natural ripening is evident in the aroma and texture. Highly recommended.',
    color: 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
  },
  {
    name: 'Sneha Kulkarni',
    location: 'Nagpur',
    stars: 5,
    text: 'Sent a box to my parents and they said it was the best gift ever! The packaging was so careful — not a single mango was damaged. Will definitely order again.',
    color: 'linear-gradient(135deg, #EC4899, #BE185D)'
  },
  {
    name: 'Vikram Joshi',
    location: 'Hyderabad',
    stars: 4,
    text: 'Excellent quality mangoes with the perfect sweetness-to-tang ratio. Delivery was on time and the mangoes were perfectly ripe. My go-to for Alphonso every season now.',
    color: 'linear-gradient(135deg, #F97316, #C2410C)'
  }
]
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(180deg, var(--mango-cream) 0%, white 100%);
}

.gold {
  color: var(--mango-deep);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.review-card {
  background: white;
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

.review-stars {
  margin-bottom: 1rem;
}

.star {
  font-size: 1.125rem;
  color: #E5E7EB;
}

.star.filled {
  color: var(--mango-gold);
}

.review-text {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  font-style: italic;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.author-name {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--text-dark);
}

.author-location {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.social-proof {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--earth-brown), #92400E);
  border-radius: 20px;
  color: white;
}

.proof-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.proof-number {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
}

.proof-stars {
  color: var(--mango-gold);
  font-size: 1rem;
}

.proof-label {
  font-size: 0.8125rem;
  opacity: 0.8;
  font-weight: 500;
}

.proof-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 968px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-proof {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .proof-divider {
    display: none;
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
