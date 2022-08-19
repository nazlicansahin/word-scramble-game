const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input");
let correctWord, timer;
words = [
  {
    word: "addition",
    hint: "The process of adding numbers",
  },
  {
    word: "meeting",
    hint: "Event in which people come together",
  },
  {
    word: "number",
    hint: "Math symbol used for counting",
  },
  {
    word: "exchange",
    hint: "The act of trading",
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting",
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant",
  },
  {
    word: "position",
    hint: "Location of someone or something",
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird",
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation",
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth",
  },
  {
    word: "expansion",
    hint: "The process of increase or grow",
  },
  {
    word: "country",
    hint: "A politically identified region",
  },
  {
    word: "group",
    hint: "A number of objects or persons",
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour",
  },
  {
    word: "store",
    hint: "Large shop where goods are traded",
  },
  {
    word: "field",
    hint: "Area of land for farming activities",
  },
  {
    word: "friend",
    hint: "Person other than a family member",
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items",
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin",
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge",
  },
  {
    word: "statement",
    hint: "A declaration of something",
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute",
  },
  {
    word: "library",
    hint: "Place containing collection of books",
  },
];
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};
const initGame = () => {
  initTimer(30); // callling initTimer function with passing 30 as maxTime value
  let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from words
  let wordArray = randomObj.word.split(""); //splitting each letter of random wprds
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //getting random number
    //shufling and swiping wordArray letters randomly
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  correctWord = randomObj.word.toLocaleLowerCase(); //passing random word to correct word
  wordText.innerText = wordArray.join(""); //passing shuffled word as word text
  hintText.innerText = randomObj.hint; // passing random object
  inputField.setAttribute("maxlength", correctWord.length); //araştır //setting input maxlength attr value to word length
  inputField.value = "";
  console.log(randomObj);
};
initGame();
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  //getting user value
  if (!userWord) return alert("Please enter a word for check");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a coreect word.`);
  alert(` ${userWord.toUpperCase()} is correct!!`);
  initGame();
};
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
