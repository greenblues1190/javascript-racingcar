import Controller from '../core/Controller.js';

export default class RacingCarGameController extends Controller {
  init() {
    this.model.init().then((response) => {
      this.render(response);
      this.bindEventListners();
    });
  }

  render(response) {
    this.view.render(response);
    this.view.cacheDOMElements();
  }

  bindEventListners() {
    this.view.bindSubmitCarNames(this.createCarList.bind(this));
    this.view.bindSubmitRacingCount(this.startRace.bind(this));
    this.view.bindClickRestartButton(this.restart.bind(this));
  }

  createCarList(carNameList) {
    this.model.createCarList(carNameList).then((response) => {
      this.render(response);
    });
  }

  startRace(racingCount) {
    this.model
      .startRace(racingCount, (response) => {
        this.render(response);
      })
      .then((response) => {
        this.render(response);
        this.view.celebrate();
      });
  }

  restart() {
    this.model.init().then((response) => {
      this.render(response);
    });
  }
}