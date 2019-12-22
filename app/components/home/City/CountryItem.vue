<template>
  <Label class="h3 font-weight-bold m-x-20 m-b-3" :text="data.name" />
</template>

<script>
import * as utils from "~/shared/utils";

export default {
  props: {
    data: {
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    alert(JSON.stringify(this.data));
  }
};
</script>