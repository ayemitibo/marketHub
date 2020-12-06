<template>
  <!--  BEGIN SIDEBAR  -->
  <div class="sidebar-wrapper sidebar-theme">
    <!-- :class="{
      'sidebar-expand sidebar-theme': showFullSidebar,
      'sidebar-collapse sidebar-theme': !showFullSidebar,
    }"
    @mouseenter="showFullSidebar"
    @mouseleave="!showFullSidebar" -->
    <nav id="sidebar">
      <ul class="navbar-nav theme-brand flex-row text-center">
        <li class="nav-item theme-logo">
          <a href="#">
            <img class="navbar-logo" src="/assets/img/MARKETHUB LOGO.png" alt />
          </a>
        </li>
      </ul>
      <ul class="list-unstyled menu-categories mt-4" id="accordionExample">
        <li class="menu active">
          <router-link
            tag="a"
            to="/account/dashboard"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Dashboard</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            tag="a"
            to="/account/profile"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Profile</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            tag="a"
            to="/account/admin"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Admin</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            tag="a"
            to="/account/users"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Users</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            tag="a"
            to="/account/customers"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Customers</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <router-link
            tag="a"
            to="/account/user-management"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">User Management</span>
            </div>
          </router-link>
        </li>

        <li class="menu">
          <a href="#components" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
            <div class="">
              <span>Components</span>
            </div>
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="feather feather-chevron-right"
              ><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </a>
          <ul class="collapse submenu list-unstyled" id="components" data-parent="#accordionExample">
            <li>
              <a href="component_tabs.html"> Tabs </a>
            </li>
            <li>
              <a href="component_accordion.html"> Accordions  </a>
            </li>            
          </ul>
        </li>
        <li class="menu">
          <router-link
            tag="a"
            to="/account/freshchat"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Freshdesk/Freshchat</span>
            </div>
          </router-link>
        </li>
      </ul>

      <ul class="menu-category__fixed">
        <li>
          <a href="#" target="_blank" class="d-flex justify-content-center">
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!--  END SIDEBAR  -->
</template>

<script>
export default {
  data() {
    return {
      showFullSidebar: false,
    };
  },
};
</script>

<style>
.navbar-logo {
  width: 100% !important;
  height: auto !important;
  padding: 20px;
}
#sidebar li:hover > a,
nav#sidebar li.active > a {
  color: #fff;
  background-color: rgba(0, 98, 196, 0.06);
}
.sidebar-expand {
  box-shadow: none;
  border-right: 1px solid #e3e6ec;
  width: 235px;
  /* overflow: hidden; */
}
.sidebar-collapse {
  box-shadow: none;
  border-right: 1px solid #e3e6ec;
  width: 75px;
  /* overflow: hidden; */
}
</style>
