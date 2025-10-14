<template>
  <li>
    <!-- Usamos router-link para una mejor integración con Vue Router -->
    <router-link
      :to="to"
      @click="onClick"
      :class="uiStore.isLeftPanelOpen ? 'justify-start' : 'justify-center'"
      class="flex items-center h-12 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
      active-class="bg-gray-700 text-white"
    >
      <!-- Slot para el icono: aquí se inyectará el SVG -->
      <slot name="icon"></slot>

      <!-- El texto solo se muestra si el panel está abierto -->
      <span v-if="uiStore.isLeftPanelOpen" class="ml-3">{{ label }}</span>
    </router-link>
  </li>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';

// Define los props que el componente acepta desde el padre
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

// Define los eventos que el componente puede emitir hacia el padre
const emit = defineEmits(['navigate']);

// Obtiene el store para saber el estado del panel
const uiStore = useUiStore();

// Cuando se hace clic, emite un evento 'navigate' que el padre puede escuchar
function onClick() {
  emit('navigate');
}
</script>