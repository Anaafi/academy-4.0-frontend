<script setup>
import { ref } from 'vue';
const selectedMinute = ref('');
const selectedSeconds = ref('');

const selectedTime = ref(null);
const countries = ref([
    { name: 'USA' },
    { name: 'Canada' },
    { name: 'Australia' },
    { name: 'United Kingdom' },
    { name: 'Germany' },
]);
</script>

<template>
    <div class="container">
        <h3>Timer Setting</h3>
        <hr />
        <h4>Set Time</h4>

        <form @submit.prevent="save()">
          <div class="time">
            <div class="select">
              <div class="minute">
                <select name="minute" id="" v-model="selectedMinute">
                  <option :value="min" v-for="(min, index) in minutes" :key="index">
                    {{ min }}
                  </option>
                </select>
              </div>
              <div class="min">
                <p>min</p>
              </div>
            </div>
            <div class="select">
              <div class="seconds">
                <select name="seconds" id="" v-model="selectedSeconds">
                  <option :value="sec" v-for="(sec, index) in seconds" :key="index">
                    {{ sec }}
                  </option>
                </select>
              </div>
              <div class="sec">
                <p>sec</p>
              </div>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>

        <div>
            <label class="datalist-table" for="countries"></label>
        <input list="countryList" type="text" id="countries" placeholder="00" name="countries" v-model="selectedTime" />

        <datalist id="countryList">
          <option v-for="country in countries" :value="country" :key="country"></option>
        </datalist>
        </div>
    </div>
</template>


<style scoped>
.datalist-table{
    /* border: 10px black solid; */
    padding: 10px;
}
#countries{
    display: none;
}
.timing {
    /* width: 50px; */
    border: none;
    /* font-size: 100px; */
}

.datalist {
    display: none;
}

.setting-div {
    display: flex;
    gap: 100px;
}

.time {
    display: flex;
    gap: 0 40px;
    margin-top: 10px;
    margin-bottom: 34px;
}

img {
    padding: 10px 40px 0px 10px;
}

button {
    background: #7557d3;
    border-radius: 3px;
    height: 38px;
    width: 127px;
    border-radius: 3px;
    color: white;
    border: none;
    cursor: pointer;
}

h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.4px;
    color: #4a4a4a;
}

h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2b3c4e;
}

h5 {
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
    color: #2b3c4e;
}

hr {
    width: 724px;
    height: 1px;
    left: 340px;
    top: 432px;
    background: #ffffff;
    border: 1px solid #f2f2f2;
    margin-top: 16px;
    margin-bottom: 100px;
}

.minute,
.seconds {
    width: 100px;
    font-family: "Lato";
    display: grid;
    grid-template-areas: "minute";
    align-items: center;
}

datalist {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    font-family: inherit;
    font-weight: 300;
    font-size: 45px;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    width: 100px;
}

option {
    color: #000;
    font-size: 16px;
}

.minute::after,
.seconds::after {
    content: url("@/assets/entries-logo.svg");
    justify-self: end;
}

select,
.minute:after,
.seconds:after {
    grid-area: select;
}

p {
    font-size: 12px;
}

.select {
    position: relative;
    display: flex;
    align-items: center;
}

.min,
.sec {
    position: absolute;
    bottom: 0;
    left: 50px;
}

.sec {
    position: absolute;
    left: 75px;
}</style>
