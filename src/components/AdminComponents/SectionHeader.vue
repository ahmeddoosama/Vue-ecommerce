<template>
  <div class="section-header">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="actions">
      <ve-button @click="addMethod">
        Add
      </ve-button>
    </div>
  </div>
</template>

<script>

export default {
  props: ["addMethod"],
};
</script>

<style lang="scss" scoped>
.section-header {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
