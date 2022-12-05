<script setup lang="ts">
import { computed } from "vue";
import "./VDepartureBoard.scss";

export interface Props {
    displayStr: string,
    color?: string,
    bgColor?: string,
    size?: number,
}

const props = withDefaults(defineProps<Props>(), {
    displayStr: '',
    color: 'white',
    bgColor: 'black',
    size: 40
});

const strAry = computed(() => props.displayStr?.split('').map( x => x == ' ' ? 'blank' : x.toUpperCase() ) || [] );
const sizePx = computed(() => `${props.size}px`);
const halfSizePx = computed(() => `${props.size/2}px`);

</script>

<template>
    <div class="v-departure-board" 
        :style="
            // @ts-ignore 
            {'--sizePx': sizePx, '--halfSizePx': halfSizePx}">
        <template v-for="ch in strAry">
            <span class="letter" :class="[`letter-${ch}`]"></span>
        </template>
    </div>
</template>

<style lang="scss">
.letter {
  height: var(--sizePx);
  width: var(--sizePx);
}
.letter::before {
  font-size: var(--sizePx);
  height: var(--halfSizePx);
  line-height: var(--sizePx);
}
.letter::after {
  font-size: var(--sizePx);
  height: var(--sizePx);
  line-height: var(--sizePx);
}
</style>
