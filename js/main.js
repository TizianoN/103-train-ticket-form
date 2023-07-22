// # ON LOAD

// * raccolgo tutti gli elementi di interesse e li metto nelle costanti

// FORM ELEMENTS
const alertErrorElement = document.getElementById('alert-error');
const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const kmsInput = document.getElementById('kms-input');
const ageInput = document.getElementById('age-input');
const generateTicketButton = document.getElementById('generate-ticket-button');

console.log(alertErrorElement);

// TICKET ELEMENTS
const ticketSection = document.getElementById('ticket-section');
const ticketNameElement = document.getElementById('ticket-name');
const ticketPnrElement = document.getElementById('ticket-pnr');
const ticketCoachElement = document.getElementById('ticket-coach');
const tickeStationElement = document.getElementById('ticket-station');
const ticketPriceElement = document.getElementById('ticket-price');

// * aggiungo l'event listener al click del bottone
generateTicketButton.addEventListener('click', function () {
  // # ON "generate-ticket-button" CLICK

  // * resetto la situazione iniziale (nascondendo ticket e alert)
  alertErrorElement.classList.add('d-none');
  ticketSection.classList.add('d-none');

  // * leggo il valore degli input
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;
  const kmsValue = parseFloat(kmsInput.value);
  const ageValue = ageInput.value;

  // * valido gli input
  if (isNaN(kmsValue) || !ageValue || !nameValue || !surnameValue) {
    alertErrorElement.classList.remove('d-none');
    return;
  }

  // * calcolo del prezzo del biglietto
  const ticketFare = 0.21;
  let ticketPrice = ticketFare * kmsValue;

  // * verifico se devo applicare lo sconto
  if (ageValue == 'kid') {
    // * applico lo sconto per minorenni
    ticketPrice *= 0.8;
  } else if (ageValue == 'over65') {
    // * applico lo sconto per over65
    ticketPrice *= 0.6;
  }

  // * preparo i valori del biglietto
  const ticketName = nameValue + ' ' + surnameValue;
  const ticketStation = 'Roma Termini';

  // TODO genero randomicamente codice e numero carrozza
  const ticketPnr = '54876';
  const ticketCoach = '12';

  // * stampo i valori biglietto
  ticketNameElement.innerHTML = ticketName;
  ticketPnrElement.innerHTML = ticketPnr;
  ticketCoachElement.innerHTML = ticketCoach;
  tickeStationElement.innerHTML = ticketStation;
  ticketPriceElement.innerHTML = '€ ' + ticketPrice.toFixed(2);

  // * svuoto gli input
  nameInput.value = '';
  surnameInput.value = '';
  kmsInput.value = '';
  ageInput.value = '';

  // * mostro la sezione del biglietto
  ticketSection.classList.remove('d-none');
});
