<template>
  <div>
    <ul class="flex flex-row">
      <li
        v-for="(position, index) in positions"
        :key="index"
        class="player-outer"
      >
        <div v-if="position" :class="`has-player ${position.classes}`">
          <div v-if="position.ball" :class="`${position.ball}`" />
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
  overflow: visible;
  background-color: gold;
}

.ball {
  border-radius: 50%;
  width: 50%;
  height: 50%;
  padding: 24px;
  overflow: visible;
  background-color: red;
}
.burden {
  background-color: blue;
}

.runtofront {
  animation-duration: 1s;
  animation-name: slidefrombottom;
}
.pumpfake {
  animation-duration: 1s;
  animation-name: pumpfake;
  animation-iteration-count: 3;
}
.throw {
  animation-duration: 1s;
  animation-name: throw;
  animation-iteration-count: 1;
}

@keyframes slidefrombottom {
  from {
    margin-top: 200%;
  }

  to {
    margin-top: 0%;
  }
}
@keyframes throw {
  from {
    margin-top: 200%;
  }

  to {
    margin-top: 0%;
  }
}

@keyframes pumpfake {
  from {
    width: 120%;
    height: 80%;
  }

  to {
    width: 50%;
    height: 50%;
  }
}
</style>
