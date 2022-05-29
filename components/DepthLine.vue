<template>
  <div>
    <ul class="flex flex-row">
      <li
        v-for="(position, index) in positions"
        :key="index"
        class="player-outer"
      >
        <div v-if="position" class="has-player">
          <div v-if="position.ball" :class="`ball ${position.ball}`" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DepthLine',
  props: {
    positions: { type: Array, required: true },
  },
}
</script>

<style scoped>
.player-outer {
  border-width: 1px;
  width: 100px;
  height: 100px;
}

.has-player {
  border-radius: 25%;
  margin: 11px 24px;
  width: 50%;
  height: 75%;
  background-color: gold;
}

.ball {
  border-radius: 50%;
  width: 50%;
  height: 50%;
  padding: 24px;
  background-color: red;
}
.burden {
  background-color: blue;
}
</style>
