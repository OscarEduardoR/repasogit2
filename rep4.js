
// //Funcion Expresada
// let sumar = function(numeroA, numeroB){
//     return numeroA+numeroB;
// }
// console.log(sumar(10,5));


// //Funcion Declarada
// function restar (numeroC, numeroD){
//     return numeroC-numeroD;
// }

// console.log (restar(10,3));

// //Scope Local
// function hola (){
//     let saludo = 'hola, ¿que tal?';
//     return saludo;
// }
// console.log (hola());


// //Scope Global
// let elMejorLenguaje = 'Java Script, es el mejor';
// function estoyAprendiendo(){
//     return elMejorLenguaje;
// }
// console.log (estoyAprendiendo());


// //Otro ejemplo de Scope
// let mensaje ='Hola';

// function saludar(){
//     let mensaje = 'adios';
//     return mensaje;
// }

// console.log(mensaje); //Scope Global
// console.log (saludar()); //Scope Local

// //Condicionales if (){} else
 
// //ej.1
// let clima = 'Soleado';
// let dia = 'Domingo';

// if (clima === 'Soleado'&& dia == 'Domingo'){
//     console.log ('Es un lindo día para pasear');

// }else if (clima === 'Soleado'&& dia == 'Lunes'){
//     console.log ('Hoy trabajas, mejor sal más tarde');

// }else{

//     console.log ('No salgas, mejor practica JavaScript')}


// //ej.2  (este ejmplo lo tengo en mi libreta en la pag 16 un poco diferente)
// let edad = 13;

// if (edad < 15){
//     console.log ('Prohibido, lo sentimos es solo para mayores de 15 años');

// }else if ( edad >= 15 && edad <= 18){
// console.log ('Permitido solo mostrando una identificación');

// }else{
    
//     console. log ('Permitido, disfrute la experiencia')}


// //Booleano
// let resultado = 5<8; //me dara como resultado de consola un booleano
// console.log (resultado);

// //Operador Ternario
// const mensajeroDisponible= false;
// const msj = (mensajeroDisponible) ? 'Enviado' : 'El mensaje no se pudo enviar';
// console.log (msj);


// // METODOS DE STRINGS
// let frase = 'Gran día para practicar Javascript!';

// //lenght
// console.log (frase.length);

// //indexOf
// console.log (frase.indexOf('día'));

// //slice
// console.log(frase.slice(0,24));
// console.log(frase.slice(-10));
// console.log(frase);


// //trim
// console.log(frase.trim());

// //split
// console.log (frase.split(' '));

// // replace
// console.log(frase.replace('Javascript', 'todo'));
// console.log(frase);


// // OBJETOS LITERALES

// //ej 1

// let curso = {

//     cantidadDeAlumnos : 32 , 
//     docentes : ['Nacho', 'Javier'],
//     horario : 'de 19 a 21 hs',
//     notificaciones : function(){
//         return 'El horario de la cursada es ' + this.horario;  //this sustituye el nombre del objeto y utilizarlos es una buena practica
//     }

// }

// console.log (curso);
// console.log (curso.cantidadDeAlumnos);
// console.log ('La cantidad de alumnos es de ' + curso.cantidadDeAlumnos);

// console.log(curso.notificaciones());


// //ej 2 utilizando CONSTRUCTOR DE OBJETOS

// let cursos = {

//         cantidadDeAlumnos : 32 , 
//         docentes : ['Nacho', 'Javier'],
//         horario : 'de 19 a 21 hs',
//         notificaciones : function(){
//             return 'El horario de la cursada es ' + this.horario;  //this sustituye el nombre del objeto y utilizarlos es una buena practica
//         }
// }

// function Curso(cantidadDeAlumnos, docentes, horario){
//     this.cantidadDeAlumnos = cantidadDeAlumnos;
//     this.docentes = docentes;
//     this.horario = horario;

// }

// let cursoDeProgramacion = new Curso( 50 ,['Javier' , 'Gerardo'], ' de 19 a 21 hs.');
// let cursoDeMarketing = new Curso( 45 , ['Diego' , 'Alejandra'] , ' de 17 a 19 hs.');

// console.log (cursoDeProgramacion);
// console.log (cursoDeMarketing);


// MÉTODOS DE LOS OBJETOS, FUNCIONES CONSTRUCTORAS (this)

// let deportista = {
// 	energia: 100,
//     experiencia: 10,
//     nombre: "Aimar",
//     entrenarHoras: function(canthoras){
//         this.energia = this.energia - ( canthoras*5)
//         this.experiencia = this.experiencia + (canthoras * 2)
//     }
// };

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);



// // ARROW FUNCTIONS

// let laMitad = numero => numero / 2 ;

// console.log (laMitad (8));

// let dividir = (numeroA, numeroB) => numeroA / numeroB ;

// console.log (dividir (20, 4));


// let tengoQueTrabajar = dia => {
//     if (dia == 'Sábado'|| dia == 'Domingo'){
//     return 'Hoy no tienes que trabajar Eduardo ;)';
//     }else{ 
//         return 'Si, hoy tienes que ir a trabajar Eduardo, ¡Mucho éxito!'
//     }
// }

// console.log(tengoQueTrabajar('Lunes'));

// Arrow function vacio con return implicito
// let saludo = () => '¡Hola compañeros!';

// console.log ();


// //CONDICIONALES (if ternario y switch)

// // switch

// let dia = 'No hay color';

// switch (dia) {
//     case 'lunes':
//         console.log('Es lunes, se labora');
//   break;
//     case 'sábado':
//         console.log ("Es sádado, se sale a pasear");
//         break;
//     case "domingo":
//         console.log ('Es domingo, es como sábado');
//         break;    
//     default:
//         console.log('No es Lunes, Sábado ni Domingo');
//         break;
// }

// // if TERNARIO

// let fruta = 'Mango';
// let resultado = fruta == 'Mango' ? 'Perfecto, me encantan los mangos' : 'Que mal, se me había antojado un mango';
// console.log (resultado);

// // Switch

// let semaforo = 'Verde';

// switch (semaforo){
//     case 'Verde' :
//         console.log ('Puedes pasar');
//         break;
//     case 'Amarillo':
//         console.log ('Ten cuidado, disminuye tu velocidad');
//         break;
//     case 'Rojo' :
//         console.log ('Detente, Alto Total');
//         break;
//     default : 
//     console.log ('Precaución, no sirve el semáforo');
//         break;

// }


// REPASO CICLO FOR

for (let i = 0 ; i < 10 ; i++){
    console.log ('El valor de i es igual a: ' + i);
}

for (let loro = 1 ; loro <= 5; loro++){
    console.log ('oye');
}

function loro (texto){
    for (let texto = 1 ; texto < 6; texto++){
        console.log('Sí, todo lo que "oye", ¡lo repite!');
    }
    }