import { DOM_STRING, DELIMETER } from './constants.js';

const TEMPLATE = {
  RENDER_RACING_RESULT(carList) {
    return `
      <ul id="${DOM_STRING.RESULT_LIST}">
        ${carList
          .map(
            (car) => `
            <li class="${DOM_STRING.RACING_CAR}">
              <p class="${DOM_STRING.CAR_NAME}">${car.name}</p>
              <ul class="${DOM_STRING.PROGRESS_LIST}">
                ${`<li class="${DOM_STRING.PROGRESS}">⬇️️</li>`.repeat(
                  car.distance
                )}
              </ul>
            </li>
            `
          )
          .join('')}
    </ul>
  `;
  },
  RENDER_RESULT(winners) {
    return winners.length > 0
      ? `
    <h6 id="${DOM_STRING.RESULT_MESSAGE}">🏆 최종 우승자: <span id="${
          DOM_STRING.WINNERS
        }">${winners.join(`${DELIMETER} `)}</span> 🏆</h6>
    <button id="${DOM_STRING.RESTART_BUTTON}">다시 시작하기</button>
    `
      : '';
  },
};

export default TEMPLATE;