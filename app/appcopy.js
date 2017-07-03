window.onload = function() {
  document.getElementById("answer1").focus();
};

var timeleft = 130;
var Timer;
 function countdown(){
   var add = document.getElementById('buttons').classList.remove("hidden");
   var add1 = document.getElementById('buttons1').classList.remove("hidden");
   var add2 = document.getElementById('buttons2').classList.add("hidden");
   var add3 = document.getElementById('buttons3').classList.remove("hidden");

   start();
      Timer = setInterval(function(){
        timeleft--;
        document.getElementById("timer2").textContent = timeleft;
        if(timeleft <= 0)
        clearInterval(Timer)
        //document.getElementById("timer2").id = null
        start();
      },1000);
 }

   var questionsa = [
     { letter: "a", answer: "atmósfera", status: 0, question: ("CON LA A. Capa gaseosa que envuelve a la atmósfera") },
     { letter: "a", answer: "artrópodos", status: 0, question: ("CON LA A. Grupo de invertebrados con las patas articuladas") },
     { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
     { letter: "a", answer: "autótrofo", status: 0, question: ("CON LA A. Tipo de nutrición en la que el ser vivo fabrica sus propios nutrientes") }
    ]

   var questionsb = [
     { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
     { letter: "b", answer: "branquias", status: 0, question: ("CON LA B. Los peces las usan para respirar") },
     { letter: "b", answer: "biodiversidad", status: 0, question: ("CON LA B. Variedad de especies diferente de un ecosistema") },
     { letter: "b", answer: "bipedo", status: 0, question: ("CON LA B. Se dice del hombre porque camina a dos patas") }
   ]

   var questionsc = [
     { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
     { letter: "c", answer: "cutanea", status: 0, question: ("CON LA C. Se dice de la respiración que se hace a través de la piel") },
     { letter: "c", answer: "cigoto", status: 0, question: ("CON LA C. Célula que se origina con la unión del gameto masculino y el gameto femenino") },
     { letter: "c", answer: "cloroplasto", status: 0, question: ("CON LA C. Orgánulo de la célula vegetal que se encarga de hacer la fotosíntesis") }
   ]

    var questionsd = [
      { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
      { letter: "d", answer: "desalinizar", status: 0, question: ("CON LA D. Quitar la sal del agua marina") },
      { letter: "d", answer: "descomponedor", status: 0, question: ("CON LA D. Nivel trófico que descompone a los seres vivos, transformando la materia orgánica en materia inorgánica.") }
    ]

    var questionse = [
      { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
      { letter: "e", answer: "eclipse", status: 0, question: ("CON LA E. Se dice cuando un astro oculta a otro que deberíamos ver") },
      { letter: "e", answer: "equinoccio", status: 0, question: ("CON LA E. Día del año en el que la duración de la noche y las horas de Sol son iguales.") },
      { letter: "e", answer: "ecosistema", status: 0, question: ("CON LA E. Conjunto formado por los seres vivos de un lugar, el medio físico y las relaciones que se dan entre ellos") }
    ]

    var questionsf = [
      { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
      { letter: "f", answer: "fotosintesis", status: 0, question: ("CON LA F. Proceso que realizan las plantas por el cual transforman con la ayuda de la energía del Sol el CO2 y el agua en hidratos de carbono.") },
      { letter: "f", answer: "flor", status: 0, question: ("CON LA F. Estructura de las plantas espermatofitas que contiene los órganos reproductores") },
      { letter: "f", answer: "fruto", status: 0, question: ("CON LA F. Parte de la planta que proviene de la transformación de las paredes del ovario") }
    ]

    var questionsg = [
      { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
      { letter: "g", answer: "gusanos", status: 0, question: ("CON LA G. Grupo de invertebrados de cuerpo alargado y blando") },
      { letter: "g", answer: "geocéntrica", status: 0, question: ("CON LA G. Nombre de la teoría, defendida entre otros por Ptolomeo, que decía que la Tierra era el centro del Universo") },
      { letter: "g", answer: "geoide", status: 0, question: ("CON LA G. Forma que tiene la Tierra muy parecido a una esfera") }
    ]

    var questionsh = [
      { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
      { letter: "h", answer: "hidrosfera", status: 0, question: ("CON LA H. Capa de la Tierra compuesta por agua") },
      { letter: "h", answer: "hermafrodita", status: 0, question: ("CON LA H. Se dice de los animales que tienen los dos sexos como el caracol") },
      { letter: "h", answer: "hongos", status: 0, question: ("CON LA H. Reino al que pertenecen las setas y los mohos") }
    ]

    var questionsi = [
      { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
      { letter: "i", answer: "insectos", status: 0, question: ("CON LA I. En este grupo de artrópodos se incluyen entre otros la mosca, la avispa y la mariposa") },
      { letter: "i", answer: "interdigital", status: 0, question: ("CON LA I. Así se llama a la membrana que tienen entre los dedos animales como las ranas y los patos.") },
      { letter: "i", answer: "invernadero.", status: 0, question: ("CON LA I. Nombre del efecto producido por ciertos gases de la naturaleza como el dióxido de carbono y el vapor de agua entre otros.") }
    ]

    var questionsj = [
      { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
      { letter: "j", answer: "jupiter", status: 0, question: ("CON LA J. Quinto planeta del sistema solar") },
      { letter: "j", answer: "jirafa", status: 0, question: ("CON LA J. Animal de cuello largo") }
    ]

    var questionsl = [
      { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
      { letter: "l", answer: "lombriz", status: 0, question: ("CON LA L. Gusano con anillos que es beneficiosa para los suelos porque los airea") },
      { letter: "l", answer: "lago", status: 0, question: ("CON LA L. Acumulación de agua dulce más grande que una laguna") },
      { letter: "l", answer: "litosfera", status: 0, question: ("CON LA L. Capa de la tierra formada por la corteza y la parte superior del manto") }
    ]

    var questionsm = [
      { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
      { letter: "m", answer: "mareas", status: 0, question: ("CON LA M. Subidas y bajadas del del agua del mar") },
      { letter: "m", answer: "medusa", status: 0, question: ("CON LA M. Una de las dos formas corporales de los cnidarios") },
      { letter: "m", answer: "metamorfosis", status: 0, question: ("CON LA M. Cambios que experimentan algunos animales desde que nacen hasta que se hacen adultos") }
    ]

    var questionsn = [
      { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
      { letter: "n", answer: "nebulosa", status: 0, question: ("CON LA N. Nube de gas y polvo que da origen a las estrellas") },
      { letter: "n", answer: "no", status: 0, question: ("CON LA N. Si") },
      { letter: "n", answer: "neptuno", status: 0, question: ("CON LA N. Octavo planeta del sistema solar") },
    ]

    var questionsñ = [
      { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
      { letter: "ñ", answer: "araña", status: 0, question: ("CONTIENE LA Ñ. Nombre de un arácnido") },
    ]

    var questionso = [
      { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
      { letter: "o", answer: "omnivoro", status: 0, question: ("CON LA O. Así se dice de los animales que se alimentan tanto de otros animales como de vegetales") },
      { letter: "o", answer: "oseo", status: 0, question: ("CON LA O. Tipo de esqueleto de peces como la sardina o la trucha.") },
      { letter: "o", answer: "oxigeno", status: 0, question: ("CON LA O. Gas imprescindible para la respiración") }
    ]

    var questionsp = [
      { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
      { letter: "p", answer: "pulmones", status: 0, question: ("CON LA P. Órgano que tenemos los animales para respirar") },
      { letter: "p", answer: "procariota", status: 0, question: ("CON LA P. Tipo de célula que no tiene núcleo") },
      { letter: "p", answer: "productores", status: 0, question: ("CON LA P. Nombre del nivel trófico en el que se incluyen a los seres vivos que fabrican sus nutrientes") }
    ]

    var questionsq = [
      { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
      { letter: "q", answer: "quilla", status: 0, question: ("CON LA Q. Estructura de las aves carenadas donde anclan los músculos del vuelo") },
      { letter: "q", answer: "quelonios", status: 0, question: ("CON LA Q. La tortuga pertenece a este grupo de reptiles") },
    ]

    var questionsr = [
      { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
      { letter: "r", answer: "rana", status: 0, question: ("CON LA R. Anfibio del grupo de los anuros") },
      { letter: "r", answer: "reptiles", status: 0, question: ("CON LA R. Grupo de invertebrados al que pertenece la lagartija , el cocodrilo y la tortuga") },
      { letter: "r", answer: "rio", status: 0, question: ("CON LA R. Corriente continua de agua que circula por un cauce fijo") }
    ]

    var questionss = [
      { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
      { letter: "s", answer: "solsticio", status: 0, question: ("CON LA S. Se dice del día con más luz del año o de la noche más larga del año que da comienzo al verano o al invierno.") },
      { letter: "s", answer: "sexual", status: 0, question: ("CON LA S. Tipo de reproducción en la que tienen que unirse dos células distintas llamadas gametos para originar una sola y que es propia de los animales.") },
      { letter: "s", answer: "salamandra", status: 0, question: ("CON LA S. Anfibio con cuatro patas y cola con la piel de colores llamativos para avisar de que es venenosa") }
    ]

    var questionst = [
      { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
      { letter: "t", answer: "traquea", status: 0, question: ("CON LA T. Órganos que tienen los insectos para respirar") },
      { letter: "t", answer: "triton", status: 0, question: ("CON LA T. Nombre de un anfibio urodelo") },
      { letter: "t", answer: "tierra", status: 0, question: ("CON LA T. Es el tercer planeta del Sistema Solar") },
    ]

    var questionsu = [
      { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
      { letter: "u", answer: "urodelos", status: 0, question: ("CON LA U. Grupo de anfibios que tienen cola y cuatro patas del mismo tamaño") },
      { letter: "u", answer: "universo", status: 0, question: ("CON LA U. Conjunto de toda la materia, energía y tiempo que existe.") },
      { letter: "u", answer: "urano", status: 0, question: ("CON LA U. Séptimo planeta del Sistema Solar") }
    ]

    var questionsv = [
      { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
      { letter: "v", answer: "valva", status: 0, question: ("CON LA V. Cada una de las conchas de la almeja") },
      { letter: "v", answer: "venus", status: 0, question: ("CON LA V. Segundo planeta del Sistema Solar") },
      { letter: "v", answer: "via lactea", status: 0, question: ("CON LA V. Con dos palabras: nombre que recibe nuestra galaxia") }
    ]

    var questionsx = [
      { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
      { letter: "x", answer: "dioxido de carbono", status: 0, question: ("CONTIENE LA X. Gas responsable del efecto invernadero. Tres palabras") },
      { letter: "x", answer: "exosfera", status: 0, question: ("CONTIENE LA X. Capa exterior de la atmósfera, que está por encima de la termosfera") },
      { letter: "x", answer: "oxigeno", status: 0, question: ("CONTIENE LA X. Gas que producen las plantas al hacer la fotosíntesis") },
    ]

    var questionsy = [
      { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
      { letter: "y", answer: "Yeso", status: 0, question: ("CONTIENE LA Y. Mineral de dureza 2 en la escala de Mohs") },
    ]

    var questionsz = [
      { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
      { letter: "z", answer: "potabilizadora", status: 0, question: ("CONTIENE LA Z. Planta que hace potable el agua") },
      { letter: "z", answer: "corteza", status: 0, question: ("CONTIENE LA Z. Parte sólida exterior de la geosfera") },
      { letter: "z", answer: "caliza", status: 0, question: ("CONTIENE LA Z. Ejemplo de roca sedimentaria") }
    ]

   var questions = [
       { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
       { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
       { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
       { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
       { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
       { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
       { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
       { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
       { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
       { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
       { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
       { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
       { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
       { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
       { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
       { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
       { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
       { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
       { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
       { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
       { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
       { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
       { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
       { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
       { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
   ]

var contador = 0;
var length = 25;
var correct = 0;
var wrong = 0;
var start1 = 0;
var length1 = 25;



function start(){
  document.getElementById("letterleft1").innerHTML = correct
  document.getElementById("answer1").focus();
  if(length !== 0 && timeleft > 0){
  if(questions[contador].status === 0){
    var x = document.getElementById("letter");
    x.getElementsByTagName("span")[contador].style.background = "#AFB537";
  document.getElementById("question1").innerHTML = questions[contador].question;
}else if (questions[contador].status === 1){
  contador ++
  start();
}
}else{
  document.getElementById("question1").innerHTML = "Correct: " + correct + " wrong: " + wrong
  //document.getElementById("timer2").id = null
  clearInterval(Timer)
  var add = document.getElementById('buttons').classList.add("hidden");
  var add1 = document.getElementById('buttons1').classList.add("hidden");
  var add2 = document.getElementById('buttons2').classList.add("hidden");
  var add3 = document.getElementById('buttons3').classList.add("hidden");
  var add3 = document.getElementById('buttons4').classList.remove("hidden");
}
}

function pasapalabra(){
  console.log(start1)
  console.log(contador)
  console.log(length1)
  var x = document.getElementById("letter");
  x.getElementsByTagName("span")[contador].style.background = "#0011DE";
  if(start1 >= length1 -1){
      start1 = 0;
      contador = 0;
      length1 = length;
      start();
  }else{
    start1 ++
    contador ++
    start();
  }
}

function submit(){
  console.log(start1)
  console.log(contador)
  console.log(length1)
  start1 ++
  var a = document.getElementById("answer1").value;
  document.getElementById("answer1").value = "";

  if(start1 <= length1){
    length --

  }

  if(questions[contador].answer === a){
    questions[contador].status = 1;
    correct ++
    if(start1 >= length1){
      changeColorG();
    }else{changeColorG();}
  }else if(questions[contador].answer !== a){
    questions[contador].status = 1;
    wrong ++
    if(start1 >= length1){
      changeColorR();
    }else{changeColorR();
    }
  }


};

function changeColorG(){
  var x = document.getElementById("letter");
  x.getElementsByTagName("span")[contador].style.background = "green";
  x.getElementsByTagName("div")[contador].classList.remove("hidden");
  x.getElementsByTagName("div")[contador].classList.add("solution");
  x.getElementsByTagName("div")[contador].textContent = questions[contador].answer;


  contador ++
  if(start1 >= length1){
    contador = 0
    start1 = 0
    length1 = length
    start();
  }else{start();}
}

function changeColorR(){
  var x = document.getElementById("letter");
  x.getElementsByTagName("span")[contador].style.background = "red";
  x.getElementsByTagName("div")[contador].classList.remove("hidden");
  x.getElementsByTagName("div")[contador].classList.add("solution");
  x.getElementsByTagName("div")[contador].textContent = questions[contador].answer;

  if(start1 >= length1){
    contador ++
    contador = 0;
    start1 = 0;
    length1 = length;
    start();
  }else{start();}
}

function stop(){
  length = 0;
  start();
}

var startagain = 25;

function playAgain(){
  timeleft = 130;
  contador = 0;
  length = 25;
  correct = 0;
  wrong = 0;
  start1 = 0;
  length1 = 25;
  document.getElementById("timer2").textContent = timeleft;

  var add2 = document.getElementById('buttons2').classList.remove("hidden");
  var add4 = document.getElementById('buttons4').classList.add("hidden");
  document.getElementById("letterleft1").innerHTML = 0;


  if(startagain !== 0){
    startagain --
    questions[startagain].status = 0;
    var x = document.getElementById("letter");
    x.getElementsByTagName("span")[startagain].style.background = "#0011DE";
    x.getElementsByTagName("div")[startagain].classList.add("hidden");
    x.getElementsByTagName("div")[startagain].classList.remove("solution");
    x.getElementsByTagName("div")[contador].textContent = "";
    playAgain()
  }else{
    startagain = 25
  }

}

var player = 0;

function score(){
    player ++
    var score = []
    var ul = document.getElementById("list")
  	var li = document.createElement("li")
    score.push ("Player" + player + ":   correct: " + correct + " wrong: " + wrong)
    li.appendChild(document.createTextNode(score.join(" ")));
    ul.appendChild(li);
    playAgain();

}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function validar(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  if(wrong + correct <= 24 && timeleft < 130){
  if (tecla==13) {submit();}}
}
