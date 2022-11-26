import placeTypeModel from '@/models/PlaceTypeModel'
import placeModel from '@/models/PlaceModel'
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class PlaceModule extends VuexModule {
  placeTypes:placeTypeModel[] = [];
  currentPlaces:placeModel[] = [];

  @Mutation
  setPlaceTypes(data:placeTypeModel[]){
    this.placeTypes = data;
  }

  @Action
  fetchPlaceTypeByType(type: string){
    return this.placeTypes.filter(place_type=> place_type.type===type)
  }

  @Action
  fetchPlaceByType(type_id: number){
    return this
  }
}

import store from "@/store/index";
export const userModule = new PlaceModule({ store, name: "user" });