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

const backgroundColorChanger = {
  isColorChangeStarted: false,
  backgroundColorChangerIntervalId: null,

  startColorChange() {
    if (this.isColorChangeStarted) {
      return;
    };
    this.isColorChangeStarted = true;
    this.backgroundColorChangerIntervalId = setInterval(
      () => {
        elements.bodyElement.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      }, 1000
    );
  },
  stopColorChange() {
    if (!this.isColorChangeStarted) {
      return;
    };
    this.isColorChangeStarted = false;
    clearInterval(this.backgroundColorChangerIntervalId);
  }
}

elements.buttonStartElement.addEventListener('click',
  backgroundColorChanger.startColorChange.bind(backgroundColorChanger));
elements.buttonStopElement.addEventListener('click',
  backgroundColorChanger.stopColorChange.bind(backgroundColorChanger));