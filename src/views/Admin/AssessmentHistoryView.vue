<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()


</script>

<template>
    <section>
     <div class="app-main">
         <div class="title">
             <h1>Assessment History</h1>
         </div>
     </div>
 
     <table>
      <thead>
        <tr class="head">
             <th>Batch</th>
             <th>Date Compsed</th>
             <th>No of Questions</th>
             <th>Time Allocated</th>
             <th>Status</th>
         </tr>
         
      </thead>
      <tbody>
        <tr class="tail">
             <td>Batch 1</td>
             <td>12/07/94</td>
             <td>30</td>
             <td>30 mins</td>
             <td>Taken</td>
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
    width: 100%;
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


  .head {
    color: white;
    background: #2b3c4e;
    border-collapse: collapse;
    width: 100%;
    height: 46px;
    
  }

  td {
    padding: 24px 26px;
    text-align: center;
  }

  .tail {
    /*background-color: #F0F0F0; */
    color: #333; /*example text color */
    
    
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


</style>