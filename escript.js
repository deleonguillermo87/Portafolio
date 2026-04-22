const btnCambiar = document.getElementById('btncambiar');
const btnRegresar = document.getElementById('btnregresar');
const cambio = document.getElementById('cambio');

const contenidoOriginal = cambio.innerHTML;

btnCambiar.addEventListener('click', function() {
  cambio.textContent = 'Soy una pernona con experiencia en el aria de la logistica e inventario';
  btnRegresar.style.display = 'inline-block';
  btnCambiar.style.display = 'none';
});

btnRegresar.addEventListener('click', function() {
  cambio.innerHTML = contenidoOriginal;
  btnRegresar.style.display = 'none';
  btnCambiar.style.display = 'inline-block';
});


const btnocultar = document.getElementById('ocultar');
const btnregre = document.getElementById('btnregre');
const miproyec = document.getElementById('mis-proyectos');

btnocultar.addEventListener('click', function(){
    miproyec.style.display = 'none';
    btnocultar.style.display = 'none';
    btnregre.style.display = 'inline-block';
});

btnregre.addEventListener('click', function(){
    miproyec.style.display = 'block';
    btnocultar.style.display = 'inline-block';
    btnregre.style.display = 'none';
});

window.addEventListener('load', function(){
    document.getElementById('bienvenidos').textContent = '¡Bienvenido a mi portafolio, Guillermo!';
})
