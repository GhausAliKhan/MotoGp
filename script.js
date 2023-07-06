const menuBtn = document.querySelector('.menuOpen');
const mobileList = document.querySelector('.mobileList');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  if (mobileList.style.display === 'block') {
    mobileList.style.display = 'none';
    nav.removeAttribute('id');
    menuBtn.src = './Images/menu.png';
  } else {
    mobileList.style.display = 'block';
    nav.id = 'mobileNav';
    menuBtn.src = './Images/close.png';
  }
});

const menus = document.querySelectorAll('.mobileList a');
menus.forEach((menu) => {
  menu.addEventListener('click', () => {
    mobileList.style.display = 'none';
    nav.removeAttribute('id');
    menuBtn.src = './Images/menu.png';
  });
});

const topRiders = [
  {
    name: 'Francesco Bagnaia',
    title: 'Ducati Lenovo Team',
    photo: './Images/Francesco_Bagnaia_Rider.png',
    info: '15 MotoGP™ <br/> 8 Moto2™ and 2 Moto3™ Victories',
  },
  {
    name: 'Johan Zarco',
    title: 'Prima Pramac Racing',
    photo: './Images/Johann_Zarco_Rider.png',
    info: '0 MotoGP™ <br/> 15 Moto2™ and 1 125cc Victories',
  },
  {
    name: 'Luca Marini',
    title: 'Mooney VR46 Racing Team',
    photo: './Images/Luca_Marini_Rider.png',
    info: '0 MotoGP™ <br/> 6 Moto2™ and 0 Moto3™ Victories',
  },
  {
    name: 'Maverick Vinales',
    title: 'Aprilla Racing',
    photo: './Images/Maverick_Vinales_Rider.png',
    info: '9 MotoGP™ <br/> 4 Moto2™ and 8 Moto3™ Victories',
  },
  {
    name: 'Fabio Quartararo',
    title: 'Monster Energy Yamaha MotoGP',
    photo: './Images/Fabio_Quartararo_Rider.png',
    info: '11 MotoGP™ <br/> 1 Moto2™ and 0 Moto3™ Victories',
  },
  {
    name: 'Franco Morbidelli',
    title: 'Monster Energy Yamaha ',
    photo: './Images/Franco_Morbidelli_Rider.png',
    info: '3 MotoGP™ <br/> 8 Moto2™ and 0 Moto3™ Victories',
  },
];

const riderContainer = document.querySelector('.riderContainer');
function generateRiders() {
  topRiders.forEach((rider) => {
    const riders = document.createElement('div');
    riders.className = 'riders';
    riders.innerHTML = `
        <img src="${rider.photo}" alt="${rider.name}" class="riderImg">
        <div class="riderDetail">
            <h3 class="riderName">${rider.name}</h3>
            <h5 class="riderTitle">${rider.title}</h5>
            <i class="line"></i>
            <p class="riderDescription">${rider.info}</p>
        </div>
        `;
    riderContainer.appendChild(riders);
  });
}

window.onload = () => {
  generateRiders();
};
