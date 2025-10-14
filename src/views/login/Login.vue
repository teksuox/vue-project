<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-lg">
      
      <!-- Encabezado del formulario -->
      <div>
        <img class="w-auto h-12 mx-auto" src="/mcd.png" alt="Logo de la empresa">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-100">
          Inicia sesión
        </h2>
      </div>

      <!-- Formulario -->
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <!-- Campo de Email -->
          <div>
            <label for="email-address" class="sr-only">Correo Electrónico</label>
            <input 
              id="email-address" 
              v-model="email"
              name="email" 
              type="email" 
              autocomplete="off" 
              required 
              class="relative block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Correo Electrónico"
            >
          </div>
          <!-- Campo de Contraseña -->
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input 
              id="password" 
              v-model="password"
              name="password" 
              type="password" 
              autocomplete="off" 
              required 
              class="relative block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Contraseña"
            >
          </div>
        </div>

        <!-- Botón de Iniciar Sesión -->
        <div>
          <button 
            type="submit" 
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Acceder
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('ejemplo@prueba.cl');
const password = ref('123456789');

function handleLogin() {
  // Aquí iría la lógica de autenticación real (ej. llamar a una API)
  console.log('Credenciales:', { email: email.value, password: password.value });

  // Simulación de un login exitoso
  if (email.value && password.value) {
    // Redirigir al dashboard o a la página principal después del login
    router.push('/'); 
  } else {
    alert('Por favor, introduce tus credenciales.');
  }
}
</script>