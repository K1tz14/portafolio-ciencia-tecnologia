const CARPETA_IMG = "Public/img/";
const EXT_DEFECTO = ".jpg";
const IMAGEN_RESPALDO = "Public/img/micro.jpeg";

const bloques = [
  {
    id: "u1",
    color: "#34d399",
    num: "Bloque 1",
    titulo: "Introducción a los estudios de la ciencia y tecnología",
    desc: "Bases conceptuales, el panorama en México y los aspectos éticos y legales de la creación tecnológica.",
    temas: [
      {
        num: "1.1",
        titulo: "Conceptualización de la Ciencia, Tecnología, Sociedad e Innovación",
        desc: "Este tema aborda las definiciones fundamentales y la estrecha interrelación entre ciencia (generación de conocimiento), tecnología (aplicación práctica de ese conocimiento), innovación (transformación de ideas en soluciones de valor) y sociedad.\n\nA través de un enfoque interdisciplinario, se analiza cómo estos elementos se retroalimentan entre sí: por un lado, cómo las necesidades sociales y culturales impulsan el avance científico y tecnológico; y por otro, cómo estas innovaciones transforman la economía, la vida cotidiana, el entorno laboral y los marcos éticos del mundo contemporáneo.",
        url: "https://drive.google.com/file/d/1LqupsU_j7hLyNcUF7IiDOponi8RfwNSU/view?usp=sharing",
      },
      {
        num: "1.2",
        titulo: "La ciencia y tecnología en México",
        desc: "Este tema examina el panorama histórico y actual del desarrollo científico y tecnológico en México, analizando el papel de las instituciones públicas, las universidades y el sector privado en la generación de conocimiento e innovación.\n\nAsimismo, se evalúan las políticas nacionales, el financiamiento, los principales logros y los retos estructurales que enfrenta el país para reducir la brecha tecnológica, impulsar la competitividad industrial y responder a las demandas sociales en un entorno globalizado.",
        url: "https://drive.google.com/file/d/1LqupsU_j7hLyNcUF7IiDOponi8RfwNSU/view?usp=sharing",
      },
      {
        num: "1.3",
        titulo:
          "Políticas del gobierno para la ciencia, la tecnología y la innovación",
        desc: "Este tema analiza las estrategias, leyes y organismos públicos (como la SECIHTI) con los que el Estado financia, regula y dirige el desarrollo científico y tecnológico del país. Busca articular la academia, la industria y el gobierno para impulsar la innovación, la soberanía tecnológica y la solución de problemas sociales prioritarios.",
        url: "https://drive.google.com/file/d/1LqupsU_j7hLyNcUF7IiDOponi8RfwNSU/view?usp=sharing",
      },
      {
        num: "1.4",
        titulo: "Ética y responsabilidad en el desarrollo tecnológico",
        desc: "Consiste en evaluar el impacto social, ambiental y humano de las nuevas tecnologías antes y durante su implementación. Busca garantizar que la innovación respete los derechos fundamentales, la privacidad, la equidad y la sostenibilidad, evitando sesgos o daños colaterales en la sociedad.",
        url: "https://docs.google.com/presentation/d/137De9AVUeaWGlyc9Q1qPAvPpVqv19dfi/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "1.5",
        titulo: "Concepto de Patente",
        desc: "Es un derecho exclusivo que otorga el Estado a un inventor por un tiempo limitado (generalmente 20 años) a cambio de divulgar públicamente su creación. Impide que terceros fabriquen, usen o vendan la invención sin autorización, exigiendo que esta sea novedosa a nivel mundial, tenga actividad inventiva y aplicación industrial.",
        url: "https://docs.google.com/presentation/d/137De9AVUeaWGlyc9Q1qPAvPpVqv19dfi/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "1.6",
        titulo: "Concepto de Modelo de utilidad",
        desc: "Es una figura de propiedad industrial similar a la patente, pero destinada a invenciones menores que aportan una mejora funcional, práctica o de configuración a un objeto o herramienta ya existente. Suele requerir un menor grado de actividad inventiva, se concede más rápido y otorga protección por un periodo más corto (habitualmente 10 años, dependiendo de la legislación).",
        url: "https://docs.google.com/presentation/d/137De9AVUeaWGlyc9Q1qPAvPpVqv19dfi/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
    ],
  },
  {
    id: "u2",
    color: "#84cc16",
    num: "Bloque 2",
    titulo: "El siglo de la ciencia",
    desc: "Veinte inventos y descubrimientos que transformaron la vida cotidiana durante el siglo XX.",
    temas: [
      {
        num: "2.1",
        titulo: "La penicilina",
        desc: "Descubierta por accidente en 1928 por Alexander Fleming en Londres a partir del hongo Penicillium notatum, la penicilina revolucionó la medicina al convertirse en el primer antibiótico eficaz. Años más tarde, Howard Florey y Ernst Chain lograron purificarla y producirla a gran escala durante la Segunda Guerra Mundial, salvando millones de vidas de infecciones antes mortales e inaugurando la era moderna de los antibióticos.",
        url: "https://drive.google.com/file/d/1JApOGLHDMuNXRyENudEQ7iZfjcoGXJ7x/view?usp=sharing",
      },
      {
        num: "2.2",
        titulo: "Los trasplantes",
        desc: "La era moderna de los trasplantes inició en 1954 con el primer trasplante exitoso de riñón entre gemelos, seguido en 1967 por el primer trasplante de corazón. Aunque al principio el principal obstáculo era el rechazo del cuerpo, el desarrollo de fármacos inmunosupresores a finales de los años 70 permitió controlar este problema y convertir los trasplantes en un procedimiento médico habitual que salva miles de vidas.",
        url: "https://drive.google.com/file/d/1JApOGLHDMuNXRyENudEQ7iZfjcoGXJ7x/view?usp=sharing",
      },
      {
        num: "2.3",
        titulo: "Los focos",
        desc: "La historia del foco eléctrico comenzó a principios del siglo XIX con los primeros experimentos de lámparas incandescentes de científicos como Humphry Davy y Joseph Swan. Sin embargo, fue Thomas Alva Edison quien, en 1879, logró perfeccionar un filamento de carbono duradero y desarrollar un sistema eléctrico completo para comercializarlo a gran escala, iluminando hogares y ciudades y dando paso posteriormente a tecnologías más eficientes como las lámparas fluorescentes y los actuales focos LED.",
        url: "https://drive.google.com/file/d/1JApOGLHDMuNXRyENudEQ7iZfjcoGXJ7x/view?usp=sharing",
      },
      {
        num: "2.4",
        titulo: "El automóvil",
        desc: "La historia del automóvil moderno comenzó en 1886, cuando Karl Benz patentó el primer vehículo impulsado por un motor de combustión interna en Alemania. A principios del siglo XX, Henry Ford revolucionó la industria al implementar la producción en cadena con el Modelo T, haciendo que el auto fuera accesible para el público general y transformando la movilidad, las ciudades y la economía global hasta la actual transición hacia los vehículos eléctricos y autónomos.",
        url: "https://drive.google.com/file/d/1JApOGLHDMuNXRyENudEQ7iZfjcoGXJ7x/view?usp=sharing",
      },
      {
        num: "2.5",
        titulo: "Las computadoras",
        desc: "La historia de las computadoras comenzó en el siglo XIX con las máquinas mecánicas programables de Charles Babbage y los algoritmos de Ada Lovelace. En la década de 1940 surgieron las primeras computadoras electrónicas de gran tamaño, como la ENIAC, que funcionaban con tubos de vacío. Posteriormente, la invención del transistor y el microprocesador permitió miniaturizar los equipos, dando paso a las computadoras personales en los años 70 y 80, y evolucionando hasta los dispositivos móviles, la inteligencia artificial y la computación en la nube actuales.",
        url: "https://drive.google.com/file/d/1JApOGLHDMuNXRyENudEQ7iZfjcoGXJ7x/view?usp=sharing",
      },
      {
        num: "2.6",
        titulo: "La aspirina",
        desc: "Aunque los extractos de corteza de sauce se usaban contra el dolor desde la antigüedad, la aspirina moderna nació en 1897, cuando el químico alemán Felix Hoffmann sintetizó el ácido acetilsalicílico de forma pura y estable para la compañía Bayer. Comercializada a partir de 1899, se convirtió rápidamente en el analgésico y antiinflamatorio más utilizado del mundo, ampliando décadas después su uso médico para la prevención de enfermedades cardiovasculares.",
        url: "https://drive.google.com/file/d/1Y1-9bPz5PUH1hQJUq2RO-zbHlcnfbkO9/view?usp=sharing",
      },
      {
        num: "2.7",
        titulo: "La televisión",
        desc: "La historia de la televisión comenzó en la década de 1920 con los sistemas electromecánicos de John Logie Baird y las primeras transmisiones electrónicas desarrolladas por Philo Farnsworth y Vladimir Zworykin. Tras popularizarse en blanco y negro en los años 40 y 50, dio el salto al color en las décadas siguientes, transformándose en el principal medio de comunicación y entretenimiento masivo del siglo XX, hasta evolucionar hacia las pantallas digitales de alta definición y las plataformas de streaming actuales.",
        url: "https://drive.google.com/file/d/1Y1-9bPz5PUH1hQJUq2RO-zbHlcnfbkO9/view?usp=sharing",
      },
      {
        num: "2.8",
        titulo: "La radio",
        desc: "La historia de la radio comenzó a finales del siglo XIX con las investigaciones sobre ondas electromagnéticas de Heinrich Hertz y Nikola Tesla, culminando en 1901 cuando Guglielmo Marconi logró la primera transmisión transatlántica sin cables. A partir de la década de 1920 se consolidó como el primer medio de comunicación masiva e instantánea en los hogares, transformando el periodismo, el entretenimiento y la política, hasta evolucionar hacia la radiodifusión digital, satelital y los podcasts actuales.",
        url: "https://drive.google.com/file/d/1Y1-9bPz5PUH1hQJUq2RO-zbHlcnfbkO9/view?usp=sharing",
      },
      {
        num: "2.9",
        titulo: "El avión",
        desc: "La historia de la aviación moderna comenzó en 1903, cuando los hermanos Wilbur y Orville Wright realizaron el primer vuelo controlado y propulsado en Kitty Hawk, Estados Unidos. Impulsada por las dos guerras mundiales, la tecnología aeronáutica evolucionó rápidamente de biplanos de madera a aviones metálicos y motores a reacción en la década de 1940, dando paso a la aviación comercial masiva y conectando al mundo de forma rápida y segura.",
        url: "https://drive.google.com/file/d/1Y1-9bPz5PUH1hQJUq2RO-zbHlcnfbkO9/view?usp=sharing",
      },
      {
        num: "2.10",
        titulo: "El chip de silicio",
        desc: "La historia del chip de silicio comenzó a finales de la década de 1950, cuando Jack Kilby y Robert Noyce desarrollaron de forma independiente el primer circuito integrado, logrando reunir varios componentes electrónicos en una sola pieza semiconductora. Este avance sustituyó a los voluminosos tubos de vacío y permitió miniaturizar la electrónica, impulsando la creación del microprocesador en los años 70 y sentando las bases de toda la era digital, desde las computadoras personales hasta los teléfonos inteligentes y la inteligencia artificial actual.",
        url: "https://drive.google.com/file/d/1Y1-9bPz5PUH1hQJUq2RO-zbHlcnfbkO9/view?usp=sharing",
      },
      {
        num: "2.11",
        titulo: "Los plásticos",
        desc: "La historia de los plásticos comenzó a mediados del siglo XIX con materiales semisintéticos como la parkesina y el celuloide, pero el primer plástico totalmente sintético fue la baquelita, creada por Leo Baekeland en 1907. A partir de la década de 1930 y durante la Segunda Guerra Mundial se desarrollaron polímeros como el nailon, el polietileno y el PVC, que revolucionaron la industria y la vida cotidiana por su bajo costo y versatilidad, aunque hoy plantean grandes retos ambientales que impulsan la búsqueda de alternativas biodegradables y el reciclaje.",
        url: "https://drive.google.com/file/d/17mcHhshAyMuMOQsvTEwdHGlI93G1kOBr/view?usp=sharing",
      },
      {
        num: "2.12",
        titulo: "El láser",
        desc: "La historia del láser comenzó en la década de 1950 con los fundamentos teóricos de Charles Townes y Arthur Schawlow sobre la amplificación de luz mediante emisión estimulada, materializándose en 1960 cuando Theodore Maiman construyó el primer láser funcional de rubí. Desde entonces, este haz de luz altamente concentrado y preciso se ha vuelto indispensable en múltiples áreas, revolucionando las telecomunicaciones por fibra óptica, la cirugía médica, los lectores de códigos de barras, la manufactura industrial y la investigación científica.",
        url: "https://drive.google.com/file/d/17mcHhshAyMuMOQsvTEwdHGlI93G1kOBr/view?usp=sharing",
      },
      {
        num: "2.13",
        titulo: "La insulina",
        desc: "La historia de la insulina comenzó en 1921 en la Universidad de Toronto, cuando los científicos Frederick Banting y Charles Best lograron aislar esta hormona del páncreas de perros y demostrar que regulaba los niveles de azúcar en la sangre. Purificada poco después con ayuda de James Collip y John Macleod, su aplicación clínica en 1922 transformó la diabetes tipo 1 de una enfermedad mortal a una condición tratable, evolucionando posteriormente en los años 80 hacia la insulina humana recombinante producida mediante ingeniería genética.",
        url: "https://drive.google.com/file/d/17mcHhshAyMuMOQsvTEwdHGlI93G1kOBr/view?usp=sharing",
      },
      {
        num: "2.14",
        titulo: "La ingeniería genética",
        desc: "La historia de la ingeniería genética comenzó en la década de 1970, cuando Stanley Cohen y Herbert Boyer desarrollaron la tecnología del ADN recombinante, logrando cortar fragmentos de ADN de un organismo e insertarlos en otro. Este avance permitió producir proteínas humanas en bacterias —como la insulina sintética en 1978— e impulsó el desarrollo de cultivos transgénicos, terapias génicas y medicamentos biotecnológicos, alcanzando en la década de 2010 una nueva revolución con herramientas de edición precisa como CRISPR-Cas9.",
        url: "https://drive.google.com/file/d/17mcHhshAyMuMOQsvTEwdHGlI93G1kOBr/view?usp=sharing",
      },
      {
        num: "2.15",
        titulo: "El refrigerador",
        desc: "La historia del refrigerador comenzó a mediados del siglo XIX con los primeros sistemas mecánicos de enfriamiento artificial desarrollados por inventores como Jacob Perkins y Carl von Linde, pensados originalmente para la industria cervecera y el transporte de carne. A principios del siglo XX surgieron los primeros modelos domésticos, impulsados por empresas como General Electric en 1927, que reemplazaron el uso de bloques de hielo y gases tóxicos por refrigerantes más seguros, revolucionando la conservación de alimentos, la salud pública y los hábitos cotidianos en todo el mundo.",
        url: "https://drive.google.com/file/d/17mcHhshAyMuMOQsvTEwdHGlI93G1kOBr/view?usp=sharing",
      },
      {
        num: "2.16",
        titulo: "La píldora",
        desc: "La historia de la píldora o pastilla farmacéutica como forma de dosificación oral se remonta a civilizaciones antiguas como Egipto y Grecia, donde se elaboraban bolitas medicinales mezclando hierbas trituradas con miel o arcilla para facilitar su ingesta. Sin embargo, el formato moderno nació en 1843, cuando el inventor británico William Brockedon patentó una máquina capaz de comprimir polvos medicinales bajo presión sin necesidad de aglutinantes líquidos, dando origen al comprimido o tableta industrial que permitió dosificar medicamentos con precisión y producirlos a gran escala.",
        url: "https://docs.google.com/presentation/d/14Em22DSncrUe6k7llM3tv2a1CQyJZEcB/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "2.17",
        titulo: "El cine",
        desc: "La historia del cine comenzó a finales del siglo XIX con los experimentos de fotografía en movimiento de Eadweard Muybridge y el quinetoscopio de Thomas Edison, culminando en 1895 cuando los hermanos Auguste y Louis Lumière realizaron la primera proyección pública comercial con su cinematógrafo en París. Durante las primeras décadas del siglo XX evolucionó rápidamente del cine mudo al sonoro en 1927 y posteriormente al color, consolidándose como una de las industrias culturales y artísticas más influyentes del mundo, hasta llegar a la era actual de los efectos digitales, las salas IMAX y las plataformas de distribución global.",
        url: "https://docs.google.com/presentation/d/14Em22DSncrUe6k7llM3tv2a1CQyJZEcB/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "2.18",
        titulo: "Los satélites artificiales",
        desc: "La historia de los satélites artificiales comenzó el 4 de octubre de 1957, cuando la Unión Soviética lanzó el Sputnik 1, el primer objeto fabricado por el ser humano en orbitar la Tierra, dando inicio a la carrera espacial. Durante las décadas siguientes se desarrollaron satélites especializados en telecomunicaciones, meteorología y navegación (como la red GPS en los años 70 y 80), transformando la transmisión global de información y el pronóstico del clima, hasta llegar a las actuales megaconstelaciones comerciales de órbita baja que proveen internet de alta velocidad en todo el planeta.",
        url: "https://docs.google.com/presentation/d/14Em22DSncrUe6k7llM3tv2a1CQyJZEcB/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "2.19",
        titulo: "Internet",
        desc: "La historia de internet comenzó a finales de los años 60 con ARPANET, una red militar y académica estadounidense que conectó computadoras a distancia. En las décadas de 1970 y 1980 se estandarizaron los protocolos TCP/IP para interconectar redes, pero su masificación llegó en 1989 cuando Tim Berners-Lee creó la World Wide Web (WWW), transformando la red en la principal herramienta global de comunicación, comercio e información.",
        url: "https://docs.google.com/presentation/d/14Em22DSncrUe6k7llM3tv2a1CQyJZEcB/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "2.20",
        titulo: "La lavadora",
        desc: "La historia de la lavadora comenzó a mediados del siglo XIX con tambores giratorios manuales, pero dio su gran salto en 1908 cuando Alva J. Fisher popularizó el primer modelo eléctrico (Thor). Con la llegada de las lavadoras totalmente automáticas en las décadas de 1930 y 1940, se transformaron las tareas del hogar, ahorrando horas de trabajo físico y mejorando la higiene cotidiana.",
        url: "https://docs.google.com/presentation/d/14Em22DSncrUe6k7llM3tv2a1CQyJZEcB/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
    ],
  },
  {
    id: "u3",
    color: "#22a45d",
    num: "Bloque 3",
    titulo: "Innovaciones y tendencias",
    desc: "Las tecnologías actuales de la teleinformática y lo que implican para la sociedad.",
    temas: [
      {
        num: "3.1",
        titulo: "Internet de las cosas (IoT)",
        desc: "Red de objetos físicos cotidianos e industriales equipados con sensores, software y conectividad que recopilan e intercambian datos en tiempo real. Permite automatizar procesos y optimizar recursos en hogares inteligentes, ciudades, salud y manufactura.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.2",
        titulo: "Tecnologías emergentes en teleinformática",
        desc: "Innovaciones que fusionan las telecomunicaciones y la informática para ofrecer mayor velocidad, baja latencia y ubicuidad. Destacan el despliegue de redes 5G/6G, la computación en el borde (edge computing), las megaconstelaciones satelitales de órbita baja y los gemelos digitales.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.3",
        titulo: "Inteligencia artificial y aprendizaje automático",
        desc: "Sistemas computacionales capaces de simular la inteligencia humana mediante algoritmos que aprenden patrones a partir de datos sin ser programados explícitamente para cada tarea. Impulsan el reconocimiento de voz e imagen, la IA generativa, el diagnóstico médico y la toma de decisiones autónoma.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.4",
        titulo: "Aplicaciones en telecomunicaciones",
        desc: "Uso de redes avanzadas y análisis de datos para gestionar el tráfico de información de forma inteligente, optimizar el ancho de banda, predecir fallos en la infraestructura y habilitar servicios de videoconferencia, telemedicina y conectividad móvil global.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.5",
        titulo: "Computación en la nube y big data",
        desc: "La nube permite acceder bajo demanda a almacenamiento y potencia de procesamiento remotos a través de internet, mientras que el Big Data abarca las herramientas para capturar, procesar y analizar volúmenes masivos de datos a alta velocidad para descubrir tendencias y apoyar decisiones estratégicas.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.6",
        titulo: "Implicaciones y aplicaciones en teleinformática",
        desc: "Su aplicación transforma la educación (e-learning), el comercio electrónico, el teletrabajo y el gobierno digital. Como implicación, genera una alta dependencia de las redes, exige alfabetización digital constante y plantea retos como la brecha tecnológica entre regiones.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "3.7",
        titulo: "Ciberseguridad y protección de datos",
        desc: "Son el conjunto de prácticas, tecnologías (como el cifrado y la autenticación multifactor) y marcos legales (como el RGPD) diseñados para proteger las redes y la información frente a ciberataques, robos de identidad y accesos no autorizados, garantizando la confidencialidad, integridad y disponibilidad de los datos.",
        url: "https://docs.google.com/presentation/d/12PXiB66ZTGRIbKOl35izNM-K2jHx1EnG/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
    ],
  },
  {
    id: "u4",
    color: "#9fb3ad",
    num: "Bloque 4",
    titulo: "Relaciones entre ciencia y tecnología",
    desc: "Cómo la ciencia y la tecnología influyen en la sociedad, la cultura, la política, el ambiente y la industria.",
    temas: [
      {
        num: "4.1",
        titulo: "Relación ciencia, tecnología y sociedad",
        desc: "Es una interacción bidireccional donde los avances científicos y tecnológicos transforman la vida cotidiana, el trabajo y la organización social, mientras que las necesidades, valores y demandas sociales orientan qué se investiga y cómo se aplica.",
        url: "https://drive.google.com/file/d/145xTpZkDFaWmZ6TQwmoQhzpG9aXn8-nM/view?usp=sharing",
      },
      {
        num: "4.2",
        titulo: "Relación ciencia, tecnología y cultura",
        desc: "La ciencia y la tecnología moldean las expresiones artísticas, las formas de comunicación, el lenguaje y la visión del mundo de una época, a la vez que la identidad y los valores culturales determinan cómo cada comunidad adopta, adapta o rechaza las innovaciones.",
        url: "https://drive.google.com/file/d/1z0ajeAwPAx9b9PKiyACG7kx0MGx_f2Yx/view?usp=sharing",
      },
      {
        num: "4.3",
        titulo: "Relación ciencia, tecnología y política",
        desc: "Los gobiernos financian la investigación, establecen prioridades estratégicas y regulan el uso de las tecnologías mediante leyes y estándares, mientras que el desarrollo científico-tecnológico otorga poder económico, militar y geopolítico a las naciones.",
        url: "https://drive.google.com/file/d/1vstC0JLkOEzoqiSmkKZXQXR1dAmEvQph/view?usp=sharing",
      },
      {
        num: "4.4",
        titulo: "Relación ciencia, tecnología y medio ambiente",
        desc: "Aunque la explotación tecnológica ha impulsado la contaminación, el agotamiento de recursos y el cambio climático, la ciencia y la innovación también proveen las herramientas para monitorear ecosistemas y transitar hacia energías limpias y procesos sostenibles.",
        url: "https://docs.google.com/presentation/d/19Fcr6Q_jjylSO6GMvBQH7_FJO3cPHNUi/edit?usp=sharing&ouid=115831872866646686158&rtpof=true&sd=true",
      },
      {
        num: "4.5",
        titulo: "Ciencia e innovación tecnológica en la industria",
        desc: "La aplicación del conocimiento científico en el sector productivo permite automatizar procesos, crear nuevos materiales y mejorar la eficiencia y competitividad, dando origen a revoluciones industriales y modelos como la Industria 4.0.",
        url: "https://drive.google.com/file/d/1rNuKiVVSFFagJFb-J5BpsAhHrjxxVPnO/view?usp=sharing",
      },
    ],
  },
];

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

function getTemaImg(tema) {
  if (tema.img) return tema.img;
  return `${CARPETA_IMG}${tema.num.replace(".", "-")}${EXT_DEFECTO}`;
}

function renderMedia(tema, isModal = false) {
  const src = esc(getTemaImg(tema));
  const zoomClass = isModal
    ? ""
    : "transition duration-500 group-hover:scale-105";

  return `
        <div class="relative h-full w-full bg-ink">
            <img src="${src}"
                 alt="${esc(tema.titulo)}"
                 loading="lazy"
                 onerror="this.onerror=null; this.src='${IMAGEN_RESPALDO}';"
                 class="h-full w-full object-cover object-center ${zoomClass}">
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent"></div>
        </div>
    `;
}

const select = $("bloque-select");
bloques.forEach((b, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = `${b.num}: ${b.titulo}`;
  select.appendChild(opt);
});

$("pills").innerHTML = ["Todos", ...bloques.map((b) => b.num)]
  .map(
    (label, i) => `
    <button type="button" data-f="${i - 1}"
        class="pill shrink-0 rounded-full border border-[#16241f]/20 px-5 py-2 text-sm font-bold transition hover:border-pine">
        ${esc(label)}
    </button>
`,
  )
  .join("");

$("groups").innerHTML = bloques
  .map(
    (b, bi) => `
    <section data-g="${bi}" aria-labelledby="g${bi}">
        <header class="mb-6 border-l-4 pl-4" style="border-color:${b.color}">
            <p class="text-xs font-bold uppercase tracking-wider text-[#4f605a]">${esc(b.num)} · ${b.temas.length} temas</p>
            <h3 id="g${bi}" class="mt-1 font-display text-2xl leading-snug sm:text-3xl">${esc(b.titulo)}</h3>
            <p class="mt-1 max-w-2xl text-sm text-[#4f605a] sm:text-base">${esc(b.desc)}</p>
        </header>

        <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            ${b.temas
              .map(
                (tema, ti) => `
                <li>
                    <button type="button" data-u="${bi}" data-t="${ti}"
                        class="card group flex h-full w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-[#16241f]/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <span class="block aspect-[16/9] w-full overflow-hidden bg-ink">
                            ${renderMedia(tema, false)}
                        </span>
                        <span class="flex flex-1 flex-col p-4">
                            <span class="inline-flex w-fit items-center gap-1.5 rounded-full bg-pine px-2.5 py-1 text-xs font-bold text-white">
                                <i class="h-2 w-2 rounded-full" style="background:${b.color}"></i>
                                ${esc(tema.num)}
                            </span>
                            <span class="mt-3 line-clamp-3 font-semibold leading-snug text-[#16241f]">${esc(tema.titulo)}</span>
                            <span class="mt-auto pt-4 text-sm font-bold text-[#2b6b52] group-hover:underline">Ver tema &rarr;</span>
                        </span>
                    </button>
                </li>
            `,
              )
              .join("")}
        </ul>
    </section>
`,
  )
  .join("");

function setFilter(index) {
  document.querySelectorAll("[data-g]").forEach((sec) => {
    sec.classList.toggle("hidden", index !== -1 && +sec.dataset.g !== index);
  });

  document.querySelectorAll(".pill").forEach((btn) => {
    const active = +btn.dataset.f === index;
    btn.setAttribute("aria-pressed", String(active));
    btn.classList.toggle("bg-pine", active);
    btn.classList.toggle("text-mint", active);
    btn.classList.toggle("border-pine", active);
  });

  select.value = String(index);
}

setFilter(-1);

$("bloque-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const idx = +select.value;
  setFilter(idx);

  const destino =
    idx === -1
      ? $("pills")
      : document.querySelector(`section[data-g="${idx}"]`) || $("pills");

  destino.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", (e) => {
  const pill = e.target.closest(".pill");
  if (pill) {
    setFilter(+pill.dataset.f);
    return;
  }

  const card = e.target.closest(".card");
  if (card) {
    openCard(+card.dataset.u, +card.dataset.t, card);
  }
});

const dlg = $("dlg");

function openCard(bi, ti, cardEl) {
  const b = bloques[bi];
  const tema = b.temas[ti];
  const cardImg = cardEl?.querySelector("img");
  const imgSrc = cardImg ? cardImg.currentSrc || cardImg.src : getTemaImg(tema);

  $("dlg-thumb").innerHTML = `
    <div class="relative h-full w-full bg-pine">
      <img src="${esc(imgSrc)}" alt="${esc(tema.titulo)}" class="h-full w-full object-cover object-center">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent"></div>
    </div>
  `;

  $("dlg-label").style.color = b.color;
  $("dlg-label").textContent = `${b.num} · Tema ${tema.num}`;
  $("dlg-title").textContent = tema.titulo;

  $("dlg-desc").innerHTML = esc(tema.desc)
    .split(/\n+/)
    .map((p) => `<p class="mb-3 last:mb-0">${p}</p>`)
    .join("");

  if (tema.url && tema.url.trim() !== "") {
    const urlLimpia = tema.url.trim();
    const esExterna = /^https?:\/\//i.test(urlLimpia);
    const attrs = esExterna ? 'target="_blank" rel="noopener noreferrer"' : "";

    $("dlg-action").innerHTML = `
      <a href="${esc(urlLimpia)}" ${attrs}
         class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-7 py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-white sm:w-auto">
          <span>Ver presentación</span>
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
      </a>`;
  } else {
    $("dlg-action").innerHTML = `
      <span class="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-bold uppercase tracking-widest text-white/50 sm:w-auto">
          Enlace pendiente
      </span>`;
  }

  dlg.showModal();
}

$("dlg-x").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});

const btnTop = $("btn-top");

window.addEventListener(
  "scroll",
  () => {
    const mostrar = window.scrollY > 400;
    btnTop.classList.toggle("opacity-0", !mostrar);
    btnTop.classList.toggle("translate-y-4", !mostrar);
    btnTop.classList.toggle("pointer-events-none", !mostrar);
  },
  { passive: true },
);

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});