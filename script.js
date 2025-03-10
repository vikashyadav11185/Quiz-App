document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const endScreen = document.getElementById("end-screen");

  const categorySelect = document.getElementById("category");
  const difficultySelect = document.getElementById("difficulty");
  const startBtn = document.getElementById("start-btn");

  const currentCategorySpan = document.getElementById("current-category");
  const currentDifficultySpan = document.getElementById("current-difficulty");
  const scoreSpan = document.getElementById("score");
  const questionNumberSpan = document.getElementById("question-number");
  const totalQuestionsSpan = document.getElementById("total-questions");

  const timerEl = document.getElementById("timer");
  const timerProgress = document.getElementById("timer-progress");

  const questionEl = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const optionBtns = document.querySelectorAll(".option-btn");
  const feedbackEl = document.getElementById("feedback");

  const nextBtn = document.getElementById("next-btn");

  const endScoreSpan = document.getElementById("end-score");
  const maxScoreSpan = document.getElementById("max-score");
  const playAgainBtn = document.getElementById("play-again-btn");

  // Game state variables
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 15;
  let selectedCategory = "";
  let selectedDifficulty = "";

  // Initialize the game
  function init() {
    // Event listeners
    startBtn.addEventListener("click", startGame);
    nextBtn.addEventListener("click", nextQuestion);
    playAgainBtn.addEventListener("click", resetGame);

    optionBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        selectOption(parseInt(btn.dataset.index))
      );
    });
  }

  // Start the game
  function startGame() {
    selectedCategory = categorySelect.value;
    selectedDifficulty = difficultySelect.value;

    // Get questions for selected category and difficulty
    currentQuestions = getQuestions(selectedCategory, selectedDifficulty);

    if (currentQuestions.length === 0) {
      alert("No questions available for this category and difficulty.");
      return;
    }

    // Update UI
    currentCategorySpan.textContent =
      categoryNameMap[selectedCategory] || selectedCategory;
    currentDifficultySpan.textContent =
      selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
    scoreSpan.textContent = "0";
    questionNumberSpan.textContent = "1";
    totalQuestionsSpan.textContent = currentQuestions.length;

    // Reset game state
    currentQuestionIndex = 0;
    score = 0;

    // Show game screen
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    // Load first question
    loadQuestion();
  }

  // Load a question
  function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    // Update question text
    questionEl.textContent = question.question;

    // Update options
    for (let i = 0; i < optionBtns.length; i++) {
      optionBtns[i].textContent = question.options[i];
      optionBtns[i].className = "option-btn"; // Reset classes
      optionBtns[i].disabled = false;
    }

    // Hide feedback and next button
    feedbackEl.classList.add("hidden");
    nextBtn.classList.add("hidden");

    // Start timer
    startTimer();
  }

  // Start the countdown timer
  function startTimer() {
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    timerProgress.style.width = "100%";

    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      // Update timer bar
      const percentage = (timeLeft / 15) * 100;
      timerProgress.style.width = `${percentage}%`;

      // Change color based on time left
      if (timeLeft <= 5) {
        timerProgress.style.backgroundColor = "#dc3545";
      } else if (timeLeft <= 10) {
        timerProgress.style.backgroundColor = "#ffc107";
      } else {
        timerProgress.style.backgroundColor = "#4caf50";
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        timeOut();
      }
    }, 1000);
  }

  // Handle time out
  function timeOut() {
    // Disable all options
    optionBtns.forEach((btn) => {
      btn.disabled = true;
    });

    // Show correct answer
    const correctIndex = currentQuestions[currentQuestionIndex].correctIndex;
    optionBtns[correctIndex].classList.add("correct", "highlighted");

    // Show feedback
    feedbackEl.textContent = "Time's up! The correct answer is highlighted.";
    feedbackEl.className = "";
    feedbackEl.classList.add("incorrect");
    feedbackEl.classList.remove("hidden");

    // Show next button
    nextBtn.classList.remove("hidden");
  }

  // Handle option selection
  function selectOption(index) {
    // Clear timer
    clearInterval(timer);

    // Disable all options
    optionBtns.forEach((btn) => {
      btn.disabled = true;
    });

    const correctIndex = currentQuestions[currentQuestionIndex].correctIndex;

    // Check if answer is correct
    if (index === correctIndex) {
      // Correct answer
      optionBtns[index].classList.add("correct");

      // Update score
      score++;
      scoreSpan.textContent = score;

      // Show feedback
      feedbackEl.textContent = "Correct! Well done!";
      feedbackEl.className = "";
      feedbackEl.classList.add("correct");
    } else {
      // Incorrect answer
      optionBtns[index].classList.add("incorrect");
      optionBtns[correctIndex].classList.add("correct", "highlighted");

      // Show feedback
      feedbackEl.textContent = "Incorrect. The correct answer is highlighted.";
      feedbackEl.className = "";
      feedbackEl.classList.add("incorrect");
    }

    feedbackEl.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }

  // Move to next question
  function nextQuestion() {
    currentQuestionIndex++;

    // Update question number
    questionNumberSpan.textContent = currentQuestionIndex + 1;

    // Check if quiz is complete
    if (currentQuestionIndex >= currentQuestions.length) {
      endGame();
      return;
    }

    // Load next question
    loadQuestion();
  }

  // End the game
  function endGame() {
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    // Update final score
    endScoreSpan.textContent = score;
    maxScoreSpan.textContent = currentQuestions.length;
  }

  // Reset the game
  function resetGame() {
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }

  // Get questions based on category and difficulty
  function getQuestions(category, difficulty) {
    if (!questionsData[category] || !questionsData[category][difficulty]) {
      return [];
    }

    return questionsData[category][difficulty];
  }

  // Category name mapping for display
  const categoryNameMap = {
    mathematics: "Mathematics",
    science: "Science",
    gk: "General Knowledge",
    technology: "Latest Technologies",
    mncs: "MNCs",
  };

  // Initialize the game
  init();
});
