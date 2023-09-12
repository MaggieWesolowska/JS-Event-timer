const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector(
  '.image-section'
);

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImg = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector(
  '.minutes-count'
);
const secondsCount = document.querySelector(
  '.seconds-count'
);

const saveBtn = document.querySelector('.save');
const stopBtn = document.querySelector('.stop');
const eventSpan = document.querySelector('.event');

let usersTime;

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 1000 / 60 / 60 / 24); // result is in milliseconds, divide it by 1000 and you get seconds, then divide by 60 and you get minutes, then divide by 60 and you get hours and then divide by 24 and you get the days.
  const hours = Math.floor(result / 1000 / 60 / 60) % 24; // 24 hours in a day
  const minutes = Math.floor(result / 1000 / 60) % 60; // how many minutes out of an hour is left; (60 minutes in an hour)
  const seconds = Math.floor(result / 1000) % 60; // using modulo to get the time left: how many seconds out of a minute is left. Maximum value we want there is 60 (for 60 seconds);

  daysCount.textContent = days;
  hoursCount.textContent = hours;
  minutesCount.textContent = minutes;
  secondsCount.textContent = seconds;
};

const appUpdate = () => {
  eventSpan.textContent = eventName.value;
  usersTime = new Date(
    `${eventMonth.value} ${eventDay.value} $${eventYear.value}`
  );
  imageSection.style.backgroundImage = `url('${eventImg.value}')`;
  setTime();
};

const stopInterval = () => {
  clearInterval(interval);
};

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('active');
});

saveBtn.addEventListener('click', appUpdate);

appUpdate();
const interval = setInterval(setTime, 1000);

stopBtn.addEventListener('click', stopInterval);
