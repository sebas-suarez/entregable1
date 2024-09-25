import * as rs from 'readline-sync';

function calcularPuntaje(sabor:number, presentacion:number, dificultad:number):number{
    //let total:number = sabor+presentacion+dificultad;
    return sabor+presentacion+dificultad;
}

function ganador(){
    let cantidad:number=rs.questionInt('Cuantos participantes son? ');

    for(let i=1;i<=cantidad;i++){
        let sabor:number=rs.questionInt('Puntua el sabor del 1 al 5 del cuncursante '+' '+ i+' ');
        let presentacion:number=rs.questionInt('Puntua la presentacion del 1 al 5 del concursante '+' '+ i+' ');
        let dificultad:number=rs.questionInt('Puntua la dificultad de la receta del 1 al 5 del concursante '+' '+ i +' ');

        let total=calcularPuntaje(sabor,presentacion,dificultad);
        

        if(total>=totalMax){
            totalMax=total;
            ganadorDelConcurso=i;
        }

    };
    
    console.log('el maximo puntaje fue ' + totalMax+' del concursante Nro: '+ ganadorDelConcurso);
    
}


let ganadorDelConcurso:number=0;
let totalMax:number=0;

ganador();




