<script>
export default {
  data() {
    return {
      myName: 'anpan',
      myClass: 'ui purple button',
    }
  },
}
</script>

<template>
  <h1>index</h1>
  <div>私の名前は{{ myName + 3 }}です</div>
  <div class="{{myClass}}">NG {myClass}</div>
  <div :class="myClass">OK text-red</div>
  <div :class="[myClass, myClass]">OK text-red text-red</div>
  <div :class="{ myClass }">NG myClass</div>
  <div class="ui purple">purple</div>

  <div :class="{ green: true, red: false }">green</div>
  <div :class="{ green: 5 > 1, red: false && 9 < 16 }">green</div>
  <button class="ui button">Button</button>
  <!-- 固定値と、変動値のクラス -->
  <div
    class="text-red text-blue"
    :class="{ green: 5 > 1, red: false && 9 < 16 }"
  >
    green
  </div>
  <div
    :class="{
      'text-red': true,
      'text-blue': true,
      green: 5 > 1,
      red: false && 9 < 16,
    }"
  >
    green
  </div>
  <div class="ui modal show">
    <div class="header">Modal</div>
    <div class="content">
      <!-- content -->
    </div>
    <div class="actions">
      <div class="ui approve button">Approve</div>
      <div class="ui button">Neutral</div>
      <div class="ui cancel button">Cancel</div>
    </div>
  </div>

  <!-- <button :onClick="{() => alert(`alert`)}">alert</button> -->
  <button v-on:click="() => alert(`alert`)">alert</button>
  <button v-on:click="() => alert('こんにちは！')"></button>
  <!-- <button @click="() => alert('こんにちは！')">alert</button> -->
  <button v-on:click="counter += 1">Add 1</button>
</template>

<style></style>
