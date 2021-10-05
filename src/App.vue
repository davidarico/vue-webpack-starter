<template>
    <div id="app">
    <div class="nav">
      <md-tabs md-sync-route  class="md-primary" md-alignment="centered">
        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      </md-tabs>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>