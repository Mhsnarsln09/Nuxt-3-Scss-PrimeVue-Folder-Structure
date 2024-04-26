<template>
    <NuxtLayout name="user-profile-layout">
        <NuxtPage :page-key="(route) => route.fullPath"/>
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  key: (route) => route.fullPath,
});
</script>