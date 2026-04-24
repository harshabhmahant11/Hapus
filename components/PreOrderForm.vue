<template>
  <section id="pre-order" class="preorder-section section-padding">
    <div class="container">
      <div class="form-wrapper">
        <div class="form-header">
          <span class="form-badge">🥭 Limited Season — Book Now!</span>
          <h2 class="form-title">Pre-Order Your <span class="gold">Alphonso Mangoes</span></h2>
          <p class="form-subtitle">
            Fill in your details below and we'll confirm your order within 24 hours. Pay only after delivery.
          </p>
        </div>

        <form @submit.prevent="submitOrder" class="order-form" novalidate>
          <div class="form-grid">
            <!-- Name -->
            <div class="form-group">
              <label for="name">Full Name <span class="required">*</span></label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Enter your full name"
                required
                :class="{ error: errors.name }"
              />
              <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label for="phone">Phone Number <span class="required">*</span></label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                :class="{ error: errors.phone }"
              />
              <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
            </div>

            <!-- City -->
            <div class="form-group full-width">
              <label for="city">City <span class="required">*</span></label>
              <select
                id="city"
                v-model="form.city"
                required
                :class="{ error: errors.city }"
              >
                <option value="" disabled>Select your city...</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
              <span v-if="errors.city" class="error-text">{{ errors.city }}</span>
            </div>

            <!-- Product Selection -->
            <div class="form-group full-width">
              <label for="product">Select Mango Box <span class="required">*</span></label>
              <select
                id="product"
                v-model="form.product"
                required
                :disabled="!form.city"
                :class="{ error: errors.product }"
              >
                <option value="" disabled>Choose your preferred box...</option>
                <option
                  v-for="p in availableProducts"
                  :key="p.id"
                  :value="getProductValue(p)"
                  :disabled="p.soldOut"
                >{{ getProductLabel(p) }}{{ p.soldOut ? ' (Sold Out)' : '' }}</option>
              </select>
              <span v-if="errors.product" class="error-text">{{ errors.product }}</span>
            </div>

            <!-- Quantity -->
            <div class="form-group full-width">
              <label for="quantity">Number of Boxes <span class="required">*</span></label>
              <select id="quantity" v-model="form.quantity" required :disabled="!form.city">
                <option v-for="n in 10" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Box' : 'Boxes' }}</option>
              </select>
            </div>

            <!-- Delivery Address -->
            <div class="form-group full-width">
              <label for="address">Delivery Address <span class="required">*</span></label>
              <textarea
                id="address"
                v-model="form.address"
                placeholder="Full delivery address with landmark"
                rows="3"
                required
                :disabled="!form.city"
                :class="{ error: errors.address }"
              ></textarea>
              <span v-if="errors.address" class="error-text">{{ errors.address }}</span>
            </div>

            <!-- Pincode -->
            <div class="form-group">
              <label for="pincode">Delivery Pincode <span class="required">*</span></label>
              <input
                id="pincode"
                v-model="form.pincode"
                type="text"
                placeholder="e.g., 400001"
                required
                maxlength="6"
                :disabled="!form.city"
                :class="{ error: errors.pincode }"
              />
              <span v-if="errors.pincode" class="error-text">{{ errors.pincode }}</span>
            </div>

            <!-- Notes -->
            <div class="form-group full-width">
              <label for="notes">Special Instructions (Optional)</label>
              <textarea
                id="notes"
                v-model="form.notes"
                placeholder="e.g., Preferred delivery date, gift message, ripeness preference..."
                rows="2"
                :disabled="!form.city"
              ></textarea>
            </div>
          </div>

          <!-- Submit -->
          <div class="form-footer">
            <button type="submit" class="submit-btn" :disabled="isSubmitting || isProductSoldOut">
              <span v-if="isProductSoldOut">Sold Out</span>
              <span v-else-if="!isSubmitting">🥭 Confirm Pre-Order</span>
              <span v-else class="loading">
                <span class="spinner"></span>
                Submitting...
              </span>
            </button>
            <p class="form-note">
              ✅ No payment required now. We'll contact you to confirm availability and arrange payment. Shipping charges may be extra based on your location.
            </p>
          </div>
        </form>

        <!-- Success Message -->
        <Transition name="fade">
          <div v-if="submitted" class="success-overlay">
            <div class="success-card">
              <div class="success-icon">🎉</div>
              <h3>Pre-Order Received!</h3>
              <p>
                Thank you, <strong>{{ submittedName }}</strong>! We've received your pre-order for <strong>{{ submittedProduct }}</strong>.
                Our team will contact you within 24 hours to confirm availability and arrange delivery.
              </p>
              <button @click="resetForm" class="success-btn">Place Another Order</button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, watch } from 'vue'
import { products as originalProducts, getProductLabel, getProductValue } from '~/config/products'

const GOOGLE_SHEETS_URL = ref('https://script.google.com/macros/s/AKfycbyJdKaOX0ESWVolEAFk6XyWHQwKG4cDMg77f2Sbcqa0-6sbaENQo9eWfeImPLHqZzM9Bw/exec')

const form = reactive({
  name: '',
  phone: '',
  city: '',
  product: '',
  quantity: 1,
  pincode: '',
  address: '',
  notes: ''
})

const availableProducts = computed(() => {
  if (!form.city) return []
  return originalProducts.filter(p => p.city.includes(form.city))
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitted = ref(false)
const submittedName = ref('')
const submittedProduct = ref('')

watch(() => form.city, (newCity, oldCity) => {
  if (oldCity && newCity !== oldCity) {
    // Reset product if it's not available in the new city
    if (form.product) {
      const selectedProduct = availableProducts.value.find(p => getProductValue(p) === form.product)
      if (!selectedProduct) {
        form.product = ''
      }
    }
  }
})

const isProductSoldOut = computed(() => {
  if (!form.product) return false
  const selectedProduct = availableProducts.value.find(p => getProductValue(p) === form.product)
  return selectedProduct?.soldOut || false
})

function validate() {
  const e = {}

  if (!form.name.trim()) e.name = 'Name is required'
  if (!form.phone.trim()) e.phone = 'Phone number is required'
  else if (!/^[\d+\-\s()]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'

  if (!form.city.trim()) e.city = 'City is required'
  if (!form.product) e.product = 'Please select a mango box'
  if (!form.pincode.trim()) e.pincode = 'Pincode is required'
  else if (!/^\d{6}$/.test(form.pincode.trim())) e.pincode = 'Enter a valid 6-digit pincode'
  if (!form.address.trim()) e.address = 'Delivery address is required'

  Object.keys(errors).forEach(k => delete errors[k])
  Object.assign(errors, e)

  return Object.keys(e).length === 0
}

async function submitOrder() {
  if (!validate()) return

  isSubmitting.value = true

  try {
    // Google Apps Script Web App URL — replace with your deployed URL
    const scriptUrl = GOOGLE_SHEETS_URL.value || 'YOUR_GOOGLE_APPS_SCRIPT_URL'

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: form.name.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      product: form.product,
      quantity: form.quantity,
      pincode: form.pincode.trim(),
      address: form.address.trim(),
      notes: form.notes.trim()
    }

    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    submittedName.value = form.name.trim()
    submittedProduct.value = form.product
    submitted.value = true

  } catch (err) {
    alert('Something went wrong. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  Object.assign(form, {
    name: '',
    phone: '',
    city: '',
    product: '',
    quantity: 1,
    pincode: '',
    address: '',
    notes: ''
  })
  submitted.value = false
}
</script>

<style scoped>
.preorder-section {
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A33 100%);
}

.gold {
  color: var(--mango-deep);
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.1);
  position: relative;
  overflow: hidden;
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.form-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.form-subtitle {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.required {
  color: #DC2626;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-dark);
  transition: all 0.2s ease;
  background: white;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--mango-gold);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}

input.error,
select.error,
textarea.error {
  border-color: #DC2626;
}

.error-text {
  font-size: 0.75rem;
  color: #DC2626;
  margin-top: 0.25rem;
  font-weight: 500;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

input:disabled,
textarea:disabled,
select:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.form-footer {
  margin-top: 2rem;
  text-align: center;
}

.submit-btn {
  background: linear-gradient(135deg, var(--mango-gold), var(--mango-deep));
  color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.35);
  width: 100%;
  max-width: 400px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.5);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-note {
  margin-top: 1rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
}

/* Success Overlay */
.success-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 2rem;
}

.success-card {
  text-align: center;
  max-width: 450px;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.success-card h3 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--leaf-green);
  margin-bottom: 1rem;
}

.success-card p {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.success-btn {
  background: var(--leaf-green);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.success-btn:hover {
  background: #15803D;
  transform: translateY(-2px);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .form-wrapper {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: 1;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.modal-header h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.modal-body p {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.modal-btn {
  background: var(--mango-gold);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.modal-btn:hover {
  background: var(--mango-deep);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
