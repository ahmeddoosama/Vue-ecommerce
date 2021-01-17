<template>
  <div class="categories">
    <section-header :add-method="showModelHandler" @addModelEvent="showModelHandler">
      <template #title>
        This is Title
      </template>
      <template #action> </template>
    </section-header>
    <ve-model :show="showModel"></ve-model>
  </div>
</template>

<script>
import SectionHeader from "@/components/AdminComponents/SectionHeader";
export default {
  components: {
    SectionHeader
  },
  data() {
      return {
          showModel: false
      }
  },
  methods: {
      showModelHandler() {
          this.showModel = true
      }
  }
};
</script>

SectionHeader<style lang="scss"></style>
