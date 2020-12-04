<template>
  <div>
    <TheHeader />
    <div class="main-container" id="container">
      <div class="overlay"></div>
      <div class="search-overlay"></div>

      <TheSidebar />

      <div id="content" class="main-content">
        <div class="layout-px-spacing">
          <div class="row layout-top-spacing">
            <transition mode="out-in" name="slide">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader";
import TheSidebar from "@/components/Layout/TheSidebar";
export default {
  components: {
    TheSidebar,
    TheHeader,
  },
};
</script>

<style></style>
