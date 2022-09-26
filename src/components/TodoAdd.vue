<script>
export default {
  // emit: [''],
  props: ['onSubmit'],
  data() {
    return {
      inputName: 'f',
    }
  },
  methods: {},
}
</script>

<template>
  <form
    @submit.prevent="
      () => {
        onSubmit(inputName)
        inputName = ''
      }
    "
  >
    <input type="text" v-model="inputName" />
    <!-- <select v-model="inputName" @change="onChange">-->
    <button type="submit">Add</button>
  </form>
</template>
