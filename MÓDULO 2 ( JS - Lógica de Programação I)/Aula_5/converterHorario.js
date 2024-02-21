/*
    Crie uma função `converterHorario` que aceita uma string representando um horário no formato de 12 horas (por exemplo, "11:30:45PM") e a converte para o formato de 24 horas. A função deve ser capaz de lidar com horários AM e PM corretamente, convertendo-os para um formato de 24 horas (por exemplo, "23:30:45" para o exemplo anterior).
*/


function converterHorario(x){
    halfs = x.split(":")
    let horas = parseInt(halfs[0]);
    let minutos = parseInt(halfs[1]);
    let segundos_ampm = halfs[2]
    
    if (segundos_ampm.slice(-2) === "PM" && horas !== 12) {
        horas += 12;
    } else if (segundos_ampm.slice(-2) === "AM" && horas === 12) {
        horas = 0;
    }

    // Retornando o horário no formato de 24 horas
    return horas.toString().padStart(2, '0') + ":" + minutos.toString() + ":" + segundos_ampm.slice(0, 2);

}

console.log(converterHorario("1:45:39PM"))