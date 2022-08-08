
function randomNumber(conditions, result) {
  conditions.onclick = () => {
    var value = '', random, iteration = 0;

    while (++iteration <= 6) {
      random = Math.random() * 9 | 0;
      value += iteration == 1 ? random % 6 : random;
    }

    result.value = value;
  }
}

function openLink(conditions, link, code) {
  conditions.onclick = () => {
    const newElement = document.createElement("a");
    document.body.appendChild(newElement);

    newElement.target = open(
      link +
      code.value,
      "_blank"
    );

    document.execCommand("click");
    document.body.removeChild(newElement);
  }
}
