<template>
    <div>
        forgot password page with {{ params.token }}
    </div>
</template>

<script setup lang="ts">
const { params } = useRoute()
</script>