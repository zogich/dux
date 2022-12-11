<template>
  <div style="padding:15px">
  <n-grid class="central_grid" cols="2" :x-gap="15" :y-gap="15" item-responsive>
  <n-grid-item span="0:2 800:1">
    <n-card>
      <n-input type="text" placeholder="Найти место" />
      <n-scrollbar style="max-height: 550px; text-align: left; min-height: 550px;">
        <n-list v-for="place in this.place_list" :key="place.id">
          <router-link :to="{name: 'PlaceView', params: {placeId: place.id} }">
            <n-button class="buttons">
              {{place.name}}
            </n-button>
          </router-link>
        </n-list>
      </n-scrollbar>
    </n-card>
  </n-grid-item>
  <n-grid-item span="0 800:1">
    <img src="@/assets/park.svg" alt="image">
  </n-grid-item>
  </n-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace, NInput, NList,
  NGrid, NGridItem, NScrollbar} from "naive-ui";
import placeModel from '@/models/PlaceModel'
import { Prop } from 'vue-property-decorator';
import api from '@/store/api'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, NInput, NList, NScrollbar,
    NGrid, NGridItem,
  },
})

export default class PlaceList extends Vue{
  @Prop({ required: true }) placeTypeId!: number;

  place_list: placeModel[] = []

  async created(){
    await api.get('/api/place/', { params: { place_type: this.placeTypeId } }).then(response =>{
        this.place_list = response.data as placeModel[];
        console.log(api.defaults.baseURL)
    })
  }

}
</script>

<style scoped>

  .buttons{
    text-align: left;
    justify-content: left;
    overflow: hidden;
    width: 100%;
    height: 60px;
    margin-top: 10px;
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