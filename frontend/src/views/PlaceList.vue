<template>
  <div class="main-cont">
  <div class="doc">
    <n-card>
      <n-input v-model:value="value" type="text" placeholder="Найти место" />
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
  </div>
  <div class="right-cont">
    <img src="@/assets/park.svg" alt="image">
  </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace, NInput, NList, NScrollbar} from "naive-ui";
import placeModel from '@/models/PlaceModel'
import { Prop } from 'vue-property-decorator';
import api from '@/store/api'

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, NInput, NList, NScrollbar,
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
  .doc{
    display: flex;
    width: 40%;
    padding: 16px 16px 24px;
  }

  .right-cont{
    min-width: 60%;
    min-height: 625px;
    max-height: 625px;
     padding: 16px 16px 24px;
  }

  .buttons{
    border-radius: 0 10px 10px 0;
    text-align: left;
    max-width: 95%;
    justify-content: left;
    overflow: hidden;
    width: 100%;
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
 .main-cont{
   display: flex;
 }
</style>