/*document.addEventListener('DOMContentLoaded', () => {
    loadPage('principal', links);
    pieAnio= document.getElementById('pieAño');
    pieAnio.innerHTML = `&copy; ${new Date().getFullYear()} cdeorta`;
});*/

/*function loadPage(pageName, cb) {
    fetch(`assets/templates/${pageName}.handlebars`)
        .then(response => response.text())
        .then(source => {
            const template = Handlebars.compile(source);
            document.getElementById('content').innerHTML = template();
            console.log(cb)
            if(cb){
                cb();
            }
        });
}

function links(){
    let masinfo= document.getElementById('masinfo');
    masinfo.addEventListener('click', () => {
        loadPage('masinfo', atras);

    });
    let canciones= document.getElementById('canciones');
    canciones.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        loadPage('canciones', atras);

    });
    let devocionales= document.getElementById('devocionales');
    devocionales.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        loadPage('devocionales', atras);
        
    });
}

function atras(){
    let atras= document.getElementById('atras');
    atras.addEventListener('click', () => {
        loadPage('campania', links);
    });
}

*/
//cuenta regresiva
 //cuenta_regresiva() 
 const spancuenta= document.getElementById('cuentaregresiva');
 // Fecha actual
const ahora = new Date();

// Fecha futura (por ejemplo, Año Nuevo)
const fechaFutura = new Date('2025-04-05T18:00:00');

// Función para calcular el tiempo restante
function calcularCuentaRegresiva() {
  const ahora = new Date(); // Obtener la fecha actual
  const diferencia = fechaFutura - ahora; // Diferencia en milisegundos

  if (diferencia <= 0) {
    console.log("¡El tiempo se ha cumplido!");
    clearInterval(intervalo); // Detener el intervalo si ya pasó la fecha
    return;
  }

  // Calcular días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar el tiempo restante
  spancuenta.innerText=`Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
  console.log(`Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
}

// Llamar a la función cada segundo
const intervalo = setInterval(calcularCuentaRegresiva, 1000);

 
 
 
function cuenta_regresiva() {
	// Crear un objeto Date con la fecha y hora actual
const ahora = new Date();
const fechaboda= new Date().setDate('2025/04/05 18:00:00')
const fechaboda_anio = fechaboda.getYear();
const fechaboda_month = fechaboda.getMonth()
const fechaboda_dias = fechaboda.getDay()
const fechaboda_horas = fechaboda.getHours(); // Hora (0-23)
const fechaboda_minutos = fechaboda.getMinutes(); // Minutos (0-59)
const fechaboda_segundos = fechaboda.getSeconds(); // Segundos (0-59)


// Obtener la hora, minutos y segundos
const ahora_anio = ahora.getYear();
const ahora_month = ahora.getMonth()
const ahora_dias = ahora.getDay()
const ahora_horas = ahora.getHours(); // Hora (0-23)
const ahora_minutos = ahora.getMinutes(); // Minutos (0-59)
const ahora_segundos = ahora.getSeconds(); // Segundos (0-59)

// Formatear la hora en formato hh:mm:ss
const ahoraFormateada =  `${ahora_anio.toString()}:${ahora_month.toString()}:${ahora_dias.toString()}`;
 ahoraFormateada += `${ahora_horas.toString().padStart(2, '0')}:${ahora_minutos.toString().padStart(2, '0')}:${ahora_segundos.toString().padStart(2, '0')}`;

console.log(`La hora actual es: ${ahoraFormateada}`);

}