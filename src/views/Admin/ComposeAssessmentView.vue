<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const derror = ref("");

const questionTemplate = {
  options: {
    a: null,
    b: null,
    c: null,
    d: null,
  },
  question: "",
  selectedAnswer: null,
  correctAnswer: null,
  file: null,
};

const questions = ref([]); // Store all questions
const currentQuestion = ref({ ...questionTemplate }); // Current question being edited
const currentIndex = ref(0);

const user = ref({ ...questionTemplate }); // Initialize 'user' object

const addQuestion = () => {
  if (user.value && user.value.question && user.value.question.trim() !== "") {
    questions.value.push({ ...user.value });
    currentIndex.value = questions.value.length;
    user.value = { ...questionTemplate };
  }
};

const next = () => {
  addQuestion(); // Add the current question before moving to the next
};

const previous = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    user.value = { ...questions.value[currentIndex.value] };
  }
};

const finish = () => {
  addQuestion(); // Add the current question before finishing
  const token = localStorage.getItem("admin-token");
  axios
    .post("http://localhost:6001/api/v1/assessment", questions.value, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Add a computed property to display errors
const questionError = computed(() => {
  if (!user.value.question || user.value.question.trim() === "") {
    return "Question is required";
  }
  return "";
});

const correctAns = (answer) => {
  user.value.correctAnswer = answer;
};

// Error handling for file
const fileError = ref("");

</script>

<template>
  <div class="main">
    <h1 class="main-text">Compose Assessment</h1>
    <form>
      <label class="box-labels">{{ currentIndex + 1 }}/4</label>
      <input class="fileupload" type="file" id="file" />
      <p>{{ fileError }}</p>
      <label class="file-label" for="file"> + Choose file</label>
      <div class="box3">
        <label class="box-labels">Questions</label>
        <textarea name="" class="text-area" v-model.trim="user.question"></textarea>
        <p>{{ questionError }}</p>
      </div>
      <div class="main-boxes">
        <div>
          <label class="box-labels option-labels" @click="correctAns('a')">Option A</label>
          <br /><input
            class="box-input"
            :class="{ correctAns: user.correctAnswer === 'a' }"
            v-model="user.options.a"
          />
        </div>
        <div>
          <label class="box-labels option-labels" @click="correctAns('b')">Option B</label>
          <br /><input
            class="box-input"
            :class="{ correctAns: user.correctAnswer === 'b' }"
            v-model="user.options.b"
          />
        </div>
        <div>
          <label class="box-labels option-labels" @click="correctAns('c')">Option C</label>
          <br /><input
            class="box-input"
            :class="{ correctAns: user.correctAnswer === 'c' }"
            v-model="user.options.c"
          />
        </div>
        <div>
          <label class="box-labels option-labels" @click="correctAns('d')">Option D</label>
          <br /><input
            class="box-input"
            :class="{ correctAns: user.correctAnswer === 'd' }"
            v-model="user.options.d"
          />
        </div>
      </div>
      <p>{{ derror }}</p>
      <div class="btn-container">
        <button class="btn-next" :disabled="currentIndex === 0" @click="previous">Previous</button>
        <button class="btn-next" @click="next">Next</button>
      </div>
      <div class="btn-finish">
        <button class="btn-one" @click="finish">Finish</button>
      </div>
    </form>
  </div>
</template>


<style scoped>
p {
  color: red;
  font-size: 10px;
  text-align: start;
  padding-top: 5px;
}

input {
  padding: 10px;
}

.correctAns {
  background: #31d283;
}

.option-labels {
  cursor: pointer;
  padding: 4px;
}

.option-labels:hover {
  background: #31d283;
}

.main-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding-bottom: 92px;
  align-self: flex-start;
}
.box3 {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.file-label {
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  padding: 46px 180px 40px 180px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2b3c4e;
}

.fileupload {
  display: none;
}

.main-boxes {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 25px 64px;
  margin-top: 48px;
}

.box-input {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  width: 456px;
  border-radius: 4px;
}

.box-labels {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

.text-area {
  height: 144px;
  width: 976px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  resize: none;
  padding: 10px;
}

.btn-container {
  display: flex;
  justify-content: space-between;
}
.btn-next {
  border: none;
  color: white;
  background: #2b3c4e;
  height: 41px;
  width: 125px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-one {
  background: #cecece;
  height: 41px;
  width: 205px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

.btn-finish {
  text-align: center;
}
</style>
