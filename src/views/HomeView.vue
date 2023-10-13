<script setup>
import { RouterLink } from "vue-router";
import HeroCardComponent from "../components/HeroCardComponent.vue";
</script>

<template>
  <section>
    <div class="main">
      <div class="navbar">
        <img src="../assets/icons/Group1_logo.svg" alt="logo"/>
        <div class="nav-links">
          <h3><RouterLink to="/">Home</RouterLink></h3>
          <h3><RouterLink to="/login">Sign in</RouterLink></h3>
          <RouterLink to="/signup"><button class="btn1">Register Now</button></RouterLink>
        </div>
      </div>
      
      <div class="hero">
        <div class="hero-text">
          <h2>Ever had a Dream of Becoming a Software <span class="text-voilet">Engineer?</span></h2>
          <p>Join enyata academy today and bring your long awaiting dream to reality.</p>
          <RouterLink to="/signup"><button class="btn2">Register Now</button></RouterLink>
        </div>
        <img class="hero-img" src="../assets/icons/Group2.png" alt="image"/>
      </div>

      <div class="hero-container">
        <div class="container-title">
          <img src="../assets/icons/Group5.svg"/>
          <h3>Why us?</h3>
        </div>
        <div class="container-cards">
          <HeroCardComponent title="Learn from the best"
          textBody="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet."
          cardBackgroundColor="rgba(117, 87, 211, 0.10)"
          />
          <HeroCardComponent title="100% online classes"
          textBody="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet."
          cardBackgroundColor="#fff"
          />
          <HeroCardComponent title="Get paid while learning"
          textBody="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet."
          cardBackgroundColor="rgba(117, 87, 211, 0.10)"
          />
          <HeroCardComponent title="Work on real project"
          textBody="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation amet."
          cardBackgroundColor="#fff"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © Enyata 2021</p>
    </div>
  </section>
</template>

<style scoped>
.main{
  padding: 46px 136px 0px 136px;
  background-image: url("../assets/icons/layer_net.png");
  background-repeat: no-repeat;
  background-position: right top;
}
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links{
  display: flex;
  gap: 40px;
  align-items: center;
}
.nav-links h3 a{
  color: rgba(33, 31, 38, 0.71);
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
}
.btn1{
  color: #7557D3;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px 20px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid rgba(117, 87, 211, 0.40);
}
.hero{
  display: flex;
  padding-top: 110px;
}
.hero-text{
  padding-top: 100px;
}
.hero-text h2{
  color: #211F26;
  font-family: 'Poppins';
  font-size: 40.908px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 57.271px */
  letter-spacing: 1.432px;
}
.text-voilet{
  color: #7557D3;
}
.hero-text p{
  color: rgba(33, 31, 38, 0.71);
  font-family: 'Poppins';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  padding: 23px 100px 32px 0px;
}
.btn2{
  color: #FFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px 24px;
  border-radius: 2px;
  background: #7557D3;
  border: none;
}
.hero-container{
  padding-top: 134px;
}
.container-title{
  display: flex;
  gap: 16px;
  padding-bottom: 40px;
}
.container-title h3{
  color: #211F26;
  font-family: 'Poppins';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.24px;
}
.container-cards{
  display: flex;
}
.footer{
  color: #FFF;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%; /* 21.84px */
  letter-spacing: 0.14px;
  background: #7557D3;
  text-align: center;
  padding-top: 55px;
  padding-bottom: 55px;
}
</style>