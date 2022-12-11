<template>
  <div v-bind:style='{textAlign: this.styleObject.map_layout_text_align}'>
    <n-button @click="show_drawer" v-bind:style="{marginTop: this.styleObject.drawer_button_margin_top}" class="info-button"/>
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

    <n-drawer v-model:show="active" :width="'35vw'" :height="'70vh'" :placement="this.styleObject.drawer_placement">
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
import {NCard, NCarousel, NButton, NDrawer} from "naive-ui";

@Options({
  components: {
    NCarousel, NCard, NButton, NDrawer
  },
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'', description:'', type: 0, latitude: 0, longitude: 0}
    images: imageModel[] = [];
    active = false
    isScreelLess950px = false
    styleObject = {
      drawer_placement: 'left',
      map_layout_text_align: 'left',
      drawer_button_margin_top: '40vh',
    }

    async created(){
      this.handleResizeWindow();
      await api.get('/api/place/', {params: {id: this.placeId}}).then(response =>{
            this.place = response.data[0];
          }).catch(error=>{
            console.log(error);
      });

      await api.get('/api/image/', {params: {place: this.placeId}}).then(response =>{
        console.log(response.data)
        this.images = response.data
      }).catch(error=>{
        console.log(error);
      })
      window.addEventListener("resize", this.handleResizeWindow);
    }

    async destroyed(){
      window.removeEventListener("resize", this.handleResizeWindow);
    }

    show_drawer(){
      this.active = true;
    }

    handleResizeWindow(){
      if ( window.innerWidth < 950 ){
          this.styleObject.drawer_placement = 'bottom'
          this.isScreelLess950px = true;
          this.styleObject.map_layout_text_align = 'center';
          this.styleObject.drawer_button_margin_top = '80vh';
      }
      else {
        this.styleObject.drawer_placement = 'left'
        this.isScreelLess950px = false;
        this.styleObject.map_layout_text_align = 'left';
        this.styleObject.drawer_button_margin_top = '40vh'
      }
    }
}
</script>

<style scoped>
.map{
  height: 90vh;
}

.info-button{
  position: absolute;
  z-index: 100;
}
</style>