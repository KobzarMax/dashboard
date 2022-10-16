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
                    <o-table-column field="location" label="Location" v-slot="props">
                        {{ props.row.location }}
                    </o-table-column>

                    <o-table-column field="with_full_cylinders" label="With full cylinders" v-slot="props">
                        {{ props.row.with_full_cylinders }}
                    </o-table-column>

                    <o-table-column field="with_empty_cylinders" label="With empty cylinders" v-slot="props">
                        {{ props.row.with_empty_cylinders }}
                    </o-table-column>

                    <o-table-column field="empty" label="Empty" position="centered" v-slot="props">
                        {{ props.row.empty }}
                    </o-table-column>

                    <o-table-column field="overall" label="Overall" v-slot="props">
                        <span>
                        {{ props.row.overall }}
                        </span>
                    </o-table-column>

                    <o-table-column field="mean_time_at_location" label="Mean time at location" position="centered" v-slot="props">
                        {{ props.row.mean_time_at_location }}
                    </o-table-column>
                </o-table>
            </div>
        </o-collapse>
        <div class="pagination">
            <v-pagination
            v-model="page"
            :length="32"
            :total-visible="5"
            circle
          ></v-pagination>
        </div>
    </v-row>
</template>
<script>
export default {
    data() {
      const data = [
        {
            location: 'Mahé filling plant',
            with_full_cylinders: '0',
            with_empty_cylinders: '0',
            empty: '0',
            overall: '0',
            mean_time_at_location: '11d 18h 38m 38s'
        },
        {
            location: 'Praslin depot',
            with_full_cylinders: '0',
            with_empty_cylinders: '0',
            empty: '0',
            overall: '0',
            mean_time_at_location: '11d 18h 38m 38s'
        },
        {
            location: 'La Digue Service Station',
            with_full_cylinders: '0',
            with_empty_cylinders: '0',
            empty: '0',
            overall: '0',
            mean_time_at_location: '11d 18h 38m 38s'
        },
        {
            location: 'Victoria Service Station',
            with_full_cylinders: '0',
            with_empty_cylinders: '0',
            empty: '0',
            overall: '0',
            mean_time_at_location: '11d 18h 38m 38s'
        },
        {
            location: 'Egor test location',
            with_full_cylinders: '0',
            with_empty_cylinders: '0',
            empty: '0',
            overall: '0',
            mean_time_at_location: '11d 18h 38m 38s'
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