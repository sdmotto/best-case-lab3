<template>
  <div class="form-container">
    <div v-if="status" class="status-message">
      {{ status }}
    </div>
    <form @submit.prevent="handleSubmit" class="email-form">
      <div class="form-group">
        <label for="toEmail">To:</label>
        <input type="email" id="toEmail" :value="to" disabled />
      </div>

      <div class="form-group">
        <label for="fromEmail">Your Name:</label>
        <input
          type="text"
          id="fromEmail"
          v-model="fromEmail"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="subject">Subject:</label>
        <input 
          type="text" 
          id="subject" 
          v-model="subject" 
          placeholder="Enter subject" 
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea 
          id="message" 
          v-model="message" 
          placeholder="Enter your message"
          required
        />
      </div>

      <button 
        type="submit" 
        class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const fromEmail = ref('');
const subject = ref('');
const message = ref('');
const status = ref('');

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

async function handleSubmit() {
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        to: props.to,
        fromEmail: fromEmail.value,
        subject: subject.value,
        message: message.value,
      },
    });

    if (response.success) {
      status.value = 'Successfully sent email.';
    } else {
      status.value = 'Error sending email.';
    }
  } catch (error) {
    status.value = 'Error sending email.';
  }

  setTimeout(() => {
    status.value = '';
  }, 3000);
}
</script>

<style scoped>
/* Container Styling */
.form-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem; /* Increase padding for better spacing */
  background-color: #ffffff; /* White background for the form */
  border: 2px solid #000000; /* Black border */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

/* Status Message Styling */
.status-message {
  margin-bottom: 1.5rem; /* Add extra spacing for better separation */
  padding: 0.75rem;
  background-color: #000000; /* Black */
  color: #ffffff; /* White */
  border-radius: 5px;
  text-align: center;
}

/* Form Group Styling */
.form-group {
  display: flex; /* Use flexbox for better alignment */
  flex-direction: column; /* Stack label and input vertically */
  align-items: flex-start; /* Align items to the left */
  margin-bottom: 1.5rem; /* Increase spacing between fields */
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1rem; /* Consistent font size for labels */
}

.form-group input,
.form-group textarea {
  width: 100%; /* Ensure inputs span the full width */
  padding: 0.75rem; /* Add uniform padding */
  border: 1px solid #000000; /* Black border */
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* Include padding and border in width */
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border: 2px solid #ffcc00; /* Gold focus border */
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-container {
    padding: 1.5rem; /* Adjust padding for smaller screens */
  }

  .form-group {
    margin-bottom: 1rem; /* Slightly reduce spacing on smaller screens */
  }
}
</style>
