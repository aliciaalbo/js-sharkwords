const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {
for (const letter in word) {
  $('#word-container').append(`<div class="letter-box ${word[letter]}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  for (const letter in ALPHABET){
    $('#letter-buttons').append(`<button>${ALPHABET[letter]}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  const button = $(buttonEl);
    button.attr('disabled', true);

};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => {
  // if letter === class of div return true
  if($(`div.${letter}`)[0] !== undefined){
    return true;
  }
};

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {

      $(`div.letter-box.${letter}`).html(letter);
    
};

// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.

const handleWrongGuess = () => {

  numWrong ++; 
  $('img').attr('src', `/static/images/guess${numWrong}.png`);

  if (numWrong === 5){
    $('#play-again').show();
    $('button').attr('disabled', true);
    
 }

};

//  Reset game state. Called before restarting the game.
//
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      console.log('youre right');
      handleCorrectGuess(letter);
    } else {
      console.log('youre wrong');
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
  });
})();
