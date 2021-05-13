// import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const elements = {
  bodyElement: document.querySelector('body'),
  buttonStartElement: document.querySelector('button[data-action="start"]'),
  buttonStopElement: document.querySelector('button[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isColorChangeStarted = false;
let backgroundColorChangerIntervalId = null;

function startColorChange() {
  if (isColorChangeStarted) {
    return;
  };
  changeState();
  backgroundColorChangerIntervalId = setInterval(
    () => {
      elements.bodyElement.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000
  );
};

function stopColorChange() {
  if (!isColorChangeStarted) {
    return;
  };
  changeState();
  clearInterval(backgroundColorChangerIntervalId);
};

function changeState() {
  if (isColorChangeStarted) {
    isColorChangeStarted = false;
    elements.buttonStartElement.disabled = false;
    elements.buttonStopElement.disabled = true;
  } else {
    isColorChangeStarted = true;
    elements.buttonStartElement.disabled = true;
    elements.buttonStopElement.disabled = false;
  };
};

elements.buttonStopElement.disabled = true;
elements.buttonStartElement.addEventListener('click', startColorChange);
elements.buttonStopElement.addEventListener('click', stopColorChange);