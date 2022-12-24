<template>
    <n-space class="home-page"
            vertical
            justify="center"
            align="center">
      <h1>DUX City Guide</h1>
      <h2>Путеводитель для иногородних студентов</h2>
      <n-button @click="start" size="large" dashed type="primary">
        Начать
      </n-button>
    </n-space>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {NGradientText, NConfigProvider, NSpace, NCard, NButton} from 'naive-ui';

@Options({
  components: {
    HelloWorld, NGradientText, NConfigProvider, NSpace, NCard, NButton
  },
})
export default class Home extends Vue {
    start(){
    this.$router.push('/menu');
  }
}
</script>
<style scoped>
  h1{
    margin: 0;
    font-size: 80px;
    font-weight: 500;
  }
  h2{
    font-size: 24px;
    margin: 0;
  }
  .home-page{
    height: 100%;
  }
</style>