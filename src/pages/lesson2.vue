<script>
import TodoAdd from "../components/TodoAdd.vue"
import TodoList from "../components/TodoList.vue"

export default {
  data() {
    return {
      title: "Todo List",
      inputName: "f",
      todos: [
        {
          name: "やること１",
          isFinished: true,
        },
        {
          name: "あれをやる",
          isFinished: false,
        },
        {
          name: "ご飯を食べる",
          isFinished: true,
        },
      ],
    }
  },
  computed: {
    app() {
      return ""
    },
  },
  methods: {
    console() {
      console.log("anpan")
    },
    onSubmit(name) {
      if (!name) {
        console.log("入力して下さい")
        return
      }
      console.log("submit", name)
      this.todos.push({ name, isFinished: false })
      name = ""
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo, index) => {
        return index !== todoId
      })
    },
    deleteFinishTodos() {
      this.todos = this.todos.filter(todo => !todo.isFinished)
    },
  },
  components: {
    TodoAdd,
    TodoList,
  },
}
</script>

<template>
  <div style="margin-left: 10px; color: blue">
    <h1>{{ title }}</h1>
    <!-- props は、:  emit は @ -->
    <!-- @delete-finished は emit で TodoAdd で定義している -->
    <TodoAdd
      :onSubmit="onSubmit"
      @delete-finished="deleteFinishTodos"
      :consoleAnpan="console"
    />

    {{ JSON.stringify(todos) }}
    <p v-if="!todos.length">Todo がまだ無いです！！！！！</p>
    <TodoList v-else :todos="todos" :deleteTodo="deleteTodo" />

    <!-- <ul v-else>
      <li v-for="(todo, index) in todos">
        <input
          type="checkbox"
          :checked="todo.isFinished"
          @change="todo.isFinished = !todo.isFinished"
          :id="index"
        />

        <label :for="index" style="margin-left: 5px">{{ todo.name }}</label>
        <button v-if="todo.isFinished" @click="deleteTodo(index)">
          delete
        </button>
      </li>
    </ul> -->
  </div>
</template>
