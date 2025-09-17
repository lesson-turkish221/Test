const users = {
  "ogretmen": "1234",
  "ali": "abcd",
  "ayse": "qwerty"
};

const questions = [
  {
    question: "Türkiye'nin başkenti neresidir?",
    options: ["İstanbul", "Ankara", "İzmir"],
    answer: 1
  },
  {
    question: "En sevdiğiniz renk nedir?",
    options: ["Kırmızı", "Mavi", "Yeşil"],
    answer: 2
  }
];

let currentQuestion = 0;

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username] === password) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    loadQuestion();
  } else {
    alert("Kullanıcı adı veya şifre yanlış!");
  }
});

function loadQuestion() {
  const question = questions[currentQuestion];
  const container = document.getElementById("question-container");
  container.innerHTML = `
    <p>${question.question}</p>
    ${question.options.map((option, index) => `
      <label>
        <input type="radio" name="answer" value="${index}">
        ${option}
      </label><br>
    `).join('')}
  `;
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Lütfen bir seçenek işaretleyin.");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === questions[currentQuestion].answer) {
    alert("Doğru cevap!");
  } else {
    alert("Yanlış cevap!");
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz tamamlandı!");
  }
}
