<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const adminCreds = ref({});
const adminFirstName = ref("");
const adminEmail = ref("");
const adminPhone = ref("");
const adminCountry = ref("");
const adminAddress = ref("");
const isEditable = ref(false);

const adminDetailsStore = localStorage.getItem("adminDetails");
const adminDetails = JSON.parse(adminDetailsStore);

function setAdminCred(data) {
  adminCreds.value = data;
}

async function fetchAdminData() {
  const token = localStorage.getItem("adminToken");
  try {
    const response = await axios.get(`http://localhost:6001/api/v1/users/single/${adminDetails.id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data);
    setAdminCred(response.data.data);
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await fetchAdminData();
  adminFirstName.value = adminCreds.value.firstName + " " + adminCreds.value.lastName;
  adminEmail.value = adminCreds.value.email;
  adminPhone.value = adminCreds.value.phoneNumber;
  adminCountry.value = adminCreds.value.country;
  adminAddress.value = adminCreds.value.address;
});

function toggleEdit() {
  isEditable.value = !isEditable.value;
}

async function saveEdit() {
  const token = localStorage.getItem("adminToken");
  try {
    const response = await axios.patch(
      `http://localhost:6001/api/v1/users/update/${adminDetails.id}`,
      {
        firstName: adminFirstName.value.split(" ")[0],
        lastName: adminFirstName.value.split(" ")[1] || "",
        email: adminEmail.value,
        phoneNumber: adminPhone.value,
        country: adminCountry.value,
        address: adminAddress.value,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    await fetchAdminData();
    console.log("res", response);
  } catch (error) {
    console.log(error);
  }
}
</script>


<template>
  <div class="container">
    <div class="profile">
      <h1>Profile Settings</h1>
      <button @click="toggleEdit">{{ isEditable ? 'Save' : 'Edit' }}</button>
    </div>
    <hr />
    <form @submit.prevent="isEditable && saveEdit">
      <div class="image">
        <img src="../assets/icons/account.png" alt="profile image" srcset="" />
        <div class="label-form">
          <input class="fileupload" type="file" id="file" name="filename" />
          <label class="file-label" for="file">Upload new image</label>
        </div>
        <h2 class="remove">x Remove</h2>
      </div>
      <div class="inputs-wrapper">
        <div class="form-group">
          <div>
            <label>Name</label>
            <input class="input-field" v-model="adminFirstName" :disabled="!isEditable" />
          </div>
          <div>
            <label>Email</label>
            <input class="input-field" v-model="adminEmail" :readonly="!isEditable" />
          </div>
          <div>
            <label>Phone number</label>
            <input type="tel" class="input-field" v-model="adminPhone" :readonly="!isEditable" />
          </div>
        </div>
        <div class="form-group">
          <div>
            <label>Country</label>
            <input class="input-field" v-model="adminCountry" :readonly="!isEditable" />
          </div>
          <div>
            <label>Address</label>
            <input class="address-input" v-model="adminAddress" :readonly="!isEditable" />
          </div>
        </div>
      </div>
      <div class="btn-container">
        <button class="btn-save" type="submit" :disabled="!isEditable">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  justify-content: space-between;
}

hr {
  margin: 16px;
  background: linear-gradient(0deg, #f2f2f2, #f2f2f2), linear-gradient(0deg, #ffffff, #ffffff);
  border: 1px solid #f2f2f2;
}
.form-group {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.btn-save {
  height: 38px;
  width: 127px;
  border: none;
  color: white;
  background: #7557d3;
  border-radius: 3px;
  align-items: center;
  font-family: "Lato";
  font-size: 16px;
}

.address-input {
  width: 469px;
  height: 54px;
  left: 595px;
  top: 733px;
  color: black;
  background: rgba(117, 87, 211, 0.04);
}

.btn-container {
  text-align: center;
}

.input-field {
  width: 216px;
  height: 54px;
  left: 340px;
  top: 613px;
  color: black;
  background: rgba(117, 87, 211, 0.04);
}

::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  /* identical to box height, or 153% */
  letter-spacing: -0.117188px;
  color: #333758;
}

button {
  border: 1px solid #7557d3;
  border-radius: 3px;
  height: 38px;
  width: 127px;
  left: 937px;
  top: 382px;
  border-radius: 3px;
  color: #7557d3;
  background: white;
  cursor: pointer;
}

button:focus {
  color: #7557d3;
}

label {
  display: block;
  text-align: start;
}

input {
  width: 379px;
  height: 48px;
  left: 767px;
  top: 394px;
  margin-top: 3px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding-left: 10px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 20px;
  color: #4f4f4f;
  margin-bottom: 8px;
}

.image {
  display: flex;
  gap: 32px;
  margin-top: 73px;
  margin-bottom: 40px;
}

.file-label {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  text-decoration-line: underline;
  color: #333758;
  padding: 5px;
  opacity: 0.5;
}

.fileupload {
  display: none;
}

.label-form {
  display: flex;
  justify-content: center;
}

h2 {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: -0.117188px;
  margin-top: 28px;
  color: #ff5722;
}

img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
}

.remove {
  cursor: pointer;
}
</style>
