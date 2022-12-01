<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { VDepartureBoard } from 'v-departure-board';
import '/node_modules/v-departure-board/dist/style.css';
</script>

<template>
    <VDepartureBoard displayStr="Vite-Vue" :size=100 />
</template>
