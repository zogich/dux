<template>
  <n-grid cols="xs:1 s:2 m:2 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="8" class="grid">
    <n-grid-item>
      <n-card>
      <n-carousel show-arrow class="carousel">
        <img v-for="image in this.images" :key="image.id" alt="image" :src=image.image_url>
      </n-carousel>
      </n-card>
    </n-grid-item>
    <n-grid-item>
      <GMapMap
      :center="{lat: this.place.latitude,  lng: this.place.longitude}"
      :zoom="50"
      map-type-id="terrain"
      class="map"
      >
      <GMapMarker
      :position="{lat: this.place.latitude, lng: this.place.longitude}"
    />
    </GMapMap>
    </n-grid-item>
  </n-grid>
</template>



<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import placeModel from '@/models/PlaceModel';
import imageModel from '@/models/ImageModel';
import api from '@/store/api';
import {NCard, NCarousel, NGrid, NGridItem} from "naive-ui";

@Options({
  components: {
    NCarousel, NCard, NGrid, NGridItem
  },
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'', description:'', type: 0, latitude: 0, longitude: 0}
    images: imageModel[] = [];
    async created(){
      await api.get('api/place/', {params: {id: this.placeId}}).then(response =>{
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

.grid{
  padding: 10px;
  height: 90vh;
}
.carousel{
  height: 80vh;
}
.map{
  height: 80vh;
}

</style>