<template>
  <div
    class="loader-enhanced"
    :class="`loader-enhanced--${isLoading ? 'in' : 'out'}`"
    aria-hidden="true"
  >
    <div class="loader-enhanced__backdrop" />
    <div class="loader-enhanced__spinner">
      <span
        v-for="(_, i) in new Array(nbSegments)"
        :key="i"
        :style="{
          transform: `rotate(${i * (360 / nbSegments)}deg) translateY(2rem)`,
          opacity: 0.1 + 0.9 * (i / nbSegments)
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { isLoading } from '@/router'
import { ref } from 'vue'

const nbSegments = ref(10)
</script>

<style>
@keyframes loader-enhanced-spinning {
  from { transform: translate(-50%, -50%) rotate(0turn); }
  to   { transform: translate(-50%, -50%) rotate(1turn); }
}

@keyframes loader-enhanced-go-in {
  from {
    opacity: 0;
    transform: scale(1.1, 1.1);
  }
  to {
    opacity: 1;
    transform: scale(1.0, 1.0);
  }
}

@keyframes loader-enhanced-go-out {
  from {
    opacity: 1;
    filter: blur(0);
  }
  to {
    opacity: 0;
    filter: blur(1rem);
  }
}

.loader-enhanced {
  position: fixed;
  top: .2rem;
  right: .2rem;
  bottom: .2rem;
  left: .2rem;
  z-index: 2147483647;
}

.loader-enhanced--in {
  animation: .6s loader-enhanced-go-in ease-out forwards;
}

.loader-enhanced--out {
  animation: 1.2s loader-enhanced-go-out linear forwards;
  pointer-events: none;
}

.loader-enhanced__backdrop {
  background: #DDD6;
  border-radius: 1.2rem;
  box-shadow:
    0 0 0 2rem #000,
    inset 0 0 2rem 2rem #FFF;
  position: absolute;
  height: 100%;
  width: 100%;
  pointer-events: none;
}

.loader-enhanced__spinner {
  animation: 1s loader-enhanced-spinning steps(10, end) infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0turn);
  pointer-events: none;
}

.loader-enhanced__spinner span {
  background: #42b983;
  display: block;
  height: 1.5rem;
  width: .5rem;
  position: absolute;
  left: calc(50%/1 - .25rem/1);
  top: calc(50%/1 - .75rem/1);
}
</style>
