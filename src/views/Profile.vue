<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
    <h6 class="text-blue">Profile</h6>
    <div class="row mt-5" style="height: 100%">
      <div class="col-md-4 bg-white mr-3">
        <div
          class="d-flex flex-column justify-content-center align-items-center my-5"
        >
          <div class="profile__img"></div>
          <div class="fs-18 fw-600 my-2">Name</div>
          <div class="fs-18">Technical Support</div>
        </div>
        <hr class="mt-5" />
        <div class="mx-3 my-4">
          <div>
            <h6 class="text-blue">Email Address</h6>
            <p>nonamexyz@mail.com</p>
          </div>
          <div class="my-3">
            <h6 class="text-blue">Phone Number</h6>
            <p>+234 801 234 5678</p>
          </div>
          <div>
            <h6 class="text-blue">Address</h6>
          </div>
        </div>
      </div>
      <div class="col-md-7 bg-white">
        <form class="p-3">
          <div class="row mt-4">
            <!-- Full name field -->
            <div class="col-md-12">
              <div class="form-group">
                <label class="input-item-label">
                  Full Name
                  <span class="text-danger" title="This field is required"
                    >*</span
                  >
                </label>
                <input
                  type="text"
                  name="full_name"
                  class="form-control input-bordered"
                  v-model="full_name"
                  placeholder="Enter your Full Name"
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
            <!-- Password field -->
            <div class="col-md-12">
              <div class="form-group">
                <label class="input-item-label"
                  >Password
                  <span class="text-danger" title="This field is required"
                    >*</span
                  >
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control input-bordered"
                  v-model="password"
                  placeholder="Enter your Password"
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
                <label class="input-item-label">Message</label>
                <textarea
                  type="text"
                  name="message"
                  class="form-control input-bordered"
                  cols="30"
                  rows="3"
                  v-model="message"
                  placeholder="Enter your Message"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12 mt-3">
              <button type="submit" class="btn btn-lg btn-primary px-5">
                Update Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
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
