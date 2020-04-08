"use-strict";

// News Api

const apiUrl =  'http://newsapi.org/v2/everything?' +
              'q=Cars-innovations&' +
              'from=2020-03-17&' + //Disclaimer: Can only search a month old articles with the free plan.
              'sortBy=publishedAt&' +
              'apiKey=ca929281e2004d73b5364866490189f9';

//http://newsapi.org/v2/everything?q=Cars&from=2020-03-17&sortBy=popularity&apiKey=ca929281e2004d73b5364866490189f9

let req = new Request(apiUrl);

  fetch(req)
  .then(response => {
    return response.json();
  })
  .then(data => {

      const news = data.articles;
      const newsArticles = news.filter(data => data.title.length > 0);

      let results;

      newsArticles.forEach((item) => {
        results += `
        <li class="news-list">
          <a href="${item.url}">
            <div class="news-image">
              <img src="${item.urlToImage}" alt="Article Image">
            </div>

            <div class="news-content">
              <div class="news-preview">
                <h2 class="news-title"> ${item.title}</h2>
                <p class="news-description"> ${item.description}</p>
              </div>

              <div class="news-source">
                <span class="news-author"> ${item.author}</span>
                <span class="news-time"> ${item.publishedAt}</span>
              </div>
            </div>
          <a/>
        </li>`
      })
    document.querySelector('.post').innerHTML = results;
  })



//Show newsletter modal
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const modalClose = document.querySelector('.modal-close');
const modalSignup = document.querySelector('.modal-signup');

function modalToggle() {
  modal.classList.toggle('show-modal');
}

modalBtn.addEventListener('click', modalToggle);
modalClose.addEventListener('click', modalToggle);
modalSignup.addEventListener('click', ()=> {
  modalToggle();
  document.querySelector('#modal-input').value = '';

});



//EV caption reveal
let checkOne = document.querySelector('#ev1');
let checkTwo = document.querySelector('#ev2');
let checkThree = document.querySelector('#ev3');
let checkFour = document.querySelector('#ev4');
let checkFive = document.querySelector('#ev5');
let checkSix = document.querySelector('#ev6');

checkOne.addEventListener('change', () => {
  if (checkOne.checked) {
    document.querySelector('#ev1-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev1-caption').style.display = 'none';
  }
})

checkTwo.addEventListener('change', () => {
  if (checkTwo.checked) {
    document.querySelector('#ev2-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev2-caption').style.display = 'none';
  }
})

checkThree.addEventListener('change', () => {
  if (checkThree.checked) {
    document.querySelector('#ev3-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev3-caption').style.display = 'none';
  }
})

checkFour.addEventListener('change', () => {
  if (checkFour.checked) {
    document.querySelector('#ev4-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev4-caption').style.display = 'none';
  }
})

checkFive.addEventListener('change', () => {
  if (checkFive.checked) {
    document.querySelector('#ev5-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev5-caption').style.display = 'none';
  }
})

checkSix.addEventListener('change', () => {
  if (checkSix.checked) {
    document.querySelector('#ev6-caption').style.display = 'inline-block';
  } else {
    document.querySelector('#ev6-caption').style.display = 'none';
  }
})
