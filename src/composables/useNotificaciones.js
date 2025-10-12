import { ref } from 'vue'

const notifications = ref([])

function addNotification(notification) {
  const id = Date.now() + Math.random() // Genera un id único
  notifications.value.push({ ...notification, id })
  setTimeout(() => {
    removeNotification(id)
  }, 3000)
}

function removeNotification(id) {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

function getPositionClass(position) {
  switch (position) {
    case 'top-right': return 'top-4 right-4';
    case 'top-left': return 'top-4 left-4';
    case 'bottom-right': return 'bottom-4 right-4';
    case 'bottom-left': return 'bottom-4 left-4';
    default: return 'top-4 right-4';
  }
}

export function useNotificaciones() {
  return { notifications, addNotification, removeNotification, getPositionClass }
}