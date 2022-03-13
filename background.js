"use strict";

if (!('browser' in globalThis)) globalThis.browser = chrome;

browser.webRequest.onBeforeRequest.addListener(function(details) {
  const url = new URL(details.url);
  const continueEncoded = url.searchParams.get('continue');
  if (!continueEncoded) return void console.warn('Continue not found');
  const continueUrl = atob(continueEncoded.replace(/_/g, '/').replace(/-/g, '+'));
  console.log('Redirecting to', continueUrl);
  return { redirectUrl: continueUrl };
}, { urls: ['*://googleads.g.doubleclick.net/ads/preferences/cu/optout*'], types: ['main_frame', 'sub_frame'] }, ['blocking']);
