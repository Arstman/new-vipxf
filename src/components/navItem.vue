<template>
  <q-item clickable tag="a" to="/" exact>
    <q-item-section avatar>
      <q-icon name="home" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Dashboard</q-item-label>
      <q-item-label caption>控制中心</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'navItem',
  props: {
    item: {
      type: object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
