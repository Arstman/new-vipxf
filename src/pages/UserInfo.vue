<template>
  <q-page padding>
    <!-- content -->
    <div>
      <p>小洲村--{{ menu_list }}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      menu_list: this.$router.options.routes[0].children[0].meta.icon
    };
  }
};
</script>

<style></style>
