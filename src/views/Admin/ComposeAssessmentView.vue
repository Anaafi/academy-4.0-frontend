<script setup>
import { ref } from "vue";
// import { RouterLink, useRouter } from "vue-router";
import axios from "axios";
// Define the initial question template with empty values.

const derror = ref(""); // Define derror and initialize it with an empty string.
const fileError = ref(""); // Define fileError and initialize it with an empty string.



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

// Use ref to create reactive variables.
const index = ref(0);
const questions = ref([]);
const user = ref({ ...questionTemplate });
const questionError = ref("");

// Function to move to the next question.
const next = () => {
  // Validate that the question is not empty.
  if (user.value.question.trim() !== "") {
    questions.value[index.value] = { ...user.value };
    index.value++;

    if (index.value < 4) {
      // Make sure you have 4 questions.
      user.value = { ...questions.value[index.value] };
    } else {
      user.value = { ...questionTemplate };
    }
  }
};

// Function to move to the previous question.
const previous = () => {
  if (index.value > 0) {
    if (user.value.question.trim() !== "") {
      questions.value[index.value] = { ...user.value };
    }
    index.value--;
    user.value = { ...questions.value[index.value] };
  }
};

const finish = () => {
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
  user.value = { ...questionTemplate };
  index.value = 0;
  questions.value = [];
};

const correctAns = (value) => {
  user.value.correctAnswer = value;
};
</script>

<template>
  <div class="main">
    <h1 class="main-text">Compose Assessment</h1>
    <form>
      <label class="box-labels">{{ index + 1 }}/4</label>

      <input class="fileupload" type="file" id="file" />
      <!-- Display file upload errors -->
      <p>{{ fileError }}</p>

      <label class="file-label" for="file"> + Choose file</label>

      <div class="box3">
        <label class="box-labels">Questions</label>
        <!-- Use v-model.trim to remove leading/trailing whitespace -->
        <textarea name="" class="text-area" v-model.trim="user.question"></textarea>
        <!-- Display question errors -->
        <p>{{ questionError }}</p>
      </div>

      <div class="main-boxes">
        <!-- Update the class binding -->
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
      <!-- This variable is not defined, make sure it's defined if needed. -->

      <div class="btn-container">
        <button class="btn-next" :disabled="index === 0" @click="previous">Previous</button>
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
