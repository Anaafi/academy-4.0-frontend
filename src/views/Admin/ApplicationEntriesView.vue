<script setup>
import ModalComponent from '../../components/ModalComponent.vue';
import { ref } from 'vue';

const mainModalVisibility = ref(false);


const openMainModal = () => {
  mainModalVisibility.value = true;
};

</script>

<template>
   <section>
    <ModalComponent  v-show="mainModalVisibility" class="main-modal" />
  
    <div class="app-main">
        <div class="title">
            <h1>Entries - Batch 2</h1>
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
                        <img src="@/assets/icons/sortup.svg">
                        <img src="@/assets/icons/sortdown.svg">
                    </figure>
                </div>
            </th>
            <th>Address</th>
            <th>University</th>
            <th>
                <div class="sort">
                    <p>CGPA</p>
                    <figure>
                        <img src="@/assets/icons/sortup.svg">
                        <img src="@/assets/icons/sortdown.svg">
                    </figure>
                </div>
            </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="openMainModal" class="tail">
            <td>Jack Ice</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
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
