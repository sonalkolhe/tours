const nav = document.querySelector('nav');
const navLinks = [...document.querySelectorAll('nav li a')];
const signInEl = document.querySelector('.signIn');
const signInBtnEl = document.querySelector('.sign-in-btn');
const closeSigninBtn = document.querySelector('.close-signin');
const allSlider = document.querySelectorAll('.slider');
const allImages = document.querySelectorAll('.slider img');

const isReload = performance.navigation.type;

// toggle menu
document.getElementById("menuToggle")
  .addEventListener("click", function () {
    document.querySelector("ul").classList.toggle("hidden");
  });

// navigation bar hover animation
nav.addEventListener('mouseover', function (e) {
  const link = navLinks.filter(el => el === e.target)[0];
  if (!link) return;
  navLinks.forEach(link => link.classList.add('text-gray-400'));
  link?.classList.remove('text-gray-400');
});

nav.addEventListener('mouseleave', function (e) {
  navLinks.forEach(link => link.classList.remove('text-gray-400'));
});

const toggleForm = function (e) {
  e.preventDefault();
  document.querySelector('.blur').classList.toggle('hidden');
  document.querySelector('.blur').classList.toggle('bg-gray-500');
  signInEl.classList.toggle('hidden');
};

const removeForm = function (e) {
  if (e.type === 'keydown' && e.code !== 'Escape') return;
  document.querySelector('.blur').classList.remove('hidden');
  document.querySelector('.blur').classList.remove('bg-gray-500');
  signInEl.classList.add('hidden');
};

signInBtnEl.addEventListener('click', toggleForm);
window.addEventListener('keydown', removeForm);
closeSigninBtn.addEventListener('click', removeForm);

// load image on slide
const loadImg = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    [...entry.target.querySelectorAll('img')].forEach(img => {
      if (img.dataset?.src)
        img.src = img.dataset.src;
    });
    slideObserver.unobserve(entry.target);
    slideObserver1.unobserve(entry.target);
  }
};
const slideObserver = new IntersectionObserver(loadImg, { threshold: 0, root: null, rootMargin: '200px' });

const slideObserver1 = new IntersectionObserver(loadImg, { threshold: 0.5, root: null });

allSlider.forEach(slider => {
  slideObserver.observe(slider);
  slideObserver1.observe(slider);
});
