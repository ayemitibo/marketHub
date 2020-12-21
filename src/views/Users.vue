<template>
  <div class="w-100">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="text-blue">Users</h6>
        <button type="button" class="btn btn-primary">Edit User</button>
      </div>
    </div>

    <div class="col-12 mt-4">
      <div class="bg-white p-3">
        <table class="table">
          <caption>
            Users Table
          </caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Business Name</th>
              <th scope="col">Status</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col">Expiry Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.businessName }}</td>
              <td></td>
              <td>{{ user.telephone }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.userType }}</td>
              <td></td>
              <td></td>
              <td>
                <span class="pencil-icon">
                  &#9998;
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("users", {
      users: (state) => state.users,
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers", // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
  async mounted() {
    this.getUsers();
  },
};
</script>
<style scoped>
span.pencil-icon {
  float: right;
}
.filter {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
}
</style>
