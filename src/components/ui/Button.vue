<template>
  <button class="btn" :class="{ loading }">
    <slot />
  </button>
</template>

<script setup>
defineProps({ loading: Boolean })
</script>

<style scoped>
.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem; /* Aumenté el padding */
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  font-size: 1rem; /* Tamaño de fuente */
  width: 100%; /* Ancho mínimo */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* Espacio entre icono y texto si lo hay */
}

.btn:hover {
  background: #4338ca; /* Color más oscuro al hacer hover */
  transform: translateY(-1px); /* Efecto sutil al hover */
}

.btn:active {
  transform: translateY(0);
}

.btn.loading {
  opacity: 0.8;
  pointer-events: none;
  position: relative;
}

/* Opcional: Añadir un spinner durante loading */
.btn.loading::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-left: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>