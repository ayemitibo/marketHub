<template>
  <div class="w-100">
    <div class="col-12">
      <div class="d-flex justify-content-end">
        <div class="form-group">
          <label class="mb-0">Active</label>
          <input type="checkbox" name="" id="" class="mr-2" />
        </div>
        <div class="form-group">
          <label class="mb-0">Inactive</label>
          <input type="checkbox" name="" id="" class="" />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="text-blue">Admin</h6>
        <div class="d-flex align-items-center float-right justify-content-between">
          <p class="filter mr-2 mb-0 text-uppercase">filter</p>
          <select name="" id="" class="mr-2">
            <option value="">Support</option>
            <option value="">Super Admin</option>
            <option value="">All</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary">Create Admin</button>
      </div>
    </div>

    <div class="col-12 mt-4">
      <div class="bg-white p-3">
        <table class="table">
          <caption>Admins Table</caption>
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">User Type</th>
              <th scope="col">Active Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="pencil-icon">
                  &#9998;
                </span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span class="pencil-icon">
                  &#9998;
                </span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
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
