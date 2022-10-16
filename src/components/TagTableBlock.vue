<template>
        <v-row justify="center" class="table-name">
            <o-collapse :open="true" aria-id="contentIdForA11y1">
            <template #trigger>
                <o-button
                aria-controls="contentIdForA11y1"
                >
                <div class="name-wrapper">
                    Name table <span class="name-icon"></span>
                </div>
                <div class="icons-wrapper">
                    <v-icon color="#ffffff">mdi-tray-arrow-down</v-icon>
                    <v-icon color="#ffffff">mdi-minus-thick</v-icon>
                </div>
                </o-button>
            </template>
            <div class="notification">
                <o-table
                    :data="isEmpty ? [] : data"
                    :bordered="isBordered"
                    :striped="isStriped"
                    :narrowed="isNarrowed"
                    :hoverable="isHoverable"
                    :loading="isLoading"
                    :focusable="isFocusable"
                    :mobile-cards="hasMobileCards"
                    >
                    <o-table-column field="tag" label="Tag" v-slot="props">
                        {{ props.row.tag }}
                    </o-table-column>

                    <o-table-column field="serial_number" label="Serial number" v-slot="props">
                        {{ props.row.serial_number }}
                    </o-table-column>

                    <o-table-column field="status" label="Status" v-slot="props">
                        {{ props.row.status }}
                    </o-table-column>

                    <o-table-column field="location" label="Location" position="centered" v-slot="props">
                        {{ props.row.location }}
                    </o-table-column>

                    <o-table-column field="time_at_location" label="Time at location" position="centered" v-slot="props">
                        {{ props.row.time_at_location }}
                    </o-table-column>
                </o-table>
            </div>
        </o-collapse>
    </v-row>
</template>
<script>
export default {
    data() {
      const data = [
        {
            tag: 'PALLET7777, PALLET8888',
            serial_number: 'nbVJvpXrrh',
            status: 'Retailer in',
            location: 'First SeyPec Retailer',
            time_at_location: '11d 16h 23m 11s'
        },
        {
            tag: 'PALLET7777, PALLET8888',
            serial_number: 'nbVJvpXrrh',
            status: 'Retailer in',
            location: 'First SeyPec Retailer',
            time_at_location: '11d 16h 23m 11s'
        },
        {
            tag: 'PALLET7777, PALLET8888',
            serial_number: 'nbVJvpXrrh',
            status: 'Retailer in',
            location: 'First SeyPec Retailer',
            time_at_location: '11d 16h 23m 11s'
        },
        {
            tag: 'PALLET7777, PALLET8888',
            serial_number: 'nbVJvpXrrh',
            status: 'Retailer in',
            location: 'First SeyPec Retailer',
            time_at_location: '11d 16h 23m 11s'
        },
        {
            tag: 'PALLET7777, PALLET8888',
            serial_number: 'nbVJvpXrrh',
            status: 'Retailer in',
            location: 'First SeyPec Retailer',
            time_at_location: '11d 16h 23m 11s'
        }
      ]

      return {
        data,
        isEmpty: false,
        isBordered: false,
        isStriped: false,
        isNarrowed: false,
        isHoverable: false,
        isFocusable: false,
        isLoading: false,
        hasMobileCards: true
      }
    }
}
</script>
<style>
    .table-name .notification {
        max-width: 100%;
    }
    .o-table__th {
        background-color: #F1F8FF;
        padding: 8px;
        font-size: 12px;
    }
    .o-table__td {
        padding: 11px;
        font-weight: 400;
        font-size: 12px;
    }
    .name-wrapper, .icons-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .name-icon {
        width: 28px;
        height: 28px;
        background-color: #C866F6;
        border-radius: 50%;
        display: inline-block;
    }
    .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }
</style>