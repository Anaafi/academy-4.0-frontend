<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { RouterLink } from 'vue-router'


</script>

<template>
    <section>
        <DashboardTitleComponent 
            cardTitle="Dashboard" />

        <div class="applicant-info">
            <div class="info">
                <h5 class="info-title">Current Applications</h5>
                <h3 class="text">312</h3>
                <div class="line"></div>
                <h6>Academy 2.0</h6>
            </div>
            <div class="info">
                <h5 class="info-title">Total Applications</h5>
                <h3 class="text">7000</h3>
                <div class="line green"></div>
                <h6>All entries do far</h6>
            </div>
            <div class="info">
                <h5 class="info-title">Academy’s</h5>
                <h3 class="text">4</h3>
                <div class="line yellow"></div>
                <h6>So far</h6>
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <div class="card-title">
                    <h6 class="card-title">History</h6>
                    <p class="subtext">Last Update 18:24, 22/08/22</p>
                </div>

                <div class="card-content">
                    <div class="batches">
                        <p>Academy Batch 1</p>
                        <p>15 students</p>
                        <p>started 11/09/15</p>

                    </div>
                </div>
            </div>
            <div class="card second">
                <h6 class="card-title create">Create Assessment</h6>
                <div class="card-assessment">
                    <p>
                        Create test question for an incoming academy students
                    </p>

                    <div>
                        <button disabled>
                            <RouterLink class="links" to="/create-assessment">Create Assessment</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {

    display: flex;
    flex-direction: column;
    gap: 65px;
    font-family: 'Lato';

}

.applicant-info {
    display: flex;
    gap: 87px;
}
.info {
    display: flex;
    flex-direction: column;
    gap: 11px;
}
.info-title {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;

    line-height: normal;
    font-style: normal;
    font-weight: 400;
}

.text {
    color: #2B3C4E;
    font-family: 'Lato';
    line-height: normal;
    font-weight: 300;
    font-size: 48px;
    font-style: normal;

}

h6 {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;


}

.line {
    width: 148px;
    height: 4px;
    margin-top: 8px;
    border-radius: 4px;
    background: #006DF0;

}

.yellow {
    background: #F09000;
    width: 148px;
    height: 4px;
    border-radius: 4px;

}
.green{
    background: #00F026;
}
.cards {
    display: flex;
    justify-content: space-between;

}

.card {
    width: 482px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 4px;
    padding: 34px 34px 34px 0px;
    align-items: start;
    
}
.second{
    border: 1px solid #ECECF9;
}

.card-title {
    color: #2B3C4E;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
}
.create{
    padding-left: 30px;
}
.subtext{
    color: #4F4F4F;
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    padding-top: 4px;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    width: 100%;
}

hr {
    background: #cecece;
    border: 1px solid #cecece;

}

.card-assessment {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px auto;
    gap: 24px;
    width: 100%;
}

.links {
    text-decoration: none;
    color: #fff;
}

button {
    background-color: #B1B1B1;
    padding: 10px 40px;
    border: none;
}

p {
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 16.727px;
    max-width: 343px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
.batches{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    padding: 24px 10px;

}
.batches:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}
.batches p{
    color: #4F4F4F;
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>