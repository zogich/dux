<template>
  <div v-bind:style='{textAlign: this.styleObject.map_layout_text_align}'>
    <n-button @click="show_drawer" v-bind:style="{marginTop: this.styleObject.drawer_button_margin_top,
    borderRadius: this.styleObject.drawer_button_border_radius,
    marginLeft: this.styleObject.drawer_button_margin_left
    }" class="info-button">
      Описание
    </n-button>
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
        <img class="img-cont" v-for="image in this.images" :key="image.id" alt="image" :src=image.image_url>
      </n-carousel>
      <div class="main-cont-wind">
        <div class="cont-name">
          {{place.name}}
        </div>
        <div class="cont-draw">
          <n-scrollbar style="max-height: 35vh; min-height: 35vh;">
          {{place.description}}
          </n-scrollbar>
        </div>
      </div>
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
import {NCard, NCarousel, NButton, NDrawer, NScrollbar} from "naive-ui";

@Options({
  components: {
    NCarousel, NCard, NButton, NDrawer,NScrollbar
  },
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'', description:'', type: 0, latitude: 0, longitude: 0}
    images: imageModel[] = [];
    active = false
    styleObject = {
      drawer_placement: 'left',
      map_layout_text_align: 'left',
      drawer_button_margin_top: '40vh',
      drawer_button_border_radius: '0px 25px 25px 0px',
      drawer_button_margin_left: '0',
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
          this.styleObject.drawer_placement = 'bottom';
          this.styleObject.map_layout_text_align = 'center';
          this.styleObject.drawer_button_margin_top = '80vh';
          this.styleObject.drawer_button_border_radius = '25px 25px 25px 25px';
          this.styleObject.drawer_button_margin_left = '-39.5px';
      }
      else {
        this.styleObject.drawer_placement = 'left';
        this.styleObject.map_layout_text_align = 'left';
        this.styleObject.drawer_button_margin_top = '40vh';
        this.styleObject.drawer_button_border_radius = '0px 25px 25px 0px';
        this.styleObject.drawer_button_margin_left = '0px';
      }
    }
}
</script>

<style scoped>

.main-cont-wind{
  margin-left: 25px;
  margin-right: 25px;
}

.cont-name{
  font-size: 200%;
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: black solid;
}

.cont-draw{
  padding-bottom: 10px;
  font-size: 150%;
  margin-top: 25px;
  border-bottom: black solid;
}

.map{
  height: 90vh;
}

.carousel{
  max-height: 40vh;
}

.img-cont{
  height: 100%;
  width: 100%;
  background-size: contain;
}

.info-button{
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 100;
}
</style>