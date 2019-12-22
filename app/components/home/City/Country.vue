<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        @tap="onDrawerButtonTap"
        ios.position="left"
      ></ActionItem>
      <Label class="action-bar-title" text="City"></Label>
    </ActionBar>

    <StackLayout row="1" class="m-t-5">
      <SearchBar hint="Type country name" v-model="searchQuery" @textChange="onSearchChanged" />
      <CountryItem v-for="item in items" v-bind:key="item.id" :data="item" />
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import CountryItem from "./CountryItem";

export default {
  data() {
    return {
      searchQuery: "",
      items: [
        {
          id: 1,
          name: "United State",
          image: "http://www.pngall.com/wp-content/uploads/2016/05/America-Flag-Download-PNG.png",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          cityCount: 20
        },
        {
          id: 2,
          name: "France",
          image: "http://www.pngall.com/wp-content/uploads/2016/06/France-Flag-Free-Download-PNG.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cityCount: 10,
        }
      ]
    }
  },
  components: {
    CountryItem: CountryItem
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("City");
  },
  computed: {},
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onSearchChanged() {
      alert(this.searchQuery);
    }
  }
};
</script>