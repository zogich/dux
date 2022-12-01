<template>
  <div>
    {{this.place.name}}
    <GMapMap
      :center="{lat: 43.10944713099635,  lng: 131.89621359759158}"
      :zoom="100"
      map-type-id="terrain"
      style="width: 400px; height: 400px">
    </GMapMap>

  </div>
</template>



<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import placeModel from '@/models/PlaceModel';
import api from '@/store/api';

@Options({
})
export default class PlaceComponent extends Vue{
    @Prop({required: true}) placeId!: number;
    place: placeModel = {id: -1, name:'' , description:'' , type: 0}
    settings = {
      apiKey: 'ea2f2ecf-f7b7-4805-b522-4581cca8deb8',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1'
    }

    async created(){
      await api.get('/place/', {params: {id: this.placeId}}).then(response =>{
            console.log('RESPONSE PLACE:', response)
            this.place = response.data[0];
          }).catch(error=>{
            console.log(error);
      })
    }
}
</script>

<style scoped>

</style>