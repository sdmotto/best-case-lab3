<template>
    <div v-if="status">
        {{ status }}
    </div>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="toEmail">To:</label>
            <input type="email" id="toEmail" :value="to" disabled />
        </div>

        <div>
            <label for="fromEmail">Your Email:</label>
            <input
                type="email"
                id="fromEmail"
                v-model="fromEmail"
                placeholder="Enter your email"
                required
            />
        </div>

        <div>
            <label for="subject">Subject:</label>
            <input 
                type="text" 
                id="subject" 
                v-model="subject" 
                placeholder="Enter subject" 
                required
            />
        </div>

        <div>
            <label for="message">Message:</label>
            <textarea 
                id="message" 
                v-model="message" 
                placeholder="Enter your message"
                required
            />
        </div>

        <button type="submit">Send</button>
    </form>
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
    }
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
      status.value = "Successfully sent email.";
    } else {
      status.value = "Error sending email: " + response.error;
    }
  } catch (error) {
    status.value = "Error sending email.";
  }

  setTimeout(() => {
    status.value = '';
  }, 3000);
}
</script>