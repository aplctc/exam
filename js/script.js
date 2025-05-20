const questions = [
  {
    text: "Q: কাজের সময় কোন কিছু ভেঙ্গে গেলে বা নস্ট হলে কি করবেন ?",
    answers: ["সুপারভাইজারকে জানাতে হবে।", "জানানোর দরকার নেই।", "লুকিয়ে ফেলতে হবে।", "কোনটিই নয় ।"],
    correct: 0
  },
  {
    text: "Q: ওজন তোলার জন্য কোন ইকুইপমেন্ট ব্যবহার করা হয় ?",
    answers: ["<img src=' img/img1.1.jpg'/>", "<img src=' img/img1.2.jpg'/>", "<img src=' img/img1.3.jpg'/>", "<img src=' img/img1.4.jpg'/>"],
    correct: 1
  },
  {
    text: "Q:  'নো পার্কিং' চিহ্ন কোনটি?",
    answers: ["<img src=' img/img2.1.jpg'/>", "<img src=' img/img2.2.jpg'/>", "<img src=' img/img2.3.jpg'/>", "<img src=' img/img2.4.jpg'/>"],
    correct: 2
  },
  {
    text: "Q: কনস্ট্রাকশনের কাজে ফ্রেম বানানোর জন্য কিসের দরকার হয় ?",
    answers: ["ঢালাই ", "সিমেন্ট ", " খোয়া", "মোল্ড "],
    correct: 3
  },
  {
    text: "Q: খারাপ ইট নির্মাণ কাজে ব্যবহার করা উচিত নয় কেন ?",
    answers: ["তারা আকারে ছোট।", "তারা আগুনে পোড়া হয় না।", "তারা বেশি পানি শোষণ করে।", "তারা দেখতে সুন্দর নয়।"],
    correct: 4
  },
  {
    text: "Q: পিন/লোহা/ নেইল উঠানোর সাধারণত কোন টুলস ব্যবহার করা হয়?",
    answers: ["<img src=' img/img5.1.jpg'/>", "<img src=' img/img5.2.jpg'/>", "<img src=' img/img5.3.jpg'/>", "<img src=' img/img5.4.jpg'/>"],
    correct: 5
  },
  {
    text: "Q: ব্যক্তিগত সুরক্ষা সরঞ্জাম (PPE) ছাড়া কি কাজ করা যাবে ?",
    answers: [" হ্যাঁ", "না" ],
    correct: 6
  },
  {
    text: "Q: পড়ে যাওয়ার সাইন কোনটি ?",
    answers: ["<img src=' img/img7.1.jpg'/>", "<img src=' img/img7.2.jpg'/>", "<img src=' img/img7.3.jpg'/>", "<img src=' img/img7.4.jpg'/>"],
    correct: 7
  },
  {
    text: "Q: 'নো স্লিপিং'  সাইন কোনটি?",
    answers: ["<img src=' img/img8.1.jpg'/>", "<img src=' img/img8.2.jpg'/>", "<img src=' img/img8.3.jpg'/>", "<img src=' img/img8.4.jpg'/>"],
    correct: 8
  },
  {
    text: "Q: ইটের গুণাগুণ পরীক্ষা করার জন্য কত উচ্চতা থেকে সেটিকে ফেলে পরীক্ষা করা হয় ?",
    answers: ["০.৫ মিটার।", "১ মিটার।", "১.৫ মিটার।", "২ মিটার।"],
    correct: 9
  },
  {
    text: "Q: স্ক্যাফোল্ডিং (অস্থায়ী মাচা) কাজে কোন সুরক্ষা সরঞ্জাম ব্যবহার করা হয় ?",
    answers: ["আঘাত প্রতিরোধী গ্লাভস", "শক্ত হেলমেট", "নিরাপদ জুতা", "উপরের সবকটি"],
    correct: 10
  },
  {
    text: "Q: সকেন কিউরিং করা হয় ?",
    answers: ["সকংক্রিটের হাইড্রেশন (Hydration) প্রক্রিয়া সম্পূর্ণ করতে।", "শক্তি বৃদ্ধি করতে।", "ফাটল রোধ করতে।", " উপরের সবকটি"],
    correct: 11
  },
  {
    text: "Q: আমাদের কোথায় বালি সংরক্ষণ করা প্রয়োজন ?",
    answers: ["উঁচু স্থানে।", "সমতল স্থানে।", "গর্তে।", "নদীর পাড়ে।"],
    correct: 12
  },
  {
    text: "Q: কনক্রিটের ইলাস্টিক কত পারসেন্ট ?",
    answers: ["২০-৩০%", "৩০-২০%", "১৫-২৫%", "৫০-৭০%"],
    correct: 13
  },
  {
    text: "Q: ' সামনে ম্যানহোল ' এর সাইন কোনটি ? ",
    answers: ["<img src=' img/img14.1.jpg'/>", "<img src=' img/img14.2.jpg'/>", "<img src=' img/img14.3.jpg'/>", "<img src=' img/img14.4.jpg'/>"],
    correct: 14
  },
];

let currentQuestion = 0;
const answersStorage = Array(questions.length).fill(null);

const questionText = document.getElementById('questionText');
const answerBox = document.getElementById('answerBox');
const progressBar = document.getElementById('progressBar');
const timerDisplay = document.getElementById('timer');
const questionNav = document.getElementById('questionNav');

function renderQuestion(index) {
  const q = questions[index];
  questionText.innerHTML = q.text;
  answerBox.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = ans;
    if (answersStorage[index] === i) {
      div.classList.add('selected');
    }
    div.onclick = () => {
      answersStorage[index] = i;
      updateSidebar(index);
      renderQuestion(index);
    };
    answerBox.appendChild(div);
  });
  progressBar.style.width = ((index + 1) / questions.length * 100) + '%';
  updateSidebar(index, true);
}

function updateSidebar(activeIndex, markActive = false) {
  Array.from(questionNav.children).forEach((btn, i) => {
    btn.classList.remove('active', 'answered');
    if (answersStorage[i] !== null) {
      btn.classList.add('answered');
    }
    if (markActive && i === activeIndex) {
      btn.classList.add('active');
    }
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
}

document.getElementById('nextButton').onclick = nextQuestion;
document.getElementById('backButton').onclick = prevQuestion;

for (let i = 0; i < questions.length; i++) {
  const btn = document.createElement('button');
  btn.textContent = (i + 1).toString().padStart(2, '0');
  btn.onclick = () => {
    currentQuestion = i;
    renderQuestion(i);
  };
  questionNav.appendChild(btn);
}

// Timer
let totalTime = 600;
function startTimer() {
  const interval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(interval);
      alert("Time's up!");
    } else {
      totalTime--;
      const minutes = String(Math.floor(totalTime / 60)).padStart(2, '0');
      const seconds = String(totalTime % 60).padStart(2, '0');
      timerDisplay.textContent = `Time: ${minutes}:${seconds}`;
    }
  }, 1000);
}

renderQuestion(currentQuestion);
startTimer();
