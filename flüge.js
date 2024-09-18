document.querySelector('form').addEventListener(
  'submit',

  function (e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    const formObject = {};
    for (const pair of formData.entries()) {
      formObject[`${pair[0]}`] = `${pair[1]}`;
    }

    localStorage.setItem('formEntries', JSON.stringify(formObject));

    /*fetch(
      `https://storage01.dbe.academy/fswd/travel-api.php?start=${formObject.Abflughafen}&ziel=${formObject.Ankuftflughafen}&datum=${formObject.date}`
    )
      .then((response) => response.json())
      .then((data) => {
        for (const flight of data) {
          content = `
      <div class="flight-container">
    <div class="flight-details-container">
    <div class="flight-details">
    <div class="flight-start">
      <h2>${flight.startzeit}</d>
      <p class="airport">${flight.start.slice(-4, -1)}</p></div>
    <div class="line">
      <hr>
    </div>
  <div class="stops"><p>${flight.stops}</p><p>Stopp</p></div>
  <div class="line">
    <hr>
  </div>
    <div class="flight-stop"><h2>${
      flight.endzeit
    }</><p class="airport">${flight.ziel.slice(-4, -1)}</p>
    <p class="terminal">Terminal ${flight.terminal}</p></div>
  </div>
  <div class="duration">
   <img src="./assets/icons/clock.svg" class="icon small">
    <p>Dauer ${flight.flugdauer}</p>
  </div>
  </div>

  <div class="price-container economy">
    <div>
    <h3>Economy</h3>
    <p>ab</p>
    <p class="price">${flight.preis.economy.slice(0, -3)}</p>
    <p>EUR</p>
  </div>
    
    <img src="./assets/icons/arrow-down.svg" class="icon small"></div>
  <div class="price-container business">
    <div>
      <h3>Business</h3>
      <p>ab</p>
      <p class="price">${flight.preis.business.slice(0, -3)}</p>
      <p>EUR</p>
    </div>
    <img src="./assets/icons/arrow-down.svg" class="icon small"></div>
  </div>
      `;
          document
            .querySelector('.flights')
            .insertAdjacentHTML('afterbegin', content);
        }
      });*/
  }
);
