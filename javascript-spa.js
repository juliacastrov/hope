var quotes = ['series de televisi\u00F3n donde el mundo no se acaba y nadie lleva mascarillas o está confinado en su casa',
'la capacidad de mantener un diario',
'memes sobre el mundo que se acaba y la enfermedad siendi real',
'intercambiar contacto visual con alguien y confirmar que están en la misma página',
'pedir perd\u00F3n',
'una mente útil',
'oportunidad de decir cosas que no dijimos antes',
'compa\u00F1eras de casa', 
'ir en bicicleta',
'puestas de sol y amaneceres',
'personas con las que pasas tanto tiempo que tus modales se vuelven uno',
'videos de personas salvando perritos en abandono',
'videos de pájaros siendo entrenados',
'almohadas para gritar',
'esa persona que nos dice que todo estará bien',
'so\u00F1ar con besos',
'Conversaciones nocturnas en el patio cuando la temperatura exterior golpea el clima con capucha',
'cuerpos', 
'pop punk de los 2000',
'preguntas para los otros',
'garabatos de amigos',
'pajaritos abrazados',
'bailar torpemente y sin preocuparse',
'el humor',
'abrazos',
'estar adentro cuando está lloviendo',
'disculpas sinceras y reflexivas',
'cuadernos peque\u00F1os ',
'cocinar con amigos',
'fotos de nuestra infancia',
'amor',
'la gente',
'llorar en la ducha',
'árboles',
'plantas en la casa',
'amigos en videollamadas',
'memes',
'lápices de color',
'la euforia colectiva que viene de aplaudir desde la ventana y escuchar a otros aplaudir',
'rutinas',
'películas bobas',
'repetir muchas veces nuestra canci\u00F3n favorita',
'visitas virtuales a museos',
'apodos para nuestros seres queridos',
'las patas de nuestras mascotas',
'polvo que gira en la luz',
'el olor familiar de alguien que amas',
'bailar en la cocina',
'tenis blancos limpios',
'pijamas',
'viejos diarios',
'lápices reci\u00E9n afilados',
'Cafe ma\u00F1anero',
'aire fresco',
'diente de le\u00F3n',
'beb\u00E9s dormidos',
'fines de semana',
'pijama favorito',
'indecisi\u00F3n entre dos amantes sobre qu\u00E9 película ver',
'dibujos animados de los 90',
'adornos navide\u00F1os que hicimos en primaria',
'bonitos caminos atrás',
'luz solar moteada a trav\u00E9s de los árboles',
't\u00E9 de manzanilla con miel y lim\u00F3n para el dolor de garganta o el coraz\u00F3n',
'estar dispuestos a equivocarnos a veces',
'el sonido de ni\u00F1os riendo afuera',
'extra\u00F1os que te hacen saber que se te cay\u00F3 la bufanda, el sombrero o el guante',
'hamacas',
'el amigo al que puedes llamar llorando',
'amigos que te ayudan a empacar tus cosas durante un momento difícil',
'olor a madera reci\u00E9n cortada',
'el dolor y el orgullo de finalmente dejar ir lo que te agobia',
'hojas amarillas',
'rasgu\u00F1itos en la espalda',
'gays tomados de la mano en público',
'velas y compa\u00F1ía cuando se va la luz'


]


function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}