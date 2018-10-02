var card = document.querySelector('custom-bz-card');
card.setAttribute('card-type', 'card4');
card.setAttribute('header-title', 'Title card 4');
card.setAttribute('content-title', 'Bizagi');
card.setAttribute('content-subtitle', 'Bizagi LATAM is a company in Bogotá D.C.');
card.setAttribute('first-button-text', 'Cancel'); 
card.setAttribute('second-button-text', 'Accept');
card.setAttribute('url-content-image', 'http://imparcialoaxaca.mx/wp-content/uploads/2018/02/masterhakcs_google_recibe_multa_union_europea.jpg');
card.setAttribute('header-icon', 'icon-gear');


card.addEventListener('cancel', (data) => {
 console.log('Click cancel', data);
});

card.addEventListener('accept', (data) => {
 console.log('Click accept', data);
});