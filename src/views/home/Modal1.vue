<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center"
    @click.self="close"
  >
    <div :class="[modalClass, 'bg-white rounded shadow-lg relative']" class="p-6">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        @click="close"
        aria-label="Cerrar modal"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <h2 class="text-xl font-bold mb-4">Modal 1</h2>
      <p>Contenido del primer modal.</p>
      <pre class="bg-gray-100 p-2 rounded mt-4">{{ datos }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// Control necesario para controlar el Modal
const show = ref(false)

function open() {
  show.value = true
}
function close() {
  show.value = false
}

const modalClass = computed(() => {
  return 'w-[800px] min-h-[400px] bg-white rounded shadow-lg relative p-6 overflow-y-auto max-h-[80vh]'
})

defineExpose({ open, close })
//--------------------------------

// Desde aqui comienza tu codigo

const props = defineProps({
  datos: { type: Object, default: () => ({}) }
})
</script>