let app = document.querySelector('.app');
let imgAlarm = document.querySelector('.app img');
let currentTime = document.querySelector('.current-time');
let selectHours = document.getElementById('hour');
let selectMinuates = document.getElementById('minuate');
let selectAmPm = document.getElementById('ampm');
let btn = document.getElementById('btn');
let sound = new Audio('./assets/r.mp3');




setInterval(time,1000);
createOptionTags(selectHours, selectMinuates);
let click = 0;
btn.addEventListener('click', () => {
  if (selectHours.value === 'hour' || selectMinuates.value === 'minuates' || selectAmPm.value === 'ampm') {
    alert('not valid');
  }
  else {
    if (click === 1) {
      window.location.reload();
    }
    let alarm = `${selectHours.value}${selectMinuates.value}${selectAmPm.value}`;
    selectHours.disabled = true;
    selectMinuates.disabled = true;
    selectAmPm.disabled = true;

    let checkAlram =  setInterval(() => {
      if (alarm === currentTime.dataset.time) {
        sound.play();
        sound.loop = true;
        imgAlarm.classList.add('animation');
        clearInterval(checkAlram);
      }
    },1000);

    btn.textContent = 'Clear';
    click++;
  }
})


function createOptionTags(hour, minuate) {
  for(let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.textContent = i < 10 ? `0${i}` : i;
    option.value = i < 10 ? `0${i}` : i;
    hour.appendChild(option);
  }

  for(let i = 1; i < 60; i++) {
    let option = document.createElement('option');
    option.textContent = i < 10 ? `0${i}` : i;
    option.value = i < 10 ? `0${i}` : i;
    minuate.appendChild(option);
  }
}
function time() {
  let date = new Date();
  let hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12
    hour = hour < 10 ? `0${hour}` : hour;
  }
  else {
    hour = hour < 10 ? `0${hour}` : hour;
  }
  let minuate = date.getMinutes() < 10 ? `0${date.getMinutes()}`:date.getMinutes();
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}`:date.getSeconds();
  let amPm = date.getHours() > 12 ? 'PM' : 'AM'; 
  currentTime.textContent = hour + ':' + minuate + ':' + seconds + " " + amPm;
  currentTime.dataset.time = `${hour}${minuate}${amPm}`;
}
