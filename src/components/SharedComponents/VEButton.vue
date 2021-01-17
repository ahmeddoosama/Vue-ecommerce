<template>
    <button type="button" :class="['ve-btn', `ve-btn-${color}`]">
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
        },
        color: {
            type: String,
            required: false,
            default: 'default',
            validator: function(value) {
                return ['default', 'success', 'erro', 'info'].indexOf(value) !== -1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.ve-btn {
    border: none;
    background: #eee;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &-success {
        background: #42b983;
        color: #FFF;
    }
    &-erro {
        background: #f44336;
        color: #FFF;
    }
    &-info {
        background: #29b6f6;
        color: #FFF;
    }
}
</style>