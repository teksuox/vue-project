<template>
  <header class="w-full h-14 bg-white px-4 shadow-md z-10 flex justify-between items-center">
    <div class="flex items-center">
      <!-- Botón para abrir/cerrar panel izquierdo -->
      <button
        @click.stop="uiStore.toggleLeftPanel"
        class="w-10 h-10 mr-2 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none"
        aria-label="Alternar menú lateral"
      >
        <!-- Icono de Menú (Hamburguesa) -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      <h1 class="text-2xl font-semibold text-gray-700">
        {{ pageTitle }}
      </h1>
    </div>

    <div class="flex items-center space-x-2">
      <!-- Botón de Perfil -->
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Ver perfil de usuario"
      >
        <!-- Icono de Perfil SVG -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </button>

      <!-- Botón de Configuración -->
      <button
        @click="uiStore.openRightPanel"
        class="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Abrir panel de configuración"
      >
        <!-- Icono de Engranaje SVG -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      </button>

      <!-- Botón de Cerrar Sesión -->
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        aria-label="Cerrar sesión"
      >
        <!-- Icono de Cerrar Sesión SVG -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const uiStore = useUiStore();
const route = useRoute();

// Propiedad computada que se actualiza automáticamente cuando cambia la ruta
const pageTitle = computed(() => {
  // Prioriza el título definido en la meta de la ruta
  if (route.meta && route.meta.title) {
    return route.meta.title;
  }
  // Si no hay meta, usa el nombre de la ruta y lo capitaliza
  if (route.name) {
    const name = String(route.name);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  // Título por defecto si no encuentra nada
  return 'Dashboard';
});
</script>