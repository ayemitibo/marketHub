<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
    <h6 class="text-blue">Profile</h6>
    <div class="row mt-5" style="height: 100%">
      <div class="col-md-7 bg-white">
        <form class="p-3">
          <div class="row mt-4">
            <!-- Full name field -->
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="input-item-label">
                    First Name
                    <span class="text-danger" title="This field is required"
                      >*</span
                    >
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    class="form-control input-bordered"
                    v-model="first_name"
                    placeholder="Enter your First Name"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="input-item-label">
                    Last Name
                    <span class="text-danger" title="This field is required"
                      >*</span
                    >
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    class="form-control input-bordered"
                    v-model="last_name"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
              <!-- Email field -->
              <div class="col-md-12">
                <div class="form-group">
                  <label class="input-item-label"> Email </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control input-bordered"
                    v-model="email"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              <!-- Phone Number field -->
              <div class="col-md-12">
                <div class="form-group">
                  <label class="input-item-label"
                    >Phone Number
                    <span class="text-danger" title="This field is required"
                      >*</span
                    >
                  </label>
                  <input
                    type="phone_number"
                    name="phone_number"
                    class="form-control input-bordered"
                    v-model="phone_number"
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
              <!-- Message field -->
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">User Type</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="role">Role</label>
                  <select class="form-control" id="role">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="input-item-label"
                    >Address
                    <span class="text-danger" title="This field is required"
                      >*</span
                    >
                  </label>
                  <textarea
                    style="height : 100px"
                    type="phone_number"
                    name="phone_number"
                    class="form-control input-bordered"
                    v-model="address"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-3">
              <button
                type="submit"
                class="btn btn-lg btn-primary px-5 float-right"
              >
                Create User
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-4 bg-white ml-2" style="height: min-content;">
        <div
          class="d-flex flex-column justify-content-center align-items-center my-5"
        >
          <div class="profile__img"></div>
          <button type="button" class="btn btn-primary mt-3">
            UPLOAD PROFILE PICTURE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Admin Create User",
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
      message: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.profile__img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 4px solid #52c7ff;
}
</style>
