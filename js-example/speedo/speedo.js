const wrapper = document.querySelectorAll('.speedo');

const barCount = 50;
const percent1 = 50 * 90/100;

for (let index = 0; index < barCount; index++) {
    const className = index < percent1 ? 'selected1' : '';
    wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[0].innerHTML += `<p class="selected percent-text text1">90%</p>`
