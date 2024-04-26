<template>
    <div>
        posting page with id: {{ params.postingId }}
    </div>
</template>

<script setup lang="ts">
const { params } = useRoute()
</script>