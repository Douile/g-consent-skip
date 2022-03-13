"use-strict";

function clickButtons() {
  console.log('Attempting to click buttons');
  const clickWhenDone = [];
  for (const e of document.querySelectorAll('button')) {
    const text = e.innerText.toLowerCase();
    if (text.includes('customize')) {
      console.log('Clicking', e);
      e.click();
      return;
    }

    if (text.includes('off')) {
      console.log('Clicking', e);
      e.click();
    }

    if (text.includes('confirm')) {
      clickWhenDone.push(e);
    }
  }
  clickWhenDone.forEach(e => {
    console.log('Clicking', e);
    e.click();
  });
}

clickButtons();
