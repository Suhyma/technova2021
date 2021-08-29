
// Set popup size by 2.5 / of the screen
$('body').css('width', `${screen.width/2.5}`);
'use strict';

const progress = document.querySelector('.progress-done');
const progress2 = document.querySelector('.progress-done2');
const progress3 = document.querySelector('.progress-done3');
const progress4 = document.querySelector('.progress-done4');

setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = progress.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
  progress2.style.opacity = 1;
  progress2.style.width = progress2.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
  progress3.style.opacity = 1;
  progress3.style.width = progress3.getAttribute('data-done') + '%';
}, 500)

setTimeout(() => {
  progress4.style.opacity = 1;
  progress4.style.width = progress4.getAttribute('data-done') + '%';
}, 500)


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