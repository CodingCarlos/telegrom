<template>
  <div>
    <div class="topbar">
      <a 
        v-if="back"
        @click="$router.back();"
      >
        <-
      </a>
      <span class="title">
        <slot/>
      </span>
    </div>
    <div class="topbar-spacing"></div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    back: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
  display: flex;
  align-items: center;
  background-color: #638bff;
  color: #fff;
  height: 42px;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
  .topbar > * {
    padding-left: 16px;
  }

.topbar-spacing {
  height: 42px;
  width: 100%;
}
</style>
