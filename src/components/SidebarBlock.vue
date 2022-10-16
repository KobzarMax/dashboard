<template>
    <div class="sidebar">
        <o-sidebar position="static" :mobile="mobile" :expand-on-hover="expandOnHover" :reduce="reduce" open>
        
            <section>
                <p class="sidebar-title">LPG managment system <v-icon color="#ffffff" class="button-icon">mdi-triangle-small-down</v-icon></p>
                <div class="sidebar-content">
                    <p class="sidebar-subtitle">
                        <span><v-icon color="#ffffff">mdi-dots-grid</v-icon> Dashboard</span><v-icon color="#ffffff" class="button-icon">mdi-triangle-small-down</v-icon>
                    </p>
                    <ul class="sidebar-item-list">
                        <li class="sidebar-item">
                            <o-dropdown aria-role="list">
                                <o-button variant="primary" slot="trigger" slot-scope="{ active }">
                                    <span>Reports</span>
                                    <o-icon :icon="active ? 'caret-right' : 'caret-down'"></o-icon>
                                </o-button>

                                <o-dropdown-item aria-role="listitem"><div class="drop-search">
                                    <p class="search-name">
                                        Search report by name
                                    </p>
                                    <o-field>
                                        <o-input placeholder="Enter the name"></o-input>
                                    </o-field>
                                </div></o-dropdown-item>
                                <o-dropdown-item aria-role="listitem">
                                    <div class="drop-list-wrapper">
                                        <div class="drop-list-title drop-1">
                                            1. Сylinder registration
                                        </div>
                                        <ul>
                                            <li class="drop-list-item">1.1  Cylinder сommissioning </li>
                                        </ul>
                                    </div>
                                </o-dropdown-item>
                                <o-dropdown-item aria-role="listitem">
                                    <div class="drop-list-wrapper">
                                        <div class="drop-list-title drop-2">
                                            2. Inventory
                                        </div>
                                        <ul>
                                            <li class="drop-list-item">2.1. Cylinder tracking</li>
                                            <li class="drop-list-item">2.2. Stock status</li>
                                            <li class="drop-list-item">2.3. Cylinder aging</li>
                                            <li class="drop-list-item">2.4. Lost cylinder </li>
                                            <li class="drop-list-item">2.5. Inventory check</li>
                                            <li class="drop-list-item">2.6. Pallet disposition</li>
                                        </ul>
                                    </div>
                                </o-dropdown-item>
                                <o-dropdown-item aria-role="listitem">
                                    <div class="drop-list-wrapper">
                                        <div class="drop-list-title drop-3">
                                            3. Filling plant productivity
                                        </div>
                                        <ul>
                                            <li class="drop-list-item">3.1. Average daily processing times</li>
                                            <li class="drop-list-item">3.2. Filling plant cylinder status</li>
                                            <li class="drop-list-item">3.3. Daily filling plant productivity</li>
                                            <li class="drop-list-item">3.4. Truck processing time</li>
                                        </ul>
                                    </div>
                                </o-dropdown-item>
                                <o-dropdown-item aria-role="listitem">
                                    <div class="drop-list-wrapper">
                                        <div class="drop-list-title drop-4">
                                            4. Maintenance
                                        </div>
                                        <ul>
                                            <li class="drop-list-item">4.1. Maintenance report</li>
                                            <li class="drop-list-item">4.2. Scrap report</li>
                                            <li class="drop-list-item">4.3. Damaged cylinders report</li>
                                            <li class="drop-list-item">4.4. Average hydro test processing time </li>
                                        </ul>
                                    </div>
                                </o-dropdown-item>
                            </o-dropdown>
                        </li>
                        <li class="sidebar-item">Bulk tank management<o-icon :icon="'caret-right'"></o-icon></li>
                        <li class="sidebar-item">Culinder manufacturer<o-icon :icon="'caret-right'"></o-icon></li>
                        <li class="sidebar-item">Pets microchip tracking<o-icon :icon="'caret-right'"></o-icon></li>
                        <li class="sidebar-item">Marketing</li>
                        <li class="sidebar-item">System admin<o-icon :icon="'caret-right'"></o-icon></li>
                    </ul>
                </div>
            </section>
        </o-sidebar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .sidebar {
        width: 290px;
        height: 100%;
        background-color: #2E3842;
    }
    .sidebar .button-icon {
        transform: rotate(270deg);
    }
    .sidebar .sidebar-title .button-icon {
        transform: rotate(0deg);
    }
    .sidebar-title {
        cursor: pointer;
        color: #ffffff;
        background-color: #455360;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        padding-left: 34px;
        padding-right: 21px;
        font-size: 16px;
        font-weight: 700;
    }
    .sidebar-subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 57px;
        background-color: #2F4255;
        color: #ffffff;
        font-size: 13px;
        font-weight: 400;
        padding: 8px;
        margin-top: 19px;
    }
    .sidebar-subtitle span i {
        margin-right: 22px;
    }
    .sidebar section {
        background-color: #2E3842;
    }
    .sidebar-item {
        list-style: none;
        color: #ffffff;
        margin-top: 25px;
        margin-bottom: 22px;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 58px;
        cursor: pointer;
        width: 100%;
    }
    .sidebar .o-drop, .sidebar .o-btn {
        width: 100%;
    }
    .sidebar .o-btn__label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebar .o-btn {
        background-color: transparent;
    }
    .o-drop__menu {
        width: 243px;
        background-color: #3E4C59;
        border-radius: 7px;
        box-shadow: 0px 4px 74px #18222D;
    }
    .o-drop__item {
        background-color: #3E4C59;
    }
    .drop-list-item {
        list-style: none;
        color: #B4CFE8;
        font-size: 12px;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
    }
    .drop-list-title {
        font-size: 12px;
        font-weight: 500;
        padding: 8px 0 8px 17px;
    }
    .sidebar .o-input {
        width: 187px !important;
        background-color: #ffffff;
        margin-left: 15px;
        margin-bottom: 15px;
        margin-top: 6px;
    }
    .search-name {
        font-size: 9px;
        color: #D4E1EC;
        padding-top: 11px;
        margin-left: 16px;
    }
    .drop-1 {
        background-color: #BBB368;
    }
    .drop-2 {
        background-color: #96BB68;
    }
    .drop-3 {
        background-color: #1788F0;
    }
    .drop-4 {
        background-color: #C866F6;
    }
</style>