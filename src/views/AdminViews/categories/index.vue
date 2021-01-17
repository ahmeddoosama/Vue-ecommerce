<template>
  <div class="categories">
    <section-header :add-method="showModelHandler" @addModelEvent="showModelHandler">
      <template #title>
        This is Title
      </template>
      <template #action> </template>
    </section-header>
    <ve-model :show="showModel" @close="hideModelHandler" :width="800">
        <ve-button @click="hideModelHandler">
            Close Model
        </ve-button>
    </ve-model>
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
      },
      hideModelHandler() {
          this.showModel = false
      }
  }
};
</script>

SectionHeader<style lang="scss"></style>
