<template>
  <router-link :to="{name: 'PlaceList', params:{placeType: this.place_type}}">
    <n-card>{{this.title}}</n-card>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton
  },
  props: {
    place_type: String,
    title: String
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