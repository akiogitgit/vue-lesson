<script>
export default {
  props: ["todos", "deleteTodo"],
}
</script>

<template>
  aa
  <ul>
    <li v-for="(todo, index) in todos">
      <input
        type="checkbox"
        :checked="todo.isFinished"
        @change="todo.isFinished = !todo.isFinished"
        :id="index"
      />

      <label :for="index" style="margin-left: 5px">{{ todo.name }}</label>
      <button v-if="todo.isFinished" @click="deleteTodo(index)">delete</button>
    </li>
  </ul>
</template>
