function calcularTime() {
    const tiempo = new Date();
    const hora = tiempo.getHours();
    const minuto = tiempo.getMinutes();
    const segundo = tiempo.getSeconds();
    const hora12 = hora > 12 ? hora - 12 : hora;
    const amPm = hora >= 12 ? "PM" : "AM";

    const relojDigitalContent = document.querySelector("#reloj-digital-content");
    const amPmElement = document.querySelector("#am-pm");

    relojDigitalContent.textContent = `${hora12}:${minuto < 10 ? "0" : ""}${minuto}`;
    amPmElement.textContent = amPm;

    const deg = 6;
    const horas = document.querySelector('.hora');
    const minutos = document.querySelector('.minuto');
    const segundos = document.querySelector('.segundo');

    let hr = 30 * hora12 + 0.5 * minuto;
    let min = 6 * minuto + 0.1 * segundo;
    let seg = 6 * segundo;

    horas.style.transform = `rotate(${hr}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
}

setInterval(calcularTime, 1000);
calcularTime();
