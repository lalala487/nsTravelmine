<template>
  <StackLayout>
    <card-view margin="10 0" elevation="40" radius="5">
      <GridLayout :height="height" rows="auto, *" :columns="height + ', *, auto'" class="m-10">
        <Image v-bind:src="flagSource" stretch="aspectFit" rowSpan="2" col="0" class="fas m-r-10"/>
        <label :text="data.name" class="h2 font-weight-bold" textWrap="true" row="0" col="1" />
        <label :text="data.description" class="" textWrap="true" row="1" col="1" />
        <label :text="data.cityCount" class="h3 font-weight-bold" textWrap="true" row="1" col="2" />
      </GridLayout>
    </card-view>
  </StackLayout>
</template>

<script>
import * as utils from "~/shared/utils";
import { ImageSource } from "@nativescript/core/image-source";

export default {
  props: {
    data: {
      default: {
        id: null,
        name: null,
        image: null
      }
    },
  },
  data() {
    return {
      flagSource: "~/images/earth.png"
    };
  },
  components: {},
  computed: {
    height() {
      return 120;
    },
  },
  methods: {},
  mounted() {
    ImageSource.fromUrl(this.data.image).then(source => this.flagSource = source);
  }
};
</script>