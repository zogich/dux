<template>
  <div>

    <h1>Выберите вид досуга: </h1>
    <n-space justify="center">
      <menu-card-component v-for="type in this.place_types" :key="type.id"
                           :place_type_id=type.id
                           :title = type.name />
    </n-space>
  </div>
</template>

<script lang="ts">
import { Options, Vue} from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";
import MenuCardComponent from "@/components/MenuCardComponent.vue"
import placeModule from "@/store/modules/place"
import placeTypeModel from "@/models/PlaceTypeModel"


@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, MenuCardComponent
  },
})
export default class Menu extends Vue{
  place_types: placeTypeModel[] = []

  async created(){
    await placeModule.fetchPlaceTypes();
    this.place_types = placeModule.placeTypes;
  }
}
</script>

<style scoped>

</style>