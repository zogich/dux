<template>
  <div>
    <h1>Выберите вид досуга: </h1>
    <n-space justify="center">
      <menu-card-component :place_type="'attraction'" :title="'Достопримечательности'"/>
      <menu-card-component :place_type="'museums'" :title="'Музеи'"/>
      <menu-card-component :place_type="'theaters'" :title="'Театры'"/>
      <menu-card-component :place_type="'bars'" :title="'Бары'"/>
      <menu-card-component :place_type="'restaurants'" :title="'Рестораны'"/>
      <menu-card-component :place_type="'parks'" :title="'Парки'"/>
    </n-space>
  </div>
</template>

<script lang="ts">
import { Options, Vue} from "vue-class-component";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";
import MenuCardComponent from "@/components/MenuCardComponent.vue"
import PlaceTypeModel from "@/models/PlaceTypeModel"

@Options({
  components: {
    NGradientText, NConfigProvider, NSpace, NCard, NButton, MenuCardComponent
  },
})
export default class Menu extends Vue{
  list_of_place_types = [
      {id: 1, title: 'Достопримечательности', type: 'attraction', description: 'XXXX' },
    {id: 2, title: 'Музеи', type: 'museums', description: 'XXXX' },
    {id: 3, title: 'Театры', type: 'theaters', description: 'XXXX' },
    {id: 4, title: 'Бары', type: 'bars', description: 'XXXX' },
    {id: 5, title: 'Рестораны', type: 'restaurants', description: 'XXXX' },
    {id: 6, title: 'Парки', type: 'parks', description: 'XXXX' },
  ]
}
</script>

<style scoped>

</style>