<template>
    <v-container fluid>
      <v-app-bar
          color="#455360"
          dark
        >
          <div class="navbar-logo-wrapper">
            <img src="../assets/images//Logo.svg" alt="logo">
          </div>
          <v-spacer/>
          <div class="user-info">
                    <div class="user-info-name">
                        <p class="info-name">Saychelles Petroleum Company Limited</p>
                        <p class="info-email">petroleum@mail.com</p>
                    </div>
                    <div class="user-info-icon">
                        <p class="user-info-icon-content">SL</p>
                    </div>
                </div>
          <v-menu
            left
            bottom
          >
          
            <template v-slot:activator="{ on, attrs }">
                
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="button"
                >
                <v-icon small class="button-icon">
                    mdi-triangle
                </v-icon>
              </v-btn>
            </template>
  
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-app-bar>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style>
    .user-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .user-info-icon {
        width: 41px;
        height: 41px;
        background-color: #F9D15C;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user-info-name {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: column;
        margin-right: 13px;
    }
    .info-name {
        font-size: 14px;
        color: #ffffff;
    }
    .info-email {
        font-size: 12px;
        color: #94A7B9;
    }
    .user-info-icon-content {
        font-size: 17px;
        color: #000000;
        font-weight: normal;
    }
    .button-icon {
        transform: rotate(180deg);
        font-size: 11px;
    }
    .theme--dark.v-btn.v-btn--has-bg {
        background-color: transparent;
    }
    .v-btn:not(.v-btn--round).v-size--default {
        height: 41px;
        min-width: 41px;
        border-radius: 50%;
        padding: 0 16px;
    }
    .v-btn--is-elevated {
        box-shadow: none;
    }
    .navbar-logo-wrapper {
        min-width: 290px;
        background-color: #2E3842;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 83px;
    }
    .v-toolbar__content, .v-toolbar__extension {
        padding: 0;
    }
</style>