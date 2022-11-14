<template>
  <div>
    <h1>Выберите вид досуга: </h1>
    <n-space justify="center">
      <menu-card-component title="Достопримечательности"/>
      <menu-card-component title="Музеи"/>
      <menu-card-component title="Театры"/>
      <menu-card-component title="Бары"/>
      <menu-card-component title="Рестораны"/>
      <menu-card-component title="Парки"/>
    </n-space>
  </div>
</template>

<script lang="ts">
import { Options, Vue} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld";
import { NButton, NCard, NConfigProvider, NGradientText, NSpace } from "naive-ui";
import MenuCardComponent from "@/components/MenuCardComponent"

@Options({
  components: {
    HelloWorld, NGradientText, NConfigProvider, NSpace, NCard, NButton, MenuCardComponent
  },
})
export default class Menu extends Vue{

}
</script>

<style scoped>

</style>