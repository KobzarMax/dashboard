<template>
  <v-app>
    <Navbar/>
    <div class="main-wrapper">
      <div class="sidebar-wrapper">
        <SidebarBlock/>
      </div>
      <div class="content-wrapper">
        <FilterItem/>
        <NameTableBlock/>
        <TagTableBlock/>
      </div>

    </div>
  </v-app>
</template>


  
<script>

import Navbar from "@/components/Navbar.vue";
import FilterItem from "@/components/FilterItem.vue";
import NameTableBlock from "@/components/NameTableBlock.vue";
import TagTableBlock from "@/components/TagTableBlock.vue";
import SidebarBlock from "@/components/SidebarBlock.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    FilterItem,
    NameTableBlock,
    TagTableBlock,
    SidebarBlock
  }

};
</script>

<style>
  @font-face {
    font-family: 'Circular Std';
    src: url('./assets/fonts/CircularStd-Black.eot');
    src: local('Circular Std Black'), local('CircularStd-Black'),
        url('./assets/fonts/CircularStd-Black.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/CircularStd-Black.woff2') format('woff2'),
        url('./assets/fonts/CircularStd-Black.woff') format('woff'),
        url('./assets/fonts/CircularStd-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
      font-family: 'Circular Std';
      src: url('./assets/fonts/CircularStd-Medium.eot');
      src: local('Circular Std Medium'), local('CircularStd-Medium'),
          url('./assets/fonts/CircularStd-Medium.eot?#iefix') format('embedded-opentype'),
          url('./assets/fonts/CircularStd-Medium.woff2') format('woff2'),
          url('./assets/fonts/CircularStd-Medium.woff') format('woff'),
          url('./assets/fonts/CircularStd-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Circular Std';
      src: url('./assets/fonts/CircularStd-Bold.eot');
      src: local('Circular Std Bold'), local('CircularStd-Bold'),
          url('./assets/fonts/CircularStd-Bold.eot?#iefix') format('embedded-opentype'),
          url('./assets/fonts/CircularStd-Bold.woff2') format('woff2'),
          url('./assets/fonts/CircularStd-Bold.woff') format('woff'),
          url('./assets/fonts/CircularStd-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  .v-application {
    font-family: 'Circular Std';
    font-weight: normal;
    background: #EBF0F5;
  }
  .theme--light.v-application {
    background: #EBF0F5;
    color: rgba(0, 0, 0, 0.87);
  }
  .v-application p {
    margin-bottom: 0;
  }
  .container {
    padding: 0;
  }
  .main-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  .sidebar-wrapper {
    height: 100%;
  }
</style>
