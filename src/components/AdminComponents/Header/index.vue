<template>
  <header class="admin-header">
    <button type="button" class="nav-toggle-button" @click="toggleNav">
        <span class="icon">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </span>
    </button>

    <nav>
      <ul>
        <li>
          <router-link to="/admin">Home</router-link>
        </li>
        <li>
          <router-link to="admin/Products">Products</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
      navVisibility() {
          return this.$store.state.admin.navVisibility
      }
  },
  methods: {
    toggleNav() {
      this.$store.commit("updateNavVisibility", !this.navVisibility)
    },
  },
};
</script>

<style lang="scss">
// Variables
$adminHeaderWidth: 200px;

#admin-content-body{
    &.nav-opened {
        padding-left: $adminHeaderWidth;
        transition: padding-left 0.5s;
        padding-top: 50px;
    }
}

.admin-header {
  width: $adminHeaderWidth;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -$adminHeaderWidth;
  transition: left 0.5s;
  background-color: #333;
  color: #fff;
  .nav-toggle-button {
      position: absolute;
      left: 100%;
      width: 40px;
      height: 40px;
      background: #333;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 5px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      .icon {
          position: relative;
          display: block;
          width: 100%;
          .line {
              position: absolute;
              display: block;
              width: 100%;
              height: 3px;
              background-color: #FFF;
              transition: 0.5s;
              &.line-1 {
                  transform: translateY(-8px);
              }
              &.line-3 {
                  transform: translateY(8px);
              }
              .nav-opened & {
                transform-origin: center;
                &.line-2 {
                  opacity: 0;
                }
                &.line-1 {
                  transform: translateY(0) rotate(45deg);
                }
                &.line-3 {
                  transform: translateY(0) rotate(-45deg);
                }
              }
          }
      }
  }
  .nav-opened & {
    left: 0;
    
  }
  ul {
    li {
      font-size: 16px;
      a {
        display: block;
        padding: 15px 20px;
      }
      &:hover {
        background-color: #000;
      }
    }
  }
}
</style>
