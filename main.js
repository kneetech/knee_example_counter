const Knee = require('knee');

class Main extends Knee {
  initialize() {
    setInterval(() => this.output(), 1000);
  }

  output() {
    console.log(this.counter.value);
  }
}

Main.defaults = {
  modules: [{
    __filename: 'counter',
    __basename: 'counter'
  }]
};

module.exports = Main;
