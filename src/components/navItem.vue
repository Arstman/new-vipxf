<template>
  <q-item clickable tag="a" :to="{ name: item.name }" exact>
    <q-item-section avatar>
      <q-icon :name="iconName" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ item.meta.title }}</q-item-label>
      <q-item-label caption>{{ item.meta.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "navItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    toPath: function() {
      return { name: this.item.name };
    },
    iconName: function() {
      return this.item.meta.icon;
    }
  }
};
</script>

<style></style>
