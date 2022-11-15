<template>
    <n-space class="layout" vertical align="start">
      <h1>{{this.placeType.title}}</h1>
    <n-input v-model:value="value" type="text" placeholder="Найти место" />
  </n-space>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace, NInput } from "naive-ui";
import PlaceTypeModel from '@/models/PlaceTypeModel'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, NInput
  },
  props: {
    placeType: String
  }
})

export default class PlaceList extends Vue{
}
</script>

<style scoped>
  .layout{
    padding: 40px;
  }
  h1{
    margin: 0;
  }
</style>