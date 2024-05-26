const nuclearSrc = `${homeSrc}AlternativeNH/`, readUrl = 'https://nhentai.net/g/', downloadUrl = 'https://cin.wiki/g/';

fetch(`${nuclearSrc}assets/javascript/data.json`)
.then(file => file.json())
.then(data => {
  let testers = data.testers, changelogs = data.changelogs,
  content = `
  <div class="card-column-1">
    <div class="card radius-all box-shadow">
      <div class="card-text radius-tlr">
        <h3 class="font-color">Where will this code go?</h3>
      </div>
      <div class="card-text radius-tlr">
        <button class="card-text-btn card-text-spacing" type="button" id="generate">Generate</button>
        <input class="card-text-npt" type="text" pattern="[0-9]*" placeholder="Paste or type number here!" id="code" maxlength="6">
      </div>
      <div class="card-text radius-tlr">
        <button class="card-text-btn card-text-spacing" type="button" id="read">Read</button>
        <button class="card-text-btn" type="button" id="download">Download</button>
      </div>
    </div>
  </div>
  <div class="card-column-2">
    <div class="card radius-all box-shadow">
      <div class="card-text radius-tlr">
        <h4 class="font-color">Changelogs:</h4>
      </div>
      <div class="card-text-block-scroll-h1 radius-tlr">`;
        changelogs.forEach(data => {
          content += `<h5 class="font-color">${data.date}</h5>`;
          data.changelog.forEach(data => { content += `<p class="font-color">${data.text}<br></p>`; });
          content += '<br>';
        });
        content += `
      </div>
    </div>
  </div>
  <div class="card-column-2">
    <div class="card radius-all box-shadow">
      <div class="card-text radius-tlr">
        <h4 class="font-color">Tester this website! thank you :)</h4>
      </div>
      <div class="card-text-block-scroll-h1 radius-tlr">`;
        for (let i = 0; i < testers.length; i++) content += `<p class="font-color">${i+1}. ${testers[i].name}</p>`;
        document.querySelector('#content-load').innerHTML += content + `
      </div>
    </div>
  </div>`;

  document.querySelector('#generate').onclick = () => {
    let value = '', random, iteration = 0, amount = 6;
    while (++iteration <= amount) {
      random = Math.random() * 9 | 0;
      value += iteration == 1 ? random % 5 : random;
      if (iteration < amount && value == 0) value = '';
    }
    code.value = value;
  }

  openLink(read, readUrl, code);
  openLink(download, downloadUrl, code);
})
.catch();

function openLink(id, link, code) {
  id.onclick = () => {
    const newElement = document.createElement('a');
    document.body.appendChild(newElement);
    newElement.target = open(link + code.value, '_blank');
    document.body.removeChild(newElement);
  }
}