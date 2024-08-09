
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}


document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    document.getElementById('contato-form').reset(); 
});
