<template>
  <!-- Usamos el componente Transition de Vue para las animaciones -->
  <Transition name="fade">
    <div v-if="uiStore.isRightPanelOpen" class="fixed inset-0 z-50">
      <!-- Fondo oscuro semi-transparente (Backdrop) -->
      <div
        class="absolute inset-0 bg-slate-500 opacity-50"
        @click="uiStore.closeRightPanel"
      ></div>

      <!-- Contenido del Panel -->
      <Transition name="slide-right">
        <div v-if="uiStore.isRightPanelOpen" class="relative w-80 h-full ml-auto bg-slate-800 text-white shadow-xl p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold">Panel Derecho</h2>
            <button
              @click="uiStore.closeRightPanel"
              class="text-slate-300 hover:text-white"
              aria-label="Cerrar panel"
            >
              <!-- Icono de "X" para cerrar -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div>
            <p>Este es el contenido del panel derecho.</p>
            <!-- Puedes añadir más contenido aquí -->
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';

const uiStore = useUiStore();
</script>

<style scoped>
/* Transición para el fondo oscuro (fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transición para el panel que se desliza desde la derecha */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>