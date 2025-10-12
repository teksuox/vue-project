<template>
  <div>
    <TransitionGroup
      name="notificacion-fade"
      tag="div"
      v-for="pos in posiciones"
      :key="pos"
      :class="['fixed z-50', getPositionClass(pos)]"
      style="min-width: 250px;"
    >
      <div
        v-for="n in notifications.filter(n => n.position === pos)"
        :key="n.id"
        class="relative px-4 py-2 rounded shadow mb-2 flex items-center"
        :class="{
          'bg-blue-600 text-white': n.type === 'info',
          'bg-green-600 text-white': n.type === 'success',
          'bg-yellow-600 text-white': n.type === 'warning',
          'bg-red-600 text-white': n.type === 'error'
        }"
      >
        <span class="flex-1">{{ n.message }}</span>
        <button
          class="ml-4 text-white hover:text-gray-200"
          @click="removeNotification(n.id)"
          aria-label="Cerrar notificación"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useNotificaciones } from '@/composables/useNotificaciones'

const { notifications, removeNotification, getPositionClass } = useNotificaciones()

const posiciones = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left'
]
</script>

<style scoped>
.notificacion-fade-enter-active,
.notificacion-fade-leave-active {
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.notificacion-fade-enter-from,
.notificacion-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>