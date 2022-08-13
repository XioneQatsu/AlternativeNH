
function randomNumber(conditions, idk, result) {
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

    document.body.removeChild(newElement);
  }
}

let xhr = new XMLHttpRequest();
xhr.open('\u0047\u0045\u0054', '\u0061\u0073\u0073\u0065\u0074\u0073\u002f\u006a\u0073\u006f\u006e\u002f\u0063\u0068\u0061\u006e\u0067\u0065\u006c\u006f\u0067\u005f\u0064\u0061\u0074\u0061\u002e\u006a\u0073\u006f\u006e', true);
xhr.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(xhr.responseText).data;
    var result = '';

    data.forEach(data => {
      result += '\u003c\u0068\u0034\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e'+ data.date +'\u003c\u002f\u0068\u0034\u003e';
      data.changelog.forEach(changelog => {
        result += '\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022>'+ changelog.text +'\u003c\u0062\u0072\u003e\u003c\u002f\u0070\u003e';
      })
    })

    document.querySelector('\u0023\u0063\u0068\u0061\u006e\u0067\u0065\u006c\u006f\u0067\u002d\u006c\u006f\u0061\u0064').innerHTML = result;
  }
}
xhr.send();
