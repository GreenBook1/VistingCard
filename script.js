// Selecting elements
const nameInput = document.getElementById('nameInput');
const CnameInput = document.getElementById('CnameInput');
const designationInput = document.getElementById('designationInput');
const contactInput = document.getElementById('contactInput');
const addInput = document.getElementById('addInput');
const emailInput = document.getElementById('emailInput');
const nameField = document.getElementById('name');
const CField = document.getElementById('Cname');
const designationField = document.getElementById('designation');
const addField = document.getElementById('address');
const contactField = document.getElementById('contact');
const emailField = document.getElementById('email');
const card = document.getElementById('card');

// Real-time update of card details
CInput.addEventListener('input', () => {
    CField.textContent = CInput.value || 'Your Name';
});
nameInput.addEventListener('input', () => {
    nameField.textContent = nameInput.value || 'Your Name';
});

designationInput.addEventListener('input', () => {
    designationField.textContent = designationInput.value || 'Your Designation';
});
addInput.addEventListener('input', () => {
    addField.textContent = addInput.value || 'Your Contact';
});

contactInput.addEventListener('input', () => {
    contactField.textContent = contactInput.value || 'Your Contact';
});
emailInput.addEventListener('input', () => {
    emailField.textContent = emailInput.value || 'example@gmail.com';
});

// Card rotation on mouse movement
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Download the card as an image
document.getElementById('downloadBtn').addEventListener('click', function() {
    html2canvas(document.querySelector("#card")).then(canvas => {
        let link = document.createElement('a');
        link.download = 'visiting_card.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
