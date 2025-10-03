import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // Estado para el panel derecho (sin cambios)
  const isRightPanelOpen = ref(false)
  function openRightPanel() {
    isRightPanelOpen.value = true
  }
  function closeRightPanel() {
    isRightPanelOpen.value = false
  }

  // --- LÓGICA MEJORADA PARA EL PANEL IZQUIERDO ---

  // 1. Función para determinar el estado inicial del panel izquierdo
  const getInitialLeftPanelState = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return false; // En móvil, siempre empieza cerrado
    }
    const savedState = localStorage.getItem('leftPanelState');
    // Si hay un estado guardado, úsalo. Si no, empieza abierto por defecto en escritorio.
    return savedState !== null ? JSON.parse(savedState) : true;
  };

  // 2. El estado ahora se inicializa con la función anterior
  const isLeftPanelOpen = ref(getInitialLeftPanelState())
  
  function toggleLeftPanel() {
    isLeftPanelOpen.value = !isLeftPanelOpen.value
  }

  function closeLeftPanel() {
    isLeftPanelOpen.value = false
  }

  // 3. Usamos 'watch' para guardar el estado en localStorage CADA VEZ que cambie
  watch(isLeftPanelOpen, (newState) => {
    const isMobile = window.innerWidth < 768;
    // Solo guardamos el estado si NO estamos en un dispositivo móvil
    if (!isMobile) {
      localStorage.setItem('leftPanelState', JSON.stringify(newState));
    }
  });


  return { 
    isRightPanelOpen, 
    openRightPanel, 
    closeRightPanel,
    isLeftPanelOpen,
    toggleLeftPanel,
    closeLeftPanel
  }
})