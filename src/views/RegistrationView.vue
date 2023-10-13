<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import axios from "axios";

const firstNameValue = ref("");
const lastNameValue = ref("");
const emailValue = ref("");
const dateOfBirthValue = ref("");
const addressValue = ref("");
const universityValue = ref("");
const courseValue = ref("");
const cgpaValue = ref("");
const cvValue = ref("");
const photoValue = ref("");
const router = useRouter();

// const fileInputs = ref({
//   cvValue: { accept: "file_extension", label: "Upload CV" },
//   photoValue: { accept: "image/*,.pdf", label: "Upload Photo" },
// });

// const formInputs = ref({
//   firstNameValue: { label: "First Name", placeholder: "", readonly: true },
//   lastNameValue: { label: "Last Name", placeholder: "", readonly: true },
//   emailAddressValue: { label: "Email", placeholder: "", readonly: true },
//   dateOfBirthValue: { label: "Date of Birth", placeholder: "dd/mm/yyyy", readonly: false },
//   addressValue: { label: "Address", placeholder: "", readonly: false },
//   universityValue: { label: "University", placeholder: "", readonly: false },
//   courseValue: { label: "Course of Study", placeholder: "", readonly: false },
//   cgpaValue: { label: "CGPA", placeholder: "", readonly: false },
// });

// Define error messages using ref

const errorMessages = {
  firstName: ref(""),
  lastName: ref(""),
  email: ref(""),
  dateOfBirth: ref(""),
  address: ref(""),
  university: ref(""),
  course: ref(""),
  cgpa: ref(""),
  cv: ref(""),
  photo: ref(""),
};

// const error = ref("")
const clearErrors = () => {
  for (const key in errorMessages) {
    errorMessages[key].value = "";
  }
};

const selectFile = (event) => {
   cvValue.value = event.target.files[0];
};
const selectImage = (event) => {
   photoValue.value = event.target.files[0];
};


// // const selectFileOrImage = (event, key) => {
// //   const file = event.target.files[0];
// //   if (key === "photoValue") {
// //     photoValue.value = file;
// //   } else if (key === "cvValue") {
// //     cvValue.value = file;
// //   }
// // };
// }

const register = async () => {
  clearErrors();
  // isloading.value= false
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("first_Name", firstNameValue.value);
    formData.append("last_Name", lastNameValue.value);
    formData.append("cv_url", cvValue.value);
    formData.append("image_url", photoValue.value);
    formData.append("email", emailValue.value);
    formData.append("date_of_birth", dateOfBirthValue.value);
    formData.append("address", addressValue.value);
    formData.append("university", universityValue.value);
    formData.append("course", courseValue.value);
    formData.append("CGPA", cgpaValue.value);

    console.log(formData);

    const response = await axios.post("http://localhost:6001/api/v1/application/create", formData, {
      first_Name: firstNameValue.value,
      last_Name: lastNameValue.value,
      cv_url: cvValue.value,
      image_url: photoValue.value,
      email: emailValue.value,
      date_of_birth: dateOfBirthValue.value,
      address: addressValue.value,
      university: universityValue.value,
      course: courseValue.value,
      CGPA: cgpaValue.value,

      headers: {
        authorization: token,
        "Content-Type": "multipart/form-data",
        // this is for the various file inputs
      },
    });
    console.log("res", response);
    const {
      first_Name,
      last_Name,
      cv_url,
      image_url,
      email,
      date_of_birth,
      address,
      university,
      course,
      cgpa,
      status,
      id,
      user_id,
    } = response.data.data;

    const userDetails = {
      first_Name,
      last_Name,
      cv_url,
      image_url,
      email,
      date_of_birth,
      address,
      university,
      course,
      cgpa,
      status,
      id,
      user_id,
    };
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("userApplicationDetails", JSON.stringify(userDetails));
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    // const userDetails = JSON.parse(localStorage.getItem("userDetails"))
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log(error);
    if (error.response) {
      const { data } = error.response;
      if (data && data.errors) {
        for (const key in data.errors) {
          if (errorMessages[key]) {
            errorMessages[key].value = data.errors[key][0];
          }
        }
      }
    }
  }
};
</script>

<template>
  <section>
    <div class="title">
      <img src="../assets/icons/small_logo.svg" alt="logo" />
      <p>Application Form</p>
    </div>
    <div class="application-form">
      <!-- <div class="upload"> -->
        <!-- Dynamically generated CV input using v-for -->
        <!-- <div v-for="(input, key) in fileInputs" :key="key">
          <input
            class="key"
            type="file"
            name="key"
            accept="input.accept"
            @change="selectFileOrImage($event)"
            @keypress="clearError(key)"
          />
          <label class="upload-label" :for="key">
            <span>&#43;</span>
            <p>{{ input.label }}</p>
          </label>
        </div>
      </div> -->
      <!-- </div> -->
      <div class="upload">
        <input class="cv" id="cv-file" type="file" @change="selectFile($event)"  accept="file_extension"/>
        <label class="upload-label" for="cv-file">
          <span>&#43;</span>
          <p>Upload CV</p>
        </label>
        <input
          class="photo"
          id="photo-file"
          type="file"
          accept="image/*,.pdf"
          @change="selectImage($event)"
        />
        <label class="upload-label" for="photo-file">
          <span>&#43;</span>
          <p>Upload Photo</p>
        </label>
      </div>

      <div class="forms">
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">First Name</label>
            <input type="text" class="field-input" v-model="firstNameValue" />
          </div>
          <div class="input-options">
            <label for="input">Last Name</label>
            <input type="text" class="field-input" v-model="lastNameValue" />
          </div>
        </div>
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">Email</label>
            <input type="text" class="field-input" v-model="emailValue" />
          </div>
          <div class="input-options">
            <label for="input">Date of Birth</label>
            <input type="text" class="field-input" v-model="dateOfBirthValue" />
          </div>
        </div>
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">Address</label>
            <input type="text" class="field-input" v-model="addressValue" />
          </div>
          <div class="input-options">
            <label for="input">University</label>
            <input type="text" class="field-input" v-model="universityValue" />
          </div>
        </div>
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">Course of Study</label>
            <input type="text" class="field-input" v-model="courseValue" />
          </div>
          <div class="input-options">
            <label for="input">CGPA</label>
            <input type="text" class="field-input" v-model="cgpaValue" />
          </div>
        </div>
        <div class="btn">
          <RouterLink to="/dashboard"><button @click="register">Submit</button></RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #fdfdff;
  /*padding: 0px 238px 100px 238px;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  gap: 24px;
}
.title p {
  color: #2b3c4e;
  font-family: "Lato";
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}
.application-form {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
  flex-direction: column;
  padding: 50px;
}
.upload {
  display: flex;
  gap: 32px;
}
.cv {
  display: none;
}
.upload-label {
  display: flex;
  border-radius: 2.872px;
  border: 1.5px dashed #2b3c4e;
  width: 211px;
  height: 49.974px;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.photo {
  display: none;
}
.forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 68px;
  gap: 27px;
}
.forms-layout {
  display: flex;
  gap: 73px;
}
.input-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input-options label {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.field-input {
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  width: 379px;
  height: 48px;
  padding: 20px;
}

button {
  color: #fff;
  font-family: "Lato";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 15px 164px;
  background: #7557d3;
  border: none;
  border-radius: 4px;
}

.file-label {
  width: 211px;
  height: 49.97px;
  left: 494px;
  top: 328px;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  text-align: center;
  padding-top: 14px;
  cursor: pointer;
}
.fileupload {
  display: none;
}
</style>
