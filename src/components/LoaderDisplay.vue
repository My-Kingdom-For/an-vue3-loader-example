<template>
  <div v-if="isVisible" class="loader-display" />
</template>

<script setup>
import { computed } from 'vue'
import { isLoading } from '@/router'

const isVisible = computed(() => isLoading.value)
</script>

<style>
@keyframes loader-display-spinning {
  from { transform: rotate(0turn); }
  to   { transform: rotate(1turn); }
}

.loader-display {
  animation: 1s loader-display-spinning linear infinite;
  background: red;
  display: block;
  width: 64px;
  height: 64px;
  position: fixed;
  left: calc(50%/1 - 32px/1);
  top: calc(50%/1 - 32px/1);
}
</style>
