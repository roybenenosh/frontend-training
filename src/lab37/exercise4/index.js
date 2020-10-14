const cards = [
  { value: 'A', visible: false, found: false },
  { value: 'A', visible: false, found: false },
  { value: 'B', visible: false, found: false },
  { value: 'B', visible: false, found: false },
  { value: 'C', visible: false, found: false },
  { value: 'C', visible: false, found: false }
];

let visibleCard = null;

function play(cards, index) {
  handleFirstTry(cards, index);
  handleSecondTry(cards, index);
  console.log(cards);
}

function handleFirstTry(cards, index) {
  // check if there is already a visible cards
  if (visibleCard) return;

  visibleCard = { ...cards[index], index: index };
  cards[index].visible = true;
}

function handleSecondTry(cards, index) {
  // check if there is already a visible cards
  if (!visibleCard) return;

  if (visibleCard && visibleCard.value === cards[index].value) {
    cards[index].found = true;
    cards[visibleCard.index].found = true;
  }

  visibleCar = null;

  for (let i = 0; i < cards.length; i++) {
    cards[i].visible = false;
  }
}

play(cards, 0);
play(cards, 1);
