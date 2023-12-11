function showLove() {
  document.getElementById('question').innerHTML = 'Eu te amo';
  document.getElementById('yesButton').disabled = true;
  document.getElementById('noButton').disabled = true;
}

function moveNoButton() {
  const noButton = document.getElementById('noButton');

  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}
