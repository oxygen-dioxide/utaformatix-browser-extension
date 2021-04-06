/* globals Parser, browser */
'use strict';

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create(
    {
      url: chrome.extension.getURL('data/options/index.html'),
    },
    (new_tab) => {
      // Tab opened.
    }
  );
});