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
    <div></div>
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
  },
  created() {
    this.initPlayerPositions()
    this.playersInitialized = true
  },
  methods: {
    initPlayerPositions() {
      this.playerPositions = [
        { ball: 'burden', number: 1, position: 'back' },
        { ball: 'ball', number: 2, position: 'back' },
        { number: 3, position: 'back' },
        { number: 4, position: 'back' },
        { ball: 'ball', number: 5, position: 'back' },
        { number: 6, position: 'back' },
      ]
    },
  },
}
</script>
