<script setup>
import ModalComponent from '../../components/ModalComponent.vue';
import {ref, computed, onMounted} from 'vue';
import axios from "axios";
const personData = ref(null);


const openmodal = ref(false);

const openMainModal = (person) => {
  // Pass the person data to the modal component
  personData.value = person;
  openmodal.value = true;
};

// const openDenyButton = () => {
//     openmodal.value = false;
//     declineVisibility.value = true;
// };

// const openApproveButton = () => {
//     openmodal.value = false;
//     approveVisibility.value = true;
// };

const closeModal = () => {
    openmodal.value = false;
};


const sortedPeople = computed(() => {
    return [...people.value].sort((a, b) => a.age - b.age || a.cgpa - b.cgpa);
});

const ageAscending = () => {
    people.value.sort((a, b) => b.age - a.age);
};
const ageDescending = () => {
    people.value.sort((a, b) => b.age - a.age);
};

const cgpaAscending = () => {
    people.value.sort((a, b) => b.cgpa - a.cgpa);
};
const cgpaDescending = () => {
    people.value.sort((a, b) => b.cgpa - a.cgpa);
};

const people = ref([])



function setPeople(data) {
  people.value = data
}

async function AllApplications() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:6001/api/v1/application", {
      headers: { authorization: token },
    });
    setPeople(response.data.data)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

/*
* computed
 */

const fullName = computed(() => {
  return (first_Name, last_Name) => {
    return `${first_Name} ${last_Name}`
  }
});

onMounted(async () => {
  await AllApplications()
})


</script>

<template>
   <section>
    <ModalComponent  @close="closeModal" v-show="openmodal" class="main-modal" />
  
    <div class="app-main">
        <div class="title">
            <h1>Entries - Batch 1</h1>
            <img src="@/assets/icons/hello.svg">
        </div>
        <p>Comprises of all that applied for batch 2</p>
    </div>

    <table>
      <thead>
        <tr class="head">
            <th>Name</th>
            <th>Email</th>
            <th>
                <div class="sort">
                    <p>DOB - Age</p>
                    <figure>
                      <button class="btn" @click="ageAscending"><img src="@/assets/icons/sortup.svg" srcset=""></button>
                      <button class="btn" @click="ageDescending"><img src="@/assets/icons/sortdown.svg" srcset=""></button>
                    </figure>
                </div>
            </th>
            <th>Address</th>
            <th>University</th>
            <th>
                <div class="sort">
                    <p>CGPA</p>
                    <figure>
                      <button class="btn" @click="cgpaAscending"><img src="@/assets/icons/sortup.svg" srcset=""></button>
                      <button class="btn" @click="cgpaDescending"><img src="@/assets/icons/sortdown.svg" srcset=""></button>
                    </figure>
                </div>
            </th>
        </tr>
      </thead>
      <tbody>
        <tr class="t-row" v-for="person in sortedPeople" :key="person.id" @click="() => openMainModal(person)">
            <td>{{ fullName(person.first_name, person.last_name) }}</td>
              <td>{{ person.email }}</td>
              <td>{{ person.date_of_birth }}</td>
              <td>{{ person.address }}</td>
              <td>{{ person.university }}</td>
              <td>{{ person.cgpa }}</td>
          </tr>
            </tbody>

    </table>
   </section> 
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
    background: #FDFDFF;
}
.app-main{
    padding-bottom: 40px;
}
  .title {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .title h1 {
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 43.556px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.871px;
  }

  .app-main p {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 13px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .head {
    color: white;
    background: #2b3c4e;
    border-collapse: collapse;
    height: 46px;
    
   
  }
th{
   text-align: center;
}
  .sort {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }


  td {
    padding: 24px 0px;
    text-align: center;
  }

  .tail {
    color: #333;
  }

  table {
  border-collapse: collapse;
  width: 100%;
  
}
.tail:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}
figure{
    display: flex;
    flex-direction: column;
    gap: 3px;
}


</style>
