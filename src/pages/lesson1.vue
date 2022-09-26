<script>
export default {
  data() {
    const isTrue = true
    const isRed = false

    // return の中に書いたプロパティを、templateで使える
    return {
      title: 'My new Vue title',
      message: 'welcome to Vue',
      // isRed: isTrue,
      isRed,
      buttonBlue: {
        ui: true,
        button: true,
        blue: true,
      },
      user: {
        firstName: 'Akio',
        lastName: 'Tanaka',
      },
      users: [
        {
          firstName: 'John',
          lastName: 'Smith',
          isMember: true,
        },
        {
          firstName: 'Taro',
          lastName: 'Shinjuku',
          isMember: false,
        },
        {
          firstName: 'Hanako',
          lastName: 'Shibuya',
          isMember: true,
        },
      ],
      // [NG] fullName: user.firstName + user.lastName,

      formParams: {
        firstName: 'aa',
        lastName: 'ff',
        isMember: true,
      },
    }
  },
  // 上のdata return 内の値を処理して使う
  computed: {
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },
  },
  // template で使う関数
  methods: {
    // 型付けられない
    alert(message) {
      alert(message)
      console.log('aho')
    },
    addUser() {
      // dataのusers配列に、dataのformParamsを追加
      // formParams をリセット
      if (!this.formParams.firstName) {
        console.log('firstNameを入力してください')
        return
      }
      this.users.push(this.formParams)
      this.formParams = {
        firstName: '',
        lastName: '',
        isMember: true,
      }
    },
  },
}
</script>

<!-- v-bind: でhtmlのpropsにvueを入れられる -->
<!-- v-bind を省略して、:class でもOK -->

<template>
  <h1 v-bind:title="message">
    {{ title }}
  </h1>
  <button class="ui button" v-bind:class="{ red: isRed }">red</button>

  <!-- 展開されて入れられる -->
  <button :class="buttonBlue">blue</button>
  <div
    :title="213 * 3"
    :class="{ ui: true, teal: true, red: !true, label: true }"
  >
    {{ 'こんにちは' + 'あは' }}
  </div>

  <div>{{ user }}</div>
  <div>{{ user.firstName + user.lastName }}</div>
  <!-- computed -->
  <div>{{ fullName }}</div>
  <br />

  <!-- if falseだと<p></p> になる -->

  <p v-if="true">if文1</p>
  <p v-if="false">if文2</p>
  <p v-if="1">if文3</p>
  <p v-if="0">if文4</p>
  <p v-if="undefined">if文5</p>
  <p v-if="null">if文6</p>

  <p v-if="false">if</p>
  <!-- ここに書くと、エラー -->
  <p v-else>else</p>

  <p v-if="false">if</p>
  <p v-else-if="true">else-if</p>
  <p v-else></p>

  <p>anpan {{ 1 > 3 && 'a' }}</p>
  <p>anpan {{ 1 > 3 ? 'a' : 'b' }}</p>

  <!-- for文 v in array -->

  <div v-for="user in users">
    <span>{{ user.firstName + ' ' }}</span>
    <span>{{ user.lastName + ' ' }}</span>
    <span>{{ user.isMember }}</span>
  </div>

  <ul>
    <li v-for="v in 5" :key="v">
      {{ v % 2 === 0 ? v : '' }}
    </li>
  </ul>
  <ul>
    <li v-for="v in ['anpan', 'anan']" :key="v">
      {{ v }}
    </li>
  </ul>
  <!-- onClick v-on:click -->
  <button class="ui button teal" v-on:click="alert('anpan')">alert</button>
  <br />

  <!-- form -->
  <input type="text" v-model="formParams.firstName" />
  <input type="text" v-model="formParams.lastName" />
  <input type="checkbox" v-model="formParams.isMember" />
  <button v-on:click="addUser">作成</button><br /><br />

  <!-- v-on:submitで送信。 .preventで、e.preventDefaultになる -->
  <form v-on:submit.prevent="addUser">
    <input type="text" required v-model="formParams.firstName" />
    <input type="text" v-model="formParams.lastName" />
    <input type="checkbox" v-model="formParams.isMember" />
    <!-- <button v-on:click="addUser">作成</button> -->
    <button type="submit">作成</button>
  </form>

  <form v-on:submit.prevent="addUser">
    <select required v-model="formParams.firstName">
      <option value="Akio">akio</option>
      <option value="Anpan">anpan</option>
      <option value="Tanaka">tanaka</option>
    </select>
    <select required v-model="formParams.lastName">
      <option value="Akio">akio</option>
      <option value="Anpan">anpan</option>
      <option value="Tanaka">tanaka</option>
    </select>

    <!-- check ボタン boolean入る -->
    <input type="checkbox" v-model="formParams.isMember" />

    <!-- radio ボタン valueがbooleanなら、:value="true" -->
    <input
      type="radio"
      id="true"
      name="sameName"
      :value="true"
      v-model="formParams.isMember"
    />
    <label for="true">true</label>
    <input
      type="radio"
      id="false"
      name="sameName"
      :value="false"
      v-model="formParams.isMember"
    />
    <label for="false">false</label>

    <!-- <button v-on:click="addUser">作成</button> -->
    <button type="submit">作成</button>
  </form>
</template>
