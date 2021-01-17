<template>
  <div id="admin-content-body" :class="{'nav-opened': navVisibility}">

      <!-- Import Font -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" />

      <!-- Start Header -->
      <admin-header />
      <!-- End Header -->

      <router-view />
  </div>
</template>

<script>

import AdminHeader from "@/components/AdminComponents/Header/index"

export default {
    components: {
        AdminHeader
    },
    computed: {
        navVisibility() {
            return this.$store.state.admin.navVisibility;
        }
    }
};
</script>

<style lang="scss">

// import Variables
@import "../../assets/scss/global/_colors.scss";
@import "../../assets/scss/global/variables";

body{
    font-family: $admin-font-family;
}
</style>
