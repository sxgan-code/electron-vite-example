<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#ccc',
  },
})
const symbolId = computed(() => {
  return `#${props.prefix}-${props.name}`
})
</script>
<template>
  <div>
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color"/>
    </svg>
  </div>
</template>
<style scoped lang="scss">
div{
  width: 10rem;
  height: 10rem;
}
svg{
  margin: auto;
  width: 10rem;
  height: 10rem;

}
</style>