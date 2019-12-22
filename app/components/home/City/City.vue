<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" android.systemIcon="ic_menu_back" @tap="onBack" />
      <Label class="action-bar-title" :text="'Cities in ' + country.name"></Label>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout row="1" class="m-t-5">
        <SearchBar hint="Type city name" v-model="searchQuery" @textChange="onSearchChanged" />
        <CityItem v-for="item in items" :key="item.id" :data="item" @tap="onItemTap" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import SelectedPageService from "~/shared/selected-page-service";
import CityItem from "./CityItem";

export default {
  props: {
    country: {
      default: {
        id: null,
        name: null,
        image: null,
      }
    }
  },
  data() {
    return {
      searchQuery: "",
      items: [],
    };
  },
  components: {
    CityItem: CityItem
  },
  async mounted() {
    this.items = await this.$backendService.getCityList(this.country.id);
    this.$forceUpdate();
  },
  computed: {},
  methods: {
    onBack() {
      this.$navigateBack();
    },
    onSearchChanged() {},
    onItemTap(item) {
      // this.$navigateTo(City, {
      //   props: {
      //     country: item
      //   }
      // });
    }
  }
};
</script>