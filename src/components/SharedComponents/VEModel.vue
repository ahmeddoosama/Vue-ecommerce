<template>
    <transition name="fade">
        <div class="model-container" v-if="show">
            <div class="model-content">

            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 've-model',
    props: {
        show: {
            type: Boolean,
            default: false,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.model-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    &.fade-enter,
    &.fade-leave-to {
        opacity: 0;
    }
    &.fade-enter-active,
    &.fade-leave-active {
        transition: opacity 0.25s;
    }
    .model-content {
        width: 100%;
        max-width: 500px;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        height: 400px;
        margin: 50px auto;
    }
}
</style>