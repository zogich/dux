<template>
  <router-link :to="{name: 'PlaceList', params:{placeType: placeType}}">
    <n-card>{{this.title}}</n-card>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";
import PlaceModel from '@/models/PlaceModel';
import PlaceTypeModel from '@/models/PlaceTypeModel'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton
  },
  props: {
    placeType: PlaceTypeModel
  }
})

export default class MenuCardComponent extends Vue{

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