
// Set popup size by 2.5 / of the screen
$('body').css('width', `${screen.width/2.5}`);
'use strict';

/*GOALS SECTION FUNCTIONS*/

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("incrementWater");
    if (el){
        el.addEventListener("click", function() {
            incrementValue("water")});
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("incrementBreak");
    if (el){
        el.addEventListener("click", function() {
            incrementValue("break")});
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("decrementWater");
    if (el){
        el.addEventListener("click", function() {
            decrementValue("water")});
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("decrementBreak");
    if (el){
        el.addEventListener("click", function() {
            decrementValue("break")});
    }
  });

function incrementValue(idName){
        var value = parseInt(document.getElementById(idName).value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById(idName).value = value;
}

function decrementValue(idName){
    var value = parseInt(document.getElementById(idName).value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById(idName).value = value;
}

/* HABIT TRACKER SECTION FUNCTIONS */

document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById("incrementWater2");
  if (el){
      el.addEventListener("click", function() {
          incrementValue("waterDrank")});
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById("decrementWater2");
  if (el){
      el.addEventListener("click", function() {
          decrementValue("waterDrank")});
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById("incrementBreak2");
  if (el){
      el.addEventListener("click", function() {
          incrementValue("breaksTaken")});
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var el = document.getElementById("decrementBreak2");
  if (el){
      el.addEventListener("click", function() {
          decrementValue("breaksTaken")});
  }
});

var waterVal = 0;
var waterGoal = parseInt(document.getElementById("water").value, 10);
var waterAmount = parseInt(document.getElementById("waterDrank").value, 10);
waterVal = (waterAmount / waterGoal) * 100;

var breakVal = 0;
var breakGoal = parseInt(document.getElementById("break").value, 10);
var breakAmount = parseInt(document.getElementById("breaksTaken").value, 10);
breakVal = (breakAmount / breakGoal) * 100;

const progress = document.querySelector('.progress-done');
//progress.dataset.done = waterVal;
progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;

const progress2 = document.querySelector('.progress-done2');
//progress2.dataset.done = breakVal;
progress2.style.width = progress2.getAttribute('data-done') + '%';
progress2.style.opacity = 1;

const progress3 = document.querySelector('.progress-done3');
progress3.style.width = progress3.getAttribute('data-done') + '%';
progress3.style.opacity = 1;

const progress4 = document.querySelector('.progress-done4');
progress4.style.width = progress4.getAttribute('data-done') + '%';
progress4.style.opacity = 1;


/* TABS */

const Tabs = {
  init() {
    let promise = $.Deferred();
    this.$tabs = $('ul.nav-tabs');
    this.checkHash();
    this.bindEvents();
    this.onLoad();
    return promise;
  },

  checkHash() {
    if (window.location.hash) {
      this.toggleTab(window.location.hash);
    }
  },

  toggleTab(tab) {
    // targets
    var $paneToHide = $(tab).closest('.container').find('div.content-pane').filter('.is-active'),
      $paneToShow = $(tab),
      $tab = this.$tabs.find('a[href="' + tab + '"]');

    // toggle active tab
    $tab.closest('li').addClass('active').siblings('li').removeClass('active');

    // toggle active tab content
    $paneToHide.removeClass('is-active').addClass('is-animating is-exiting');
    $paneToShow.addClass('is-animating is-active');
  },

  showContent(tab) {

  },

  animationEnd(e) {
    $(e.target).removeClass('is-animating is-exiting');
  },

  tabClicked(e) {
    e.preventDefault();
    this.toggleTab(e.target.hash);
  },

  bindEvents() {
    // show/hide the tab content when clicking the tab button
    this.$tabs.on('click', 'a', this.tabClicked.bind(this));

    // handle animation end
    $('div.content-pane').on('transitionend webkitTransitionEnd', this.animationEnd.bind(this));
  },
  
  onLoad() {
    $(window).load(function() {
      $('div.content-pane').removeClass('is-animating is-exiting');
    });
  }
}

Tabs.init();