'use strict';
const randomLink = 'https://dog.ceo/api/breed/';
const randomPic = '/images/random';

function getDogImage(breedType) {
  fetch(randomLink + breedType + randomPic)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.dog-picture').html(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const breedText = $('#dog-breed').val();
    const breedType = breedText.replace(/\s+/g, '-').toLowerCase();
    getDogImage(breedType);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});