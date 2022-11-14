<template>
  <router-link :to="{name: 'PlaceList', params:{placeType: this.title.toString()}}">
    <n-card>{{this.title}}</n-card>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";
import PlaceModel from '@/models/PlaceModel'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton
  },
  props: { title: String }
})

export default class MenuCardComponent extends Vue{
  place: PlaceModel | null = null;
}
</script>

<style scoped>
  .n-card:hover{
    transition: 1s;
    border-color: #5ACEA7FF;
    color: #5ACEA7FF;
  }
  a{
    text-decoration: none;
  }
</style>