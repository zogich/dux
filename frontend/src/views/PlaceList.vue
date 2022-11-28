<template>
    <n-space class="layout" vertical align="start">
      <n-input v-model:value="value" type="text" placeholder="Найти место" />
      <n-list v-for="place in this.place_list" :key="place.id">
        <router-link :to="{name: 'PlaceView', params: {placeId: place.id} }">
        <n-list-item>
          {{place.name}}
        </n-list-item>
        </router-link>
      </n-list>
    </n-space>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace, NInput, NList } from "naive-ui";
import placeModel from '@/models/PlaceModel'
import { Prop } from 'vue-property-decorator';
import api from '@/store/api'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, NInput, NList,
  },
})

export default class PlaceList extends Vue{
  @Prop({ required: true }) placeTypeId!: number;

  place_list: placeModel[] = []

  async created(){
    await api.get('/place/', { params: { place_type: this.placeTypeId } }).then(response =>{
        this.place_list = response.data as placeModel[];
        console.log('PLACE LIST', this.place_list);
    })
  }

}
</script>

<style scoped>
  .layout{
    padding: 40px;
  }
  h1{
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:visited{
    color: inherit;
  }
</style>