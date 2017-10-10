const Knee = require('knee');

class Main extends Knee {
  initialize() {
    setInterval(() => this.output(), this.frequency);
  }
}

module.exports = Main;
