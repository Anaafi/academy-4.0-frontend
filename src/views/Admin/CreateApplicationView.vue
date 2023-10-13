<script setup>
import { ref } from "vue";
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { useRouter  } from 'vue-router'
import axios from "axios";


const router = useRouter();

const linkValue = ref("");
const imageUrlValue = ref("");
const batchIdValue = ref("");
const instructionsValue = ref("");
const deadlineValue = ref("");

async function makeApplication() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:6001/api/v1/application/createB",
      {
        batch_id: batchIdValue.value,
        image_url: imageUrlValue.value,
        link: linkValue.value,
        deadline: deadlineValue.value,
        instructions: instructionsValue.value,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("res", response);
    const { batch_id, link, image_url, deadline, instructions } = response.data.data;
    const appDetails = { batch_id, image_url, link, deadline, instructions };
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("applicationDetails", JSON.stringify(appDetails));
    // const adminDetails = JSON.parse(localStorage.getItem("adminDetails"))   when you want to get admin details
    router.push({ name: "adminDashboard" });
  }
  catch (error) {
    console.log(error);
  }
}
</script>

<template>
     <div class="container">
            <DashboardTitleComponent cardTitle="Create Application"/>
            <form class="forms">
                <div class="form-container">
                    <div class="form-group">
                        <label class="file-label" for="file"> + Choose file</label>
                        <input class="fileupload" type="file" id="file"/>
        
                    </div>
                    <div class="form-group">
                        <label class="labels">Link</label>
                        <input class="form-input" v-model="linkValue"/>
                        
                    </div>
                    <div class="form-group">
                        <label class="labels">Application closure date</label>
                        <input class="form-input" type="text" placeholder="dd/mm/yyyy" v-model="deadlineValue"/>
        
                    </div>
                    <div class="form-group">
                        <label class="labels">Batch ID</label>
                        <input class="form-input" v-model="batchIdValue"/>
                    </div>
                </div>
                <div class="form-group box3">
                    <label class="labels">Instructions</label>
                    <textarea class="text-area" name="" id="" ></textarea>
                </div>
                <div class="btn-container" type="submit">
                    <button  @click="makeApplication">Submit</button></div>
            </form>

            
        </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    gap: 65px;
    font-family: 'Lato';

}
.file-label {
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2b3c4e;
    border-radius: 6.2069px;
    text-align: center;
    padding: 46px 0px 40px 0px;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2b3c4e;
}

.fileupload {
    display: none;
}

.forms{
    display: flex;
    flex-direction: column;
    
}
.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 52px 64px;
    margin-bottom: 36px;

}

.form-input {
    border: 1.5px solid #2b3c4e;
    border-radius: 4px;
    height: 41px;
    width: 100%;
    border-radius: 4px;
    margin-top: 5px;
    padding-left: 10px;
}

.labels {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2b3c4e;
}

.text-area {
    margin-top: 5px;
    height: 144px;
    width: 100%;
    border-radius: 4px;
    border: 1.5px solid #2b3c4e;
    border-radius: 4px;
    resize: none;
    padding: 10px;
}

button {
    font-family: "Lato";
    background: #7557d3;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    border-radius: 4px;
    height: 50px;
    width: 379px;
    border: none;
    color: white;
    text-align: center;
    cursor: pointer;
}

.btn-container {
    text-align: center;
    margin-top: 44px;
}

.form-group{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}
</style>