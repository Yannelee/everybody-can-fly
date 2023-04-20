let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("paquetes__card");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length-1}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style = "display: block"; 
}

let form = document.getElementById('contacto')
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let nombre = document.getElementById('nombre').value
  let email = document.getElementById('email').value
  alert(`${nombre} hemos recibido tu comentario, nos pondremos en contacto contigo al correo ${email} que acabas de registrar.`)
})

let agenda = ()=>{
  alert('Gracias por agendar con nosotros')
}

document.addEventListener('click', (e)=>{
  let click = e.target
  if(click.nodeName == 'BUTTON'){
    let clickDestinos = click.parentElement.childNodes[1].childNodes[3].innerHTML
    let clickPaquetes = click.parentElement.childNodes[1].childNodes[1].innerHTML
    if(clickDestinos){
      alert(`Muchas gracias por agendar tu viaje a: ${clickDestinos}`)
    } else if (clickPaquetes){
      alert(`Muchas gracias por agendar tu paquete de viaje: \n${clickPaquetes}`)
    }
  }
})

