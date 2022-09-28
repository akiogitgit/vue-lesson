<script>
export default {
  props: ["onSubmit", "consoleAnpan"],
  // 親から @delete-finished にmethodsを渡して子供で使う
  // イベントハンドラーとして作れる
  emits: ["delete-finished"],
  data() {
    return {
      inputName: "f",
    }
  },
  methods: {},
}
</script>

<template>
  <div style="display: flex">
    <!-- @submit 送信した時発火、.prevent e.preventDefault()になる -->
    <form
      @submit.prevent="
        () => {
          onSubmit(inputName)
          inputName = ''
        }
      "
    >
      <!-- inputの onChange は @input, select は @change -->
      <input type="text" v-model="inputName" @input="" />
      <!-- <select v-model="inputName" @change="onChange">-->
      <button type="submit">Add</button>
    </form>
    <!-- emit でclickした時、親にdelete-finished  -->
    <!-- <button @click="consoleAnpan">完了済み削除</button> -->
    <button @click="$emit('delete-finished')">完了済み削除</button>
  </div>
</template>
