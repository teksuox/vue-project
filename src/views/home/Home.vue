<template>
  <div class="flex flex-col items-center justify-center bg-gray-200 min-h-screen">
    <h1 class="text-4xl font-bold">Welcome to the Home Page</h1>
    <p class="mt-4 text-lg">This is the main view of the application.</p>

    <button
      class="mt-8 px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      @click="notificar"
    >
      Mostrar notificación de prueba
    </button>
  </div>
</template>

<script setup>
import { useNotificaciones } from '@/composables/useNotificaciones'

const { addNotification } = useNotificaciones()

function notificar() {
  addNotification({
    message: '¡Esta es una notificación de prueba!',
    type: 'warning',
    position: 'bottom-right'
  })
}
</script>