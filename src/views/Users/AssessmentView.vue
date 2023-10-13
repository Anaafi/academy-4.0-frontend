<script setup>
    import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
</script>

<template>
    <section>
        <div class="head">
            <div>
                <DashboardTitleComponent 
                cardTitle="Take Assessment"
                cardText="Click the button below to start assessment, you have limited time
                    for this test" />
            </div>
            
            <div class="timer">
                <h3 class="heading">Timer</h3>
                <h4 class="time">
                    <span class="hour">00</span><span class="minutes">mins</span>
                    <span class="seconds">000</span><span class="minutes">sec</span>
                </h4>
            </div>
        </div>
        <div class="cards">
            <div class="hourglass">
                <img src="@/assets/icons/hourglassicon.svg" alt="" srcset="" />
            </div>
            <div class="text-msg" >
                We have 4 days left until the next assessment<br />
                Watch this space
            </div>
            <div>
                <button disabled>
                    <RouterLink class="links" to="/questions">Take Assessment</RouterLink>
                </button>
            </div>
        </div>
        <div class="body-section">
        </div>
    </section>
</template>
<style scoped>

.head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*border: 1px solid red;*/
}
    .heading{
        color: #4F4F4F;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
    .time{
        
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
    }
    .minutes{
        color: #4F4F4F;
        font-family: 'Lato';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
    }
    .cards{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 100px;
        gap: 21px;
    }
    .text-msg{
        /* max-width: 342.909px; */
        width: 100%;
        text-align: center;
        color: #4F4F4F;
        text-align: center;
        font-family: 'Lato';
        font-size: 16.727px;
        font-style: normal;
        font-weight: 400;
    }
    .links {
        text-decoration: none;
        color: #fff;
    }

    button {
        background-color: #B1B1B1;
        padding: 10px 40px;
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