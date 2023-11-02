
//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


// NOT FOR PRODUCTION - this code is not accessible

function toggleAccordion(accordion) {
    const content = accordion.nextElementSibling;
    const symbol = accordion.querySelector('.toggle-symbol');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        symbol.textContent = '+';
    } else {
        content.style.display = 'block';
        symbol.textContent = '-';
    }
}

document.getElementById('open-all-link-financial').addEventListener('click', function (e) {
    e.preventDefault();
    const accordions = document.querySelectorAll('.accordion-financial'); // Change 'accordion' to 'accordion-financial'
    const openAllLink = document.getElementById('open-all-link-financial');
    if (openAllLink.textContent === 'Open all') {
        accordions.forEach((accordion) => {
            const content = accordion.nextElementSibling;
            const symbol = accordion.querySelector('.toggle-symbol');
            content.style.display = 'block';
            symbol.textContent = '-';
        });
        openAllLink.textContent = 'Close all';
    } else {
        accordions.forEach((accordion) => {
            const content = accordion.nextElementSibling;
            const symbol = accordion.querySelector('.toggle-symbol');
            content.style.display = 'none';
            symbol.textContent = '+';
        });
        openAllLink.textContent = 'Open all';
    }
});

