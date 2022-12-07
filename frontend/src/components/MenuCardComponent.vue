<template>
  <router-link :to="{name: 'PlaceList', params:{placeTypeId: this.place_type_id}}">
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
    place_type_id: String,
    title: String
  }
})

export default class MenuCardComponent extends Vue{
}
</script>

<style scoped>
  .n-card:hover{
    transition: 1s;
    border-color: #8ACBECFF;
    color: #8ACBECFF;
  }
  a{
    text-decoration: none;
  }
</style>