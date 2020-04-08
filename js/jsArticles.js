"use-strict";

// Articles Switch
function onTabClick(event) {
  let activeTabs = document.querySelectorAll(' .active');

  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace(' active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

let tabSelect = document.getElementById('tab-select');
tabSelect.addEventListener('click', onTabClick);


function selectFirst() {
  const firstLink = document.getElementById('first-link');
  firstLink.click();
}

window.onLoad = selectFirst();
