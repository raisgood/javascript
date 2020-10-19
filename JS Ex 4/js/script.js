var innerMostElement = document.getElementByClassName('innermost')[0];

innerMostElement.onclick = handleClick;

function handleClick (event) {
  console.log(event.target.className);
}