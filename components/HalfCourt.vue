<template>
  <div>
    <div>
      ------------------------------------Midline--------------------------------------
    </div>
    <div v-if="playersInitialized">
      <DepthLine
        v-for="(line, idx) in depthLines"
        :key="idx"
        :positions="line"
      />
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="initPlayerPositions"
      >
        Reset
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="runPlaySet()"
      >
        Start Play
      </button>
    </div>
  </div>
</template>

<script>
import DepthLine from './DepthLine'
export default {
  name: 'HalfCourt',
  components: { DepthLine },
  data() {
    return { playersInitialized: false, playerPositions: null }
  },
  computed: {
    depthLines() {
      const rowA = this.playerPositions.map((player) => {
        return player.position === 'front' ? player : null
      })
      const rowB = this.playerPositions.map((player) => {
        return player.position === 'mid' ? player : null
      })
      const rowC = this.playerPositions.map((player) => {
        return player.position === 'back' ? player : null
      })
      return [rowA, rowB, rowC]
    },
    playList() {
      return [
        [this.moveUpOne, []],
        [this.pumpFake, [1, 4]],
        [this.throwBall, [0]],
      ]
    },
  },
  created() {
    this.initPlayerPositions()
    this.playersInitialized = true
    setTimeout(() => {
      this.runPlaySet()
    }, 1000)
  },
  methods: {
    initPlayerPositions() {
      this.playerPositions = [
        { ball: 'ball burden', number: 1, position: 'back' },
        { ball: 'ball', number: 2, position: 'back' },
        { number: 3, position: 'back' },
        { number: 4, position: 'back' },
        { ball: 'ball', number: 5, position: 'back' },
        { number: 6, position: 'back' },
      ]
    },
    runPlaySet() {
      this.playList.forEach((play) => {
        const playToCall = play[0]
        const playParams = [...play[1]]
        playToCall(playParams)
      })
    },
    moveUpOne() {
      const newPositions = this.playerPositions.map((existing) => {
        if (existing.ball) {
          existing.position = 'front'
          existing.classes += ' runtofront'
        }
        return existing
      })
      this.playerPositions = newPositions
    },
    pumpFake(pumpingIndices) {
      const newPositions = this.playerPositions.map((existing, idx) => {
        if (pumpingIndices.includes(idx)) {
          existing.ball += ' pumpfake'
        }
        return existing
      })
      this.playerPositions = newPositions
    },
    throwBall(throwIndices) {
      const newPositions = this.playerPositions.map((existing, idx) => {
        if (throwIndices.includes(idx)) {
          existing.ball += ' throw'
        }
        return existing
      })
      this.playerPositions = newPositions
      setTimeout(() => {
        this.cleanupThrownBalls()
      }, 4000)
    },
    cleanupThrownBalls() {
      const newPositions = this.playerPositions.map((existing, idx) => {
        if (existing.ball && existing.ball.endsWith('throw')) {
          existing.ball = null
        }
        return existing
      })
      this.playerPositions = newPositions
    },
  },
}
</script>
