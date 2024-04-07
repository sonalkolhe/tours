const leftArrow = document.querySelectorAll('.bi-arrow-left-circle');
const rightArrow = document.querySelectorAll('.bi-arrow-right-circle');
const scroller = document.querySelectorAll('.slider');

const scrollLeft = function (i, event) {
  scroller[i].scrollBy({
    left: -100,
    behavior: 'smooth'
  });
};

const scrollRight = function (i, event) {
  scroller[i].scrollBy({
    left: 100,
    behavior: 'smooth'
  });
};

leftArrow.forEach((el, i) => {
  el.addEventListener('click', scrollLeft.bind(null, i));
  el.addEventListener('mouseenter', function () {
    el.classList.remove('bi-arrow-left-circle');
    el.classList.add('bi-arrow-left-circle-fill');
  });
  el.addEventListener('mouseleave', function () {
    el.classList.add('bi-arrow-left-circle');
    el.classList.remove('bi-arrow-left-circle-fill');
  });
});
rightArrow.forEach((el, i) => {
  el.addEventListener('click', scrollRight.bind(null, i));
  el.addEventListener('mouseenter', function () {
    el.classList.remove('bi-arrow-right-circle');
    el.classList.add('bi-arrow-right-circle-fill');
  });
  el.addEventListener('mouseleave', function () {
    el.classList.add('bi-arrow-right-circle');
    el.classList.remove('bi-arrow-right-circle-fill');
  });
});


