<script>
import TodoAdd from '../components/TodoAdd.vue'

export default {
  data() {
    return {
      title: 'Todo List',
      inputName: 'f',
      todos: [
        {
          name: 'やること１',
          isFinished: true,
        },
        {
          name: 'あれをやる',
          isFinished: false,
        },
        {
          name: 'ご飯を食べる',
          isFinished: true,
        },
      ],
    }
  },
  computed: {
    app() {
      return ''
    },
  },
  methods: {
    // onSubmit() {
    //   if (!this.inputName) {
    //     console.log('入力して下さい')
    //     return
    //   }
    //   console.log('submit', this.inputName)
    //   this.todos.push({ name: this.inputName, isFinished: false })
    //   this.inputName = ''
    // },
    onSubmit(name) {
      if (!name) {
        console.log('入力して下さい')
        return
      }
      console.log('submit', name)
      this.todos.push({ name, isFinished: false })
      name = ''
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo, index) => {
        return index !== todoId
      })
    },
  },
  components: {
    TodoAdd,
  },
}
</script>

<template>
  <div style="margin-left: 10px; color: blue">
    <h1>{{ title }}</h1>
    <TodoAdd :onSubmit="onSubmit" />

    {{ JSON.stringify(todos) }}

    <ul>
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
    </ul>
    <p v-if="!todos.length">Todo がまだ無いです！！！！！</p>
  </div>
</template>
