const mensaje = document.getElementById("titulo2")
let botonColor = document.getElementById("cambiarColor")
botonColor.addEventListener('click', nuevoColor)
let numero;
let colores = ["indianred", "lightcoral", "salmon", "darksalmon", "lightsalmon", "crimson", "red",  "firebrick", "darkred",
"pink", "lightpink", "hotpink", "deeppink","mediumvioletred","palevioletred",
"lightsalmon","coral","tomato","orangered","darkorange","orange",
"gold","yellow","lightyellow","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki",
"lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","rebeccapurple","blueviolet","darkviolet",
"darkorchid","darkmagenta","purple","indigo","slateblue","darkslateblue","mediumslateblue",
"greenyellow","chartreuse","lawngreen","lime","limegreen","palegreen","lightgreen","mediumspringgreen","springgreen","mediumseagreen","seagreen",
"forestgreen","green","darkgreen","yellowgreen","olivedrab","olive","darkolivegreen","mediumaquamarine","darkseagreen","lightseagreen","darkcyan","teal",
"aqua","cyan","lightcyan","paleturquoise","aquamarine","turquoise","mediumturquoise","cadetblue","steelblue","lightsteelblue","powderblue",
"lightblue","skyblue","lightskyblue","deepskyblue","dodgerblue","cornflowerblue","mediumslateblue","royalblue","blue","mediumblue","darkblue",
"navy","midnightblue","cornsilk","blanchedalmond","bisque","navajowhite","wheat","burlywood","tan","rosybrown","sandybrown","goldenrod","darkgoldenrod",
"peru","chocolate","saddlebrown","sienna","brown","maroon","white","snow","honeydew","mintcream","azure","aliceblue","ghostwhite","whitesmoke",
"seashell","beige","oldlace","floralwhite","ivory","antiquewhite","linen","lavenderblush","mistyrose",
"gainsboro","lightgray","silver","darkgray","gray","dimgray","lightslategray","slategray","darkslategray","black"
];
function nuevoColor(){
	generarNumero(0,139);
    document.getElementById('body').style.background = colores[numero];
    mensaje.innerHTML = 'Background color: ' + colores[numero]
    
}
function generarNumero(min, max){
    numero = Math.floor(Math.random()*(max-min)+min)
	return numero;
}

//color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
	//return "rgb" + color;
    //document.getElementById("body").style.background = "rgb"+color;