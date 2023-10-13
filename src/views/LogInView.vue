<script setup>
import { ref } from 'vue';
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";

// Define a reactive property to track the password visibility
const passwordVisible = ref(false);

// Function to toggle password visibility
function togglePassword() {
  passwordVisible.value = !passwordVisible.value;
}

const emailValue = ref("");
const passwordValue = ref("");
const router = useRouter()

async function UserlogIn(){
    try{
        const token = localStorage.getItem("token")
        const answer = await axios.post("http://localhost:6001/api/v1/users/login",
        {
           email: emailValue.value,
           password: passwordValue.value
        }, { headers: {
            authorization:token
        }})  
        console.log("res", answer)
        const { firstName, lastName, phoneNumber,id, email, role} = answer.data.data
        const Normaluser = { firstName, lastName, phoneNumber,id, email, role}
        localStorage.setItem("token", answer.data.data.token)
    localStorage.setItem("userDetails", JSON.stringify(Normaluser))
    router.push({name: "dashboard"});
    } catch (error){
        console.log(error)
    }
}
</script>

<template>
    <section>
        <div class="main">
            <img src="../assets/icons/small_logo.svg">
            <p>Applicant Log In</p>
        </div>

        <div class="forms">
            <div class="input-options">
                <label for="input">Email Address</label>
                <input type="text" class="field-input" v-model="emailValue">
            </div>
            <div class="input-options">
                <label for="password">Password</label>
                <div class="password-field">
                    <input :type="passwordVisible ? 'text' : 'password'" class="field-input" v-model="passwordValue">
                    <span class="password-toggle" @click="togglePassword">
                    <img src="../assets/icons/eye.svg"/>
                    </span>
                </div>
            </div>
            <div class="btn">
                <RouterLink to="/registration" ><button @click="UserlogIn">Sign In</button></RouterLink>
                <div class="btn-text">
                    <p>Don’t have an account yet? <RouterLink to="/signup" class="link">Sign Up</RouterLink></p>
                    <h4>Forgot Password?</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-bottom: 69px;
}
.main p{
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
}
.forms{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
}
.input-options{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.input-options label{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.field-input{
    border-radius: 4px;
    border: 1.5px solid #BDBDBD;
    width: 379px;
    height: 48px;
    padding: 20px;
}
/* Additional CSS for the password toggle icon */
.password-field {
    position: relative;
}

.password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #000;
}

/* Style the eye icon */
.password-toggle img {
    width: 18px;
}
.btn{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

button{
    padding: 16px 165px 14px 165px;
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #7557D3;
    border: none;
    border-radius: 4px;
}
.btn-text{
    display: flex;
    justify-content: space-between;
}
.btn-text p, .btn-text h4{
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}
.btn-text a{
    color: #1A2C56;
}
</style>