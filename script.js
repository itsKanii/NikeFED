// Interactie voor sectie 4 (Categorieën)
const categorySections = document.querySelectorAll('main > section:nth-of-type(4) > ul > li');

// Alleen toepassen bij schermbreedte kleiner dan 600px
if (window.innerWidth < 600) {
  categorySections.forEach(section => {
    const heading = section.querySelector('h3');
    heading.setAttribute('tabindex', '0'); // voor keyboardtoegang

    heading.addEventListener('click', () => {
      const isOpen = section.hasAttribute('open');
      categorySections.forEach(s => s.removeAttribute('open'));
      if (!isOpen) section.setAttribute('open', '');
    });
  });
}

// Interactie voor footer secties
const footerSections = document.querySelectorAll('footer nav > ul > li');

footerSections.forEach(section => {
  const heading = section.querySelector('h3');
  heading.addEventListener('click', () => {
    const isOpen = section.hasAttribute('open');
    footerSections.forEach(s => s.removeAttribute('open')); // alles sluiten
    if (!isOpen) section.setAttribute('open', ''); // huidige openen
  });
});

