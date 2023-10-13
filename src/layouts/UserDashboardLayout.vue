<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';


const route = useRoute();

const userDetailsStore = localStorage.getItem("userDetails")
const userDetails = JSON.parse(userDetailsStore);
</script>

<template>
  <div class="layout">
    <div class="sidebar">
      <div class="sidenav">
        <div class="profile">
          <img class="profile-img" src="@/assets/icons/Ellipse.png" alt="profile picture" />
          <div class="details">
            <h1 class="profile-name">{{ userDetails.firstName }} {{userDetails.lastName}}</h1>
            <p mailto:class="profile-mail">{{ userDetails.email }}</p>
          </div>
        </div>

        <div class="sidenav-links">
          <RouterLink class="links" :to="{ name: 'dashboard' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/dashboard.svg" alt="" /></div>
            <p class="link-text">Dashboard</p>
          </RouterLink>

          <RouterLink class="links" :to="{ name: 'assessment' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/assessment.svg" alt="" /></div>
            <p class="link-text">Assessment</p>
          </RouterLink>

          <RouterLink class="links logout" :to="{ name: 'home' }">
            <div class="icons"><img src="@/assets/icons/logout.svg" alt="" /></div>
            <p class="link-text">Log Out</p>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="rightContent">
      <div class="rightSide">
        <RouterView />
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.layout{
  display: flex;
}
.sidenav {
  font-family: 'Lato';
  width: 292px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}


.profile {
    background: #7557D3;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    color: #fff;
}

.profile-img {
    border-radius: 80px;
    width: 80px;
    height: 80px;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.profile-name {
    color: #FFF;
    font-family: 'Lato';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.4px;
}

.profile-mail {
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.32px;
}
.sidenav-links{
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 45px;
}

.links {
  display: flex;
  gap: 21px;
  align-items: center;
  text-decoration: none;
  color: #2B3C4E;
  text-align: center;
  font-family: 'Lato';
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}

.icons {
  width: 12px;
  height: 15.789px;
}

.logout {
  margin-top: 32px;
}
.active{
    color: #2B3C4E;
    text-align: center;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
}
.rightContent {
  height: 100vh;
  width: calc(100vw - 292px);
} 
.rightSide{
  height: 100vh;
  overflow-y: scroll;
  padding: 60px 47px;
}
</style>
