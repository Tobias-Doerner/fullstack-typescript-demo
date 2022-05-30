<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  inheritLocale: true
})
const count = ref(0)
</script>

<template>
  <h1>{{ t('title') }}</h1>
  <PButton label="Count" @click="count++"></PButton>
  <h5>{{ count }}</h5>
</template>
