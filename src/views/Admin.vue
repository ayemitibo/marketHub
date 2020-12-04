<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
    <div>
      <h6 class="text-blue float-left">Admin</h6>
      <div
        class="d-flex align-items-center float-right justify-content-between"
      >
        <p class="filter mr-2 mb-0">
          FILTER
        </p>
        <select name="" id="" class="mr-2">
          <option value="">Support</option>
          <option value="">Super Admin</option>
          <option value="">All</option>
        </select>
        <p class="mb-0">Active</p>
        <input type="checkbox" name="" id="" class="mr-2" />
        <p class="mb-0">Inactive</p>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <div class="nametable row col-12">
        <div class="row header">
          <div class="cell">FIRST NAME</div>
          <div class="cell">LAST NAME</div>
          <div class="cell">USER TYPE</div>
          <div class="cell">ACTIVE STATUS</div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell">
            <span class="pencil-icon">
              &#9998;
            </span>
          </div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"><span class="pencil-icon"> &#9998;</span></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell">
            <span class="pencil-icon">
              &#9998;
            </span>
          </div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell">
            <span class="pencil-icon">
              &#9998;
            </span>
          </div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell">
            <span class="pencil-icon">
              &#9998;
            </span>
          </div>
        </div>
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
