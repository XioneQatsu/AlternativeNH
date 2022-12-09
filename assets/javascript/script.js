
let httpReq = new XMLHttpRequest();
httpReq.open('\u0047\u0045\u0054', '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0078\u0069\u006f\u006e\u0065\u0071\u0061\u0074\u0073\u0075\u002e\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0069\u006f\u002f\u0041\u006c\u0074\u0065\u0072\u006e\u0061\u0074\u0069\u0076\u0065\u004e\u0048\u002f\u0061\u0073\u0073\u0065\u0074\u0073\u002f\u006a\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074\u002f\u0064\u0061\u0074\u0061\u002e\u006a\u0073\u006f\u006e', true);
httpReq.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(httpReq.responseText), issues = data.issues, testers = data.testers, changelogs = data.changelogs;
    let content = '\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u006c\u0075\u006d\u006e\u002d\u0031\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0061\u006c\u006c\u0020\u0062\u006f\u0078\u002d\u0073\u0068\u0061\u0064\u006f\u0077\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0068\u0033\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0057\u0068\u0065\u0072\u0065\u0020\u0077\u0069\u006c\u006c\u0020\u0074\u0068\u0069\u0073\u0020\u0063\u006f\u0064\u0065\u0020\u0067\u006f\u003f\u003c\u002f\u0068\u0033\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0062\u0075\u0074\u0074\u006f\u006e\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u0074\u006e\u0020\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0073\u0070\u0061\u0063\u0069\u006e\u0067\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0062\u0075\u0074\u0074\u006f\u006e\u0022\u0020\u0069\u0064\u003d\u0022\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0022\u003e\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u003c\u002f\u0062\u0075\u0074\u0074\u006f\u006e\u003e\u003c\u0069\u006e\u0070\u0075\u0074\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u006e\u0070\u0074\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0074\u0065\u0078\u0074\u0022\u0020\u0069\u0064\u003d\u0022\u0063\u006f\u0064\u0065\u0022\u0020\u006d\u0061\u0078\u006c\u0065\u006e\u0067\u0074\u0068\u003d\u0022\u0036\u0022\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0062\u0075\u0074\u0074\u006f\u006e\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u0074\u006e\u0020\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0073\u0070\u0061\u0063\u0069\u006e\u0067\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0062\u0075\u0074\u0074\u006f\u006e\u0022\u0020\u0069\u0064\u003d\u0022\u0072\u0065\u0061\u0064\u0022\u003e\u0052\u0065\u0061\u0064\u003c\u002f\u0062\u0075\u0074\u0074\u006f\u006e\u003e\u003c\u0062\u0075\u0074\u0074\u006f\u006e\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u0074\u006e\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0062\u0075\u0074\u0074\u006f\u006e\u0022\u0020\u0069\u0064\u003d\u0022\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0022\u003e\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u003c\u002f\u0062\u0075\u0074\u0074\u006f\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u006c\u0075\u006d\u006e\u002d\u0031\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0061\u006c\u006c\u0020\u0062\u006f\u0078\u002d\u0073\u0068\u0061\u0064\u006f\u0077\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0068\u0034\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0049\u0073\u0073\u0075\u0065\u0073\u0021\u003c\u002f\u0068\u0034\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u006f\u0063\u006b\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e';

    issues.forEach(data => {
      content += '\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u002d\u0020'+ data.text +'\u003c\u002f\u0070\u003e';
    });

    content += '\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0049\u0066\u0020\u0079\u006f\u0075\u0020\u0066\u006f\u0075\u006e\u0064\u0020\u0069\u0073\u0073\u0075\u0065\u0020\u0070\u006c\u0065\u0061\u0073\u0065\u0020\u003c\u0061\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u0020\u0068\u0072\u0065\u0066\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0067\u0069\u0074\u0068\u0075\u0062\u002e\u0063\u006f\u006d\u002f\u0058\u0069\u006f\u006e\u0065\u0051\u0061\u0074\u0073\u0075\u002f\u0041\u006c\u0074\u0065\u0072\u006e\u0061\u0074\u0069\u0076\u0065\u004e\u0048\u002f\u0069\u0073\u0073\u0075\u0065\u0073\u0022\u003e\u0072\u0065\u0070\u006f\u0072\u0074\u0020\u0069\u006e\u0020\u0068\u0065\u0072\u0065\u003c\u002f\u0061\u003e\u0021\u003c\u002f\u0070\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u006c\u0075\u006d\u006e\u002d\u0032\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0061\u006c\u006c\u0020\u0062\u006f\u0078\u002d\u0073\u0068\u0061\u0064\u006f\u0077\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0068\u0034\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0054\u0065\u0073\u0074\u0065\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0077\u0065\u0062\u0073\u0069\u0074\u0065\u0021\u0020\u0074\u0068\u0061\u006e\u006b\u0020\u0079\u006f\u0075\u0020\u003a\u0029\u003c\u002f\u0068\u0034\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u006f\u0063\u006b\u002d\u0073\u0063\u0072\u006f\u006c\u006c\u002d\u0068\u0032\u0030\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e';

    testers.forEach(data => {
      content += '\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0026\u0023\u0078\u0032\u0037\u0041\u0031\u003b\u0020'+ data.name +'\u003c\u002f\u0070\u003e';
    });

    content += '\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u006c\u0075\u006d\u006e\u002d\u0032\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0061\u006c\u006c\u0020\u0062\u006f\u0078\u002d\u0073\u0068\u0061\u0064\u006f\u0077\u0022\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e\u003c\u0068\u0034\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e\u0043\u0068\u0061\u006e\u0067\u0065\u006c\u006f\u0067\u0073\u003a\u003c\u002f\u0068\u0034\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0063\u0061\u0072\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u006f\u0063\u006b\u002d\u0073\u0063\u0072\u006f\u006c\u006c\u002d\u0068\u0032\u0030\u0020\u0072\u0061\u0064\u0069\u0075\u0073\u002d\u0074\u006c\u0072\u0022\u003e'

    changelogs.forEach(data => {
      content += '\u003c\u0068\u0035\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e'+ data.date +'\u003c\u002f\u0068\u0035\u003e';

      data.changelog.forEach(data => {
        content += '\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0066\u006f\u006e\u0074\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u003e'+ data.text +'\u003c\u0062\u0072\u003e\u003c\u002f\u0070\u003e';
      });
    });

    document.querySelector('\u0023\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u006c\u006f\u0061\u0064').innerHTML += content + '\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0064\u0069\u0076\u003e';
    document.querySelector('\u0023\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065').onclick = () => {
      let value = '', random, iteration = 0, amount = 6;

      while (++iteration <= amount) {
        random = Math.random() * 9 | 0;
        value += iteration == 1 ? random % 6 : random;
        if (iteration < amount && value == 0) value = '';
      }

      code.value = value;
    }

    openLink(read, '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006e\u0068\u0065\u006e\u0074\u0061\u0069\u002e\u006e\u0065\u0074\u002f\u0067\u002f', code);
    openLink(download, '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0063\u0069\u006e\u002e\u0067\u0075\u0072\u0075\u002f\u0067\u002f', code);
  }
}
httpReq.send();

function openLink(id, link, code) {
  id.onclick = () => {
    const newElement = document.createElement('\u0061');
    document.body.appendChild(newElement);
    newElement.target = open(link + code.value, '\u005f\u0062\u006c\u0061\u006e\u006b');
    document.body.removeChild(newElement);
  }
}
