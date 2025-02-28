<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'ui-input',
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccd5ae;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
}
</style>
