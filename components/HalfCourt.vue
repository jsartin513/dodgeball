<template>
  <div>
    <div>
      ------------------------------------Midline--------------------------------------
    </div>
    <div v-if="playersInitialized">
      <DepthLine :players="frontLine" />
      <DepthLine :players="midLine" />
      <DepthLine :players="backLine" />
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
    frontLine() {
      return this.playerPositions.map((player) => {
        let spotMarker = 'empty'
        if (player.position === 'front') {
          spotMarker = player.ball
        }
        return spotMarker
      })
    },
    midLine() {
      return this.playerPositions.map((player) => {
        let spotMarker = 'empty'
        if (player.position === 'mid') {
          spotMarker = player.ball
        }
        return spotMarker
      })
    },
    backLine() {
      return this.playerPositions.map((player) => {
        let spotMarker = 'empty'
        if (player.position === 'back') {
          spotMarker = player.ball === undefined ? 'gold' : player.ball
        }
        return spotMarker
      })
    },
  },
  created() {
    this.initPlayerPositions()
    this.playersInitialized = true
  },
  methods: {
    initPlayerPositions() {
      this.playerPositions = [
        { ball: 'blue', number: 1, position: 'back' },
        { ball: 'red', number: 2, position: 'back' },
        { number: 3, position: 'back' },
        { number: 4, position: 'back' },
        { ball: 'red', number: 5, position: 'back' },
        { number: 6, position: 'back' },
      ]
    },
  },
}
</script>
