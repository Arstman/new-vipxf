<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          新风网VIP系统
        </q-toolbar-title>

        <div>这一部分放登录登出等组件</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <navItem v-for="menu of menu_list" v-bind:key="menu.name" :item="menu">
        </navItem>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import navItem from "components/navItem.vue";

export default {
  name: "CommonLayout",
  components: {
    navItem
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      menu_list: []
    };
  },
  methods: {
    openURL
  },
  created() {
    this.$axios.get(
        "https://p8890.12cent.cn/mock/5d18a0b1366a822bc7439a9f/vipxf/get_acc_routes"
      )
      .then(response => {
        this.menu_list = this.menu_list.concat(response.data.children);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
