<template>
  <aside 
    :class="uiStore.isLeftPanelOpen ? 'w-64' : 'w-16'"
    class="flex-shrink-0 bg-gray-800 text-white flex flex-col h-full transition-all duration-300 ease-in-out">
    
    <!-- 1. Sección Superior (Logo y Título) -->
    <div 
      :class="uiStore.isLeftPanelOpen ? 'justify-start px-4' : 'justify-center'"
      class="h-14 flex-shrink-0 flex items-center border-b border-gray-700">
      <img src="/mcd.png" alt="Logo de la empresa" class="h-8 w-8 object-contain">
      <h1 v-if="uiStore.isLeftPanelOpen" class="ml-3 text-lg font-semibold">Mi Aplicación</h1>
    </div>

    <!-- 2. Sección de Perfil (Oculta si el panel está cerrado) -->
    <div v-if="uiStore.isLeftPanelOpen" class="flex items-center p-4 border-b border-gray-700">
      <img class="h-10 w-10 rounded-full object-cover" src="/avatar.png" alt="Avatar de usuario">
      <div class="ml-3">
        <p class="text-sm font-semibold">Nombre Usuario</p>
        <p class="text-xs text-gray-400">Rol del Usuario</p>
      </div>
    </div>

    <!-- 3. Sección de Navegación (AHORA USANDO EL NUEVO COMPONENTE) -->
    <div class="flex-1 overflow-y-auto">
      <nav :class="uiStore.isLeftPanelOpen ? 'p-4' : 'p-2'">
        <ul>
          <SidebarLink to="/home" label="Inicio" @navigate="handleLinkClick">
            <template #icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </template>
          </SidebarLink>

          <SidebarLink to="/perfil" label="Perfil" @navigate="handleLinkClick" class="mt-2">
            <template #icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </template>
          </SidebarLink>

          <SidebarLink to="/login" label="Login" @navigate="handleLinkClick" class="mt-2">
            <template #icon>
              <!-- Simplemente cambia "size-6" por "w-6 h-6" para mantener la consistencia -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </template>
          </SidebarLink>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';
import { ref, onMounted, onUnmounted } from 'vue';
import SidebarLink from './SidebarLink.vue'; // <-- 1. Importar el nuevo componente

const uiStore = useUiStore();

// Lógica para detectar si estamos en un dispositivo móvil
const isMobile = ref(window.innerWidth < 768);
const onResize = () => {
  isMobile.value = window.innerWidth < 768;
  // Si la pantalla se agranda a escritorio, asegurarse de que el panel esté abierto
  if (!isMobile.value && !uiStore.isLeftPanelOpen) {
    uiStore.toggleLeftPanel();
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  // Si carga en móvil, el panel debe estar cerrado
  if (isMobile.value) {
    uiStore.closeLeftPanel();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

// Cierra el panel al hacer clic en un enlace, solo en móvil
function handleLinkClick() {
  if (isMobile.value) {
    uiStore.closeLeftPanel();
  }
}
</script>
