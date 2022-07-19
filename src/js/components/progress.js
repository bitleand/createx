// const circle = document.querySelector('.circle__el');

// const progressAnimation = () => {
//   const
//     percentageProgress = Math.floor(85),
//     radius = circle.getAttribute('r'),
//     circleLength = 2 * Math.PI * radius;

//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// };

// progressAnimation();

const circles = document.querySelectorAll('.circle__el');

const circleEach = (elements) => elements.forEach(el => {
  let radius = el.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;

  el.querySelector('.circle__el').setAttribute('stroke-dasharray', circleLength);

  if (el.dataset.percentage === 'true') {
    // percentageProgress = 50;
  } else {
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);

    el.querySelector('.circle__el').setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
})

circleEach(circles);
