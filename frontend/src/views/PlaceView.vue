<template>
  <div class="map-layout">
    <n-button @click="show_drawer" class="info-button"/>
  <GMapMap
      ref="myMapRef"
      :center="{lat: this.place.latitude,  lng: this.place.longitude}"
      :zoom="50"
      map-type-id="terrain"
      class="map"
      >
      <GMapMarker
      :position="{lat: this.place.latitude, lng: this.place.longitude}"
    />
    </GMapMap>

    <n-drawer v-model:show="active" :width="502" :placement="'left'">
    <n-drawer-content title="Stoner">
      <n-carousel show-arrow class="carousel">
        <img v-for="image in this.images" :key="image.id" alt="image" :src=image.image_url>
      </n-carousel>
    </n-drawer-content>
    </n-drawer>
  </div>
</template>



<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import placeModel from '@/models/PlaceModel';
import imageModel from '@/models/ImageModel';
import api from '@/store/api';
import {NCard, NCarousel, NGrid, NGridItem, NButton, NDrawer} from "naive-ui";

@Options({
  components: {
    NCarousel, NCard, NGrid, NGridItem, NButton, NDrawer
  },
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'', description:'', type: 0, latitude: 0, longitude: 0}
    images: imageModel[] = [];
    active = false

    async created(){
      await api.get('api/place/', {params: {id: this.placeId}}).then(response =>{
            this.place = response.data[0];
          }).catch(error=>{
            console.log(error);
      });

      await api.get('api/image/', {params: {place: this.placeId}}).then(response =>{
        console.log(response.data)
        this.images = response.data
      }).catch(error=>{
        console.log(error);
      })
    }

    show_drawer(){
      this.active = true;
    }
}
</script>

<style scoped>
.map{
  height: 90vh;
}
.map-layout{
  text-align: left;
}
.info-button{
  position: absolute;
  z-index: 100;
  margin-top: 40vh
}
</style>