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

    <button
      class="mt-4 px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
      @click="abrirModal1"
    >
      Abrir Modal 1
    </button>

    <Modal1 ref="modal1" :datos="datosJson" />
    
  </div>
</template>

<script setup>
// referencias para abrir modales y notificaciones
import { ref } from 'vue'
import { useNotificaciones } from '@/composables/useNotificaciones'
import Modal1 from '@/views/Home/Modal1.vue'

const { addNotification } = useNotificaciones()

function notificar() {
  addNotification({
    message: '¡Esta es una notificación de prueba!',
    type: 'warning',
    position: 'bottom-right'
  })
}

const modal1 = ref()

// Ejemplo de JSON
const datosJson = ref({
  nombre: 'Akira',
  edad: 30,
  ciudad: 'Tokyo'
})

function abrirModal1() {
  modal1.value.open()
}
</script>