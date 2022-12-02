<template>
  <div class="doc">
  <n-card>
    {{this.place.name}}
    <div class="cont">
    <n-carousel show-arrow class="carousel">
      <img v-for="image in this.images" :key="image.id" alt="image" :src=image.image_url>
    </n-carousel>
    <GMapMap
      :center="{lat: this.place.latitude,  lng: this.place.longitude}"
      :zoom="50"
      map-type-id="terrain"
      style="width: 60vw; position:relative;">
      <GMapMarker
      :position="{lat: this.place.latitude, lng: this.place.longitude}"
    />
    </GMapMap>
      </div>

  </n-card>
    </div>
</template>



<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import placeModel from '@/models/PlaceModel';
import imageModel from '@/models/ImageModel';
import api from '@/store/api';
import {NCard, NCarousel} from "naive-ui";

@Options({
  components: {
    NCarousel, NCard,
  },
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'', description:'', type: 0, latitude: 0, longitude: 0}
    images: imageModel[] = [];
    async created(){
      await api.get('/place/', {params: {id: this.placeId}}).then(response =>{
            this.place = response.data[0];
          }).catch(error=>{
            console.log(error);
      });

      await api.get('/image', {params: {place: this.placeId}}).then(response =>{
        this.images = response.data
        console.log(response)
      }).catch(error=>{
        console.log(error);
      })
    }
}
</script>

<style scoped>

  .carousel{width: 30%}
  .cont{
    max-height: 900px;
    justify-content: center;
    display:flex;
    width: 100%;
  }
  .doc{
      padding: 16px 16px 24px;
    }

</style>