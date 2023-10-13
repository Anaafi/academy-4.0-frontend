<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
</script>

<template>
    <div class="container">
        <div class="head">
            <DashboardTitleComponent cardTitle="Take Assessment" 
            cardText="Thank you" />

            <div class="timer">
                <h3 class="heading">Timer</h3>
                <h4 class="time">
                    <span class="hour">00</span><span class="minutes">mins</span>
                    <span class="seconds">000</span><span class="minutes">sec</span>
                </h4>
            </div>
        </div>
        <div class="cards">
            <div>
                <img src="@/assets/icons/confetti.png" alt="" srcset="" />
            </div>
            <div class="text-msg">
                We have received your assessment test, we will get back to you soon.
                Best of luck
            </div>
            <div>
                <button>
                    <RouterLink class="links" to="/">Home</RouterLink>
                </button>
            </div>
        </div>
        <div class="body-section">
        </div>
    </div>
</template>
<style scoped>
.head {
    display: flex;
    justify-content: space-between;
}

.heading {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}

.time {

    font-size: 48px;
    font-style: normal;
    font-weight: 300;
}

.minutes {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
}

.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 100px;
    gap: 21px;
}

.text-msg {
    max-width: 500px;
    width: 100%;
    text-align: center;
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding-bottom: 13px;
}

.links {
    text-decoration: none;
    color: #fff;
}

button {
    background-color: #7557D3;
    padding: 10px 80px;
    border: none;
    border-radius: 4px;
}
.hour, .seconds{
        color: #2B3C4E;
        text-align: center;
        font-family: 'Lato';
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
</style>