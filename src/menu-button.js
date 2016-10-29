var clicked = false;

function openMenu() {
  console.log('hi')

  if(!clicked) {
    document.getElementById('nav-list').className = 'nav-list clicked';
    clicked = true;
  } else {
    document.getElementById('nav-list').className = 'nav-list';
    clicked = false;
  }
}

document.getElementById('icon').addEventListener('click', openMenu);
