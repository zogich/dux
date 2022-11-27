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
    })
  }

  @Mutation
  setPlaceTypes(data:placeTypeModel[]){
    this.placeTypes = data;
  }

  @Action
  fetchPlaceTypeById(type: string){
    return this.placeTypes.filter(place_type => place_type.name===type)
  }

  @Action
  fetchPlaceByType(type_id: number){
    return this
  }
}

import store from "@/store/index";
export const placeModule = new PlaceModule({ store, name: "user" });
export default placeModule