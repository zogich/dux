<template>
  <div>
    {{this.place.name}}
  </div>
</template>



<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import placeModel from '@/models/PlaceModel';
import api from '@/store/api';

@Options({
  components: {

  }
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
      await api.get('/place/', {params: {place_id: this.placeId}}).then(response =>{
            this.place = response.data;
          })
    }
}
</script>

<style scoped>

</style>