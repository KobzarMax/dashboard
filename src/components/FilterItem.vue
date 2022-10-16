<template>
    <v-row justify="center">
      <o-collapse :open="true" aria-id="contentIdForA11y1">
      <template #trigger>
        <o-button
          aria-controls="contentIdForA11y1"
        >
          Filter <v-icon
            color="#ffffff"
          >mdi-minus-thick</v-icon>
        </o-button>
      </template>
      <div class="notification">
        <div class="input-fields">
          <o-field label="Data">
            <o-datepicker
              v-model="selected"
              :show-week-number="showWeekNumber"
              :locale="locale"
              placeholder="dd/mm/yy"
              icon="calendar"
              trap-focus
            >
            </o-datepicker>
          </o-field>
          <o-field label="Serial Number">
            <o-input></o-input>
          </o-field>
        </div>
        <div class="input-fields">
          <o-field label="Tag">
            <o-input></o-input>
          </o-field>
          <o-field label="Location">
            <o-select placeholder="Any">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </o-select>
          </o-field>
        </div>
        <div class="filter-settings">
          <o-field label="Saved filter">
            <o-select placeholder="Filter 1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </o-select>
          </o-field>
          <o-button class="update-filter button">Update filter</o-button>
          <o-button class="delete-filter button">Delete filter</o-button>
          <o-button class="clear-filter button">Clear</o-button>
          <o-button class="action-filter button">Filter</o-button>
        </div>
      </div>
    </o-collapse>
    <div class="viev-buttons">
      <o-button class="action-filter button set-button"><v-icon color="#ffffff">mdi-chart-pie</v-icon>Chart view</o-button>
      <o-button class="update-filter button set-button"><v-icon color="#ffffff">mdi-table-large</v-icon> Table view</o-button>
    </div>
    </v-row>
</template>
<script>
export default {
    
}
</script>
<style>
    .row {
      margin: 0;
      width: 1394px;
    }
    .filter-inputs {
      max-width: 1394px;
    }
    .o-clps {
      width: 1394px;
    }
    .input-fields, .filter-settings {
      padding-top: 18px;
      margin-left: 28px;
    }
    .filter-settings {
      padding-bottom: 29px;
    }
    .o-input, .o-sel {
      border: 1px solid #799BBB;
      border-radius: 7px;
      padding-left: 40px;
      width: 368px !important;
      height: 32px;
    }
    .o-btn.button {
      width: 134px;
      height: 32px;
      border-radius: 7px;
      color: #ffffff;
      font-size: 12px;
      margin-left: 15px;
    }
    .o-btn.action-filter {
      background-color: #425B76;
    }
    .o-btn.clear-filter {
      background-color: #799BBB;
    }
    .o-btn.delete-filter {
      background-color: #FB0B37;
    }
    .o-btn.update-filter {
      background-color: #0085FF;
    }
    .filter-settings {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .input-fields {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .notification {
      max-width: 818px;
    }
    .o-clps__trigger .o-btn {
      width: 100%;
      justify-content: space-between;
      margin-top: 18px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    .o-clps__trigger .o-btn__wrapper {
      justify-content: space-between;
    }
    .o-clps__trigger .o-btn__label {
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding-left: 30px;
      padding-right: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: #455360 !important;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    .o-clps__content {
      background-color: #FFFFFF;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .fa-solid {
      font-size: 16px;
      color: #ffffff;
    }
    .viev-buttons .o-btn__label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
    }
    .viev-buttons {
      margin-top: 15px;
    }

    @media (max-width: 992px) {
        .row {
        width: 777px;
      }
    }
</style>