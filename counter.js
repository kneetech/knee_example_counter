const Knee = require('knee');

class Counter extends Knee {
  initialize() {
    this.value = 0;
    setInterval(() => this.inc(), 1000);
  }

  inc() {
    this.value += 1;
  }

  print() {
    console.log(this.value);
  }
}

module.exports = Counter;
