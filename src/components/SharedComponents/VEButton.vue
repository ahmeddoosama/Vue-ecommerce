<template>
    <button type="button" class="ve-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 've-button',
    props: {
        type: {
            required: false,
            default: 'button'
        }
    }
}
</script>

<style lang="scss" scoped>
.ve-btn {
    border: none;
    background: #eee;
    padding: 8px 16px;
}
</style>