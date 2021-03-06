const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colorSwitch = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.inervalId = setInterval(() => {
      cnahgeColor();
    }, 1000);
  },

  stop() {
    clearInterval(this.inervalId);
    this.inervalId = null;
    this.isActive = false;
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function cnahgeColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
}

refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
