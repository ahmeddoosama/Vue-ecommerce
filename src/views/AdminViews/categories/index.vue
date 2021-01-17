<template>
    <div class="categories">
        <section-header :add-method="consoleMethod">
            <template #title>
                This is Title
            </template>
            <template #action>
            </template>
        </section-header>
    </div>
</template>

<script>
import SectionHeader from '@/components/AdminComponents/SectionHeader';
export default {
    components: {
        SectionHeader
    },
    methods: {
        consoleMethod() {
            console.log("Worked!")
        }
    }
}
</script>


        SectionHeader<style lang="scss">
</style>