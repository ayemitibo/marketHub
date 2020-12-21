<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
    <h6 class="text-blue">Dashboard</h6>
    <div class="d-flex justify-content-around mt-5">
      <div
        class="analytics__card col-md-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="fs-24 fw-600">Businesses</div>
        <div class="fs-24 fw-600" style="color: #ff4f17">
          {{ businessCount }}
        </div>
      </div>
      <div
        class="analytics__card col-md-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="fs-24 fw-600">Customers</div>
        <div class="fs-24 fw-600" style="color: #ffdd65">320</div>
      </div>
      <div
        class="analytics__card col-md-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="fs-24 fw-600">Users</div>
        <div class="fs-24 fw-600" style="color: #3edfaa">400</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <div class="nametable row col-12">
        <h6 class="text-blue my-4">MarketHub User Table</h6>
        <div class="row header">
          <div class="cell">Name</div>
          <div class="cell">Business Name</div>
          <div class="cell">Status</div>
          <div class="cell">Phone No.</div>
          <div class="cell">Address</div>
          <div class="cell">Email</div>
          <div class="cell">Type</div>
          <div class="cell">Expiry Date</div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("users", {
      users: (state) => state.users,
    }),
    businessCount() {
      return [
        ...this.users.filter((item) => {
          return item.userType === "business_signup";
        }),
      ].length;
    },
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers",
    }),
  },
  async mounted() {
    this.getUsers();
  },
};
</script>

<style scoped>
.analytics__card {
  height: 200px;
  background: #ffffff;
}
</style>
