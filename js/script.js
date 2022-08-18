const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  inputField = document.querySelector(".input");
let correctWord;

const initGame = () => {
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
  console.log(randomObj);
};
initGame();
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
const checkWord = () => {
  let userWord = inputField.ariaValueMax.toLocaleLowerCase; //getting user value
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a coreect word.`);
  alert(` ${userWord} is correct!!`);
};
