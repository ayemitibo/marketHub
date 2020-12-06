<template>
  <!--  BEGIN NAVBAR  -->
  <div class="header-container fixed-top bg-white" style="margin-left: 16em">
    <header class="header navbar navbar-expand-sm border-0">
      <a
        href="javascript:void(0);"
        class="sidebarCollapse"
        data-placement="bottom"
      >
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
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </a>

      <ul class="navbar-item flex-row">
        <li class="nav-item align-self-center page-heading">
          <a href="notifications.php" class="nav-link">
            <input
              class="form-control input-bordered"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="background: #f5f5f5"
            />
            <svg
              class="search-icon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0" transform="scale(0.0277778)" />
                </pattern>
                <image
                  id="image0"
                  width="36"
                  height="36"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABR0lEQVR4Ae3VAUQDYRiH8XA4HEIYhjBAOIQQBsABAoQDhBAOYTgMEIYBwhDCEMJhCCGEIcAwhCEMwzC8PXgjL3Hn++6K7uEHO+N/5+5ur62t4SL0kaoEPTRejCm2EAtzpAhQawHGkJLe0KtzTAExPvCICQps7HHE8N4t5JsXHMEW4toMe0cH3uqbMXmJ+yPGGqIm8NYMou5RthSidjiEc12I2qLjcDIDOHcOUQWqdgVRMzg3gKghqnYKUQs4lzsO6pqnzeR2yR9Qtdi8KJ1LHM8wM0+oc6F5yZ1V/O8ColJ4aWQ+BQco0w1ErRDCSx1zlV7RxU9FsB/hC3gtwQ6iNhgi1uMhjnGJJcScQC2lZlQZK4gaw3snmJcYskaGwPw+Qi0luMPSjHhChn189ew2yn9RO6od1cCo9C+NmiLArxchR4D/UVvbJ0/xvmJ6b7wKAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <!-- <span class="badge badge-success"></span> -->
          </a>
        </li>
      </ul>
      <div class="bordered-blue">
        <div class="inner-border"></div>
      </div>
    </header>
  </div>
  <!--  END NAVBAR  -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* .form-control {
  padding: 1px 2px;
} */
.v-select.input-bordered.vs--single.vs--searchable
  .vs__dropdown-toggle
  div.vs__actions
  > button.vs__clear {
  display: none !important;
}
.bordered-blue {
  position: absolute;
  width: 288px;
  height: 100%;
  right: 0px;
  display: flex;
  top: 0px;
  background: #52c7ff;
  /* text-align: center; */
  justify-content: flex-end;
}
.inner-border {
  width: 50px;
  height: 50px;
  margin: 6px;
  background: #ffffff;
  border-radius: 50%;
}
.btn-orange {
  background-color: #fab03b;
}
.text-orange {
  color: #fab03b !important;
}
.user-avatar {
  background-color: #f5f5f5;
  padding: 5px 5px;
  border-radius: 5px;
}
</style>
