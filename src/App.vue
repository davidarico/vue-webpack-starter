<template>
    <div id="app">
    <div class="nav">
      <md-tabs md-sync-route  class="md-primary" md-alignment="centered">
        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
        <md-tab id="tab-journal" md-label="Journal" to="/journal" exact></md-tab>
        <md-tab id="tab-cooking" md-label="Cooking" to="/cooking" exact></md-tab>
        <md-tab id="tab-training" md-label="Training" to="/training" exact></md-tab>
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