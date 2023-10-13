<script setup>
import { ref } from 'vue';
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import ProfileComponent from '../../components/ProfileComponent.vue'
import TimerComponent from '../../components/TimerComponent.vue';

const activeTab = ref('profile');

const changeTab = (tab) => {
    activeTab.value = tab;
};
</script>

<template>
    <section class="section">
        <DashboardTitleComponent cardTitle="Profiles and Settings" cardText="Helps you set admin profile and give other users permissions"/>

        <div class="about-center section-center">
            <article class="about">
                <!-- btn container -->
                <div class="btn-container">
                    <button class="tab-btn" :class="{ active: activeTab === 'profile' }"
                        @click="changeTab('profile')">Admin Profile</button>
                    <button class="tab-btn" :class="{ active: activeTab === 'timer' }"
                        @click="changeTab('timer')">Timer Settings</button>
                </div>
                <div class="about-content">
                    <!-- single item -->
                    <div class="content" v-show="activeTab === 'profile'">
                        <ProfileComponent />
                    </div>
                    <!-- end of single item -->
                    <!-- single item -->
                    <div class="content" v-show="activeTab === 'timer'">
                        <TimerComponent />
                    </div>
                    <!-- end of single item -->
                </div>
            </article>
        </div>
    </section>
</template>



<style scoped>
.section{
    max-width: 730px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
    .tab-btn{
        color: #333758;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 24px 50px;
        border: none;
        background-color: transparent;
    }
    .active{
        background: rgba(117, 87, 211, 0.10);
    }
</style>
