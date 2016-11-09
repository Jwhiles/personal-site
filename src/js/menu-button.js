var clicked = true;

function openMenu () {
  console.log();

  if (!clicked) {
    document.getElementById('nav-list').className = 'nav-list clicked';
    clicked = true;
  } else {
    document.getElementById('nav-list').className = 'nav-list';
    clicked = false;
  }
}

document.getElementById('icon').addEventListener('click', openMenu);

window.onload = function () {
  openMenu();
};
