import placeTypeModel from '@/models/PlaceTypeModel'
import placeModel from '@/models/PlaceModel'
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import api from '@/store/api'

@Module
class PlaceModule extends VuexModule {
  placeTypes:placeTypeModel[] = [];
  currentPlaces:placeModel[] = [];

  @Action
  async fetchPlaceTypes(){
    await api.get('/place_types/').then(response =>{
      this.setPlaceTypes(response.data)
    }).catch(error=>{
      console.log('ERROR', error)
    })
  }

  @Mutation
  setPlaceTypes(data:placeTypeModel[]){
    this.placeTypes = data;
  }

}

import store from "@/store/index";
export const placeModule = new PlaceModule({ store, name: "user" });
export default placeModule