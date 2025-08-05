const colorCodeContainer = document.getElementById("color-code");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");
    const playAgainButton = document.getElementById("play-again");
    let correctColor = "";

    function generateRandomNumber(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }

    function generateRandomColor() {
      const r = generateRandomNumber(0, 255);
      const g = generateRandomNumber(0, 255);
      const b = generateRandomNumber(0, 255);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function startGame() {
      optionsContainer.innerHTML = "";
      resultContainer.innerText = "";
      playAgainButton.style.display = "none";

      correctColor = generateRandomColor();
      colorCodeContainer.innerText = correctColor;

      const correctIndex = generateRandomNumber(0, 5);

      for (let i = 0; i < 6; i++) {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color-box");

        const color = i === correctIndex ? correctColor : generateRandomColor();
        colorDiv.style.backgroundColor = color;

        colorDiv.addEventListener("click", () => {
          if (color === correctColor) {
            resultContainer.innerText = "🎉 Correct! You guessed it!";
            resultContainer.style.color = "#00ffcc";
            playAgainButton.style.display = "inline-block";
          } else {
            resultContainer.innerText = "❌ Oops! Try Again.";
            resultContainer.style.color = "#ff4d4d";
          }
        });

        optionsContainer.appendChild(colorDiv);
      }
    }

    playAgainButton.addEventListener("click", startGame);

    window.addEventListener("load", startGame);