<template>
  <div>
    <ul class="flex flex-row">
      <li v-for="player in players" :key="player" :class="player"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DepthLine',
  props: {
    players: { type: Array, required: true },
  },
}
</script>

<style scoped>
.empty {
  border-width: 1px;
  width: 100px;
  height: 100px;
}
.red {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: red;
}
.gold {
  border-width: 1px;
  width: 100px;
  height: 100px;
  background-color: gold;
}
.blue {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
