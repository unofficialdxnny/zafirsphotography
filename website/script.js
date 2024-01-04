document.addEventListener('DOMContentLoaded', function () {
  const cube = document.querySelector('.cube');
  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      if (this.classList.contains('home')) {
        rotateCube('front');
      } else {
        rotateCube(this.className.split(' ')[1]);
      }
    });
  });

  function rotateCube(direction) {
    switch (direction) {
      case 'top':
        cube.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        break;
      case 'right':
        cube.style.transform = 'rotateX(0deg) rotateY(90deg)';
        break;
      case 'bottom':
        cube.style.transform = 'rotateX(90deg) rotateY(0deg)';
        break;
      case 'left':
        cube.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        break;
      case 'front':
      default:
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;
    }
  }
});
