<template>
  <div id="app">
    <cld-image
        cloudName="demo"
        public-id="woman"
        responsive="fill"
    >
      <cld-transformation
          crop="fill"
          width="auto"
          gravity="auto"
      />
    </cld-image>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  height:500px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
