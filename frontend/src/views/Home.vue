<template>
    <n-space>
      DUX
    </n-space>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {NGradientText, NConfigProvider, NSpace, NCard, NButton} from 'naive-ui';
import { darkTheme } from 'naive-ui';

@Options({
  components: {
    HelloWorld, NGradientText, NConfigProvider, NSpace, NCard, NButton
  },
})
export default class Home extends Vue {
  theme = darkTheme
}
</script>
