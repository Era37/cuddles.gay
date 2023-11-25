const pause = 80;
const longPause = 200;

function $(name) {
  return document.getElementById(name);
}

// (HTMLElement) -> void
async function removeLetters(el) {
  for (let i = el.innerHTML.length; i >= -1; i--) {
    await sleep(pause);
    el.innerHTML = el.innerHTML.slice(0, i);
  }
}

// (string, string) -> string
function addLetter(str, letter) {
  return str + letter;
}

// async (number) -> void
async function sleep(timeout) {
  await new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function loadPhrases() {
  const phrases = ["Developer", "Sim Racer", "F1 Fan"];
  const grow = $("grow");
  for (const phrase of phrases) {
    await sleep(pause);
    for (const letter of phrase) {
      grow.innerHTML += letter;
      await sleep(pause);
    }
    await sleep(longPause);
    await removeLetters(grow);
    phrases.push(phrase);
  }
}

function expandBox(ev) {
  function unhide() {
    const hiddenContent = $("hidden-content");
    hiddenContent.style.opacity = boxRetracted ? "100%" : "0%";
  }
  const box = $("box");
  const boxRetracted = box.offsetHeight == 320;
  if (boxRetracted) {
    box.style.height = "29rem";
    setTimeout(unhide, 400);
  } else {
    unhide();
    setTimeout(() => (box.style.height = "20rem"), 400);
  }
}

window.addEventListener("load", async () => {
  const expand = $("expand");
  expand.addEventListener("click", expandBox);
  await loadPhrases();
});
