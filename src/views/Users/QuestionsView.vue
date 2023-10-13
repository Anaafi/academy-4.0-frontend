<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { RouterLink } from 'vue-router';
import { ref, computed } from "vue";

const currentQuestionIndex = ref(0);

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
    correctAnswer: 1,
  },
  // Add more questions here
];

const currentQuestion = computed(() => {
  return questions[currentQuestionIndex.value];
});

const currentQuestionNumber = computed(() => {
  return currentQuestionIndex.value + 1;
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === questions.length - 1;
});

function nextQuestion() {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
  }
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
}
</script>

<template>
  <section>
    <div class="head">
      <div>
        <DashboardTitleComponent
          cardTitle="Take Assessment"
          cardText="Click the finish button below to submit assessment, you can go back at any time to edit your answers."
        />
      </div>

      <div class="timer">
        <h3 class="heading">Timer</h3>
        <h4 class="time">
          <span class="hour">00</span><span class="minutes">mins</span>
          <span class="seconds">000</span><span class="minutes">sec</span>
        </h4>
      </div>
    </div>

    <div class="questions">
      <h1>Question {{ currentQuestionNumber }}</h1>

      <h2>{{ currentQuestion.question }}</h2>
    </div>
    <div class="answers" v-for="(option, index) in currentQuestion.options" :key="index">
       <label><input type="radio" name="answers"/>{{ option }}</label> 
    </div>
    <div class="btn1">
      <button class="previous" @click="previousQuestion" :disabled="currentQuestionIndex === 0">
        Previous
      </button>
      <button class="next" @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">
        Next
      </button>
    </div>
    <div class="btn2">
      <RouterLink to="/results"><button class="finish" @click="finishAssessment" :disabled="!isLastQuestion">Finish</button></RouterLink>
    </div>
      
  </section>
</template>

<style scoped>
.head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 326px;
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
    .hour, .seconds{
        color: #2B3C4E;
        text-align: center;
        font-family: 'Lato';
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .questions{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 64px;
      padding-bottom: 48px;
      gap: 14px;
    }
    .questions h1{
      color: #2B3C4E;
      font-family: 'Lato';
      font-size: 14px;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
    }
    .questions h2{
      color: #2B3C4E;
      font-family: 'Lato';
      font-size: 24px;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
    }
    .answers{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
    }
    .btn1{
      padding-top: 66px;
      display: flex;
      justify-content: center;
      gap: 529px;
      padding-bottom: 75px;
    }
    .previous{
      color: #211F26;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #fff;
      stroke-width: 1px;
      stroke: rgba(0, 0, 0, 0.25);
      padding: 10px 31px 11px 32px;
      border-radius: 4px;
    }
    .next{
      color: #FFF;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #7557D3;
      border: none;
      border-radius: 4px;
      padding: 10px 44px 11px 46px;
    }
    .btn2{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .finish{
      color: #FFF;
      font-family: 'Lato';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: #CECECE;
      padding: 11px 81px;
      border-radius: 4px;
    }
</style>