<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Panel Izquierdo Fijo -->
    <PanelIzquierdo />

    <!-- Área de Contenido Principal (ocupa el resto del espacio) -->
    <div @click="handleContentClick" class="flex flex-col flex-1 overflow-hidden">
      <!-- Header -->
      <Header />

      <!-- Contenido de la Página (con scroll independiente) -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <!-- Aquí es donde se renderizarán las vistas de tus rutas -->
          <router-view />
        </div>
      </main>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Panel Derecho Oculto -->
    <PanelDerecho />
  </div>
</template>

<script setup>
import PanelIzquierdo from './Panel_Izquierdo.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import PanelDerecho from './Panel_Derecho.vue';
import { useUiStore } from '@/stores/ui';
import { ref, onMounted, onUnmounted } from 'vue';

const uiStore = useUiStore();

// Lógica para detectar si estamos en un dispositivo móvil
const isMobile = ref(window.innerWidth < 768);
const onResize = () => { isMobile.value = window.innerWidth < 768; };

onMounted(() => window.addEventListener('resize', onResize));
onUnmounted(() => window.removeEventListener('resize', onResize));

// Cierra el panel izquierdo si está abierto y se hace clic en el contenido, solo en móvil
function handleContentClick() {
  if (isMobile.value && uiStore.isLeftPanelOpen) {
    uiStore.closeLeftPanel();
  }
}
</script>