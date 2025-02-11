document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "Sobre mí": "About Me",
        "About Me": "Sobre mí",

        "Busco incluirme en una empresa en la que pueda aportar mis conocimientos y habilidades, mejorar mis técnicas y conseguir experiencia tanto en el mundo laboral como en personal.":
        "I am looking to join a company where I can contribute my knowledge and skills, improve my techniques, and gain experience both professionally and personally.",
        "I am looking to join a company where I can contribute my knowledge and skills, improve my techniques, and gain experience both professionally and personally.":
        "Busco incluirme en una empresa en la que pueda aportar mis conocimientos y habilidades, mejorar mis técnicas y conseguir experiencia tanto en el mundo laboral como en personal.",

        "Contacto": "Contact",
        "Contact": "Contacto",

        "Educación y Formación": "Education & Training",
        "Education & Training": "Educación y Formación",

        "Grado Superior en Desarrollo de Aplicaciones Web - IES Hermanos Machado (2022 - Actualidad)":
        "Higher Degree in Web Application Development - IES Hermanos Machado (2022 - Present)",
        "Higher Degree in Web Application Development - IES Hermanos Machado (2022 - Present)":
        "Grado Superior en Desarrollo de Aplicaciones Web - IES Hermanos Machado (2022 - Actualidad)",

        "Bachillerato Científico - IES Hermanos Machado y IES Murillo":
        "Scientific Baccalaureate - IES Hermanos Machado and IES Murillo",
        "Scientific Baccalaureate - IES Hermanos Machado and IES Murillo":
        "Bachillerato Científico - IES Hermanos Machado y IES Murillo",

        "Experiencia Laboral": "Work Experience",
        "Work Experience": "Experiencia Laboral",

        "Auxiliar de Cocinero - Restaurante Caishen (15/09/2023 - Actualidad)":
        "Kitchen Assistant - Caishen Restaurant (09/15/2023 - Present)",
        "Kitchen Assistant - Caishen Restaurant (09/15/2023 - Present)":
        "Auxiliar de Cocinero - Restaurante Caishen (15/09/2023 - Actualidad)",

        "Camarero - 100 Montaditos (01/07/2023 - 10/09/2023)":
        "Waiter - 100 Montaditos (07/01/2023 - 09/10/2023)",
        "Waiter - 100 Montaditos (07/01/2023 - 09/10/2023)":
        "Camarero - 100 Montaditos (01/07/2023 - 10/09/2023)",

        "Auxiliar de Cocinero - Restaurante Caishen (10/2021 - 10/2022)":
        "Kitchen Assistant - Caishen Restaurant (10/2021 - 10/2022)",
        "Kitchen Assistant - Caishen Restaurant (10/2021 - 10/2022)":
        "Auxiliar de Cocinero - Restaurante Caishen (10/2021 - 10/2022)",

        "Competencias": "Skills",
        "Skills": "Competencias",

        "Lenguajes de Programación": "Programming Languages",
        "Programming Languages": "Lenguajes de Programación",

        "Java, JavaScript, CSS, HTML, Python, SQL, PL/SQL, Bootstrap": "Java, JavaScript, CSS, HTML, Python, SQL, PL/SQL, Bootstrap",

        "Herramientas de Desarrollo": "Development Tools",
        "Development Tools": "Herramientas de Desarrollo",

        "Visual Studio Code, Sublime Text, Git, GitHub": "Visual Studio Code, Sublime Text, Git, GitHub",

        "Lenguas": "Languages",
        "Languages": "Lenguas",

        "Lengua Materna: Castellano": "Native Language: Spanish",
        "Native Language: Spanish": "Lengua Materna: Castellano",

        "Otros Idiomas:": "Other Languages:",
        "Other Languages:": "Otros Idiomas:",

        "Inglés Cambridge: Nivel B2": "Cambridge English: Level B2",
        "Cambridge English: Level B2": "Inglés Cambridge: Nivel B2",

        "Inglés Trinity: Nivel B2": "Trinity English: Level B2",
        "Trinity English: Level B2": "Inglés Trinity: Nivel B2",

        "Alemán: Nivel A2": "German: Level A2",
        "German: Level A2": "Alemán: Nivel A2",

        "Competencias Digitales": "Digital Skills",
        "Digital Skills": "Competencias Digitales",

        "Google Tools (Drive, Gmail, etc.)": "Google Tools (Drive, Gmail, etc.)",
        "Redes Sociales": "Social Networks",
        "Social Networks": "Redes Sociales",

        "Prueba de proyecto": "Project Test",
        "Project Test": "Prueba de proyecto",

        "Ver proyecto": "View Project",
        "View Project": "Ver proyecto",

        "Desarrollador Web | Programador | Apasionado por la tecnología":
        "Web Developer | Programmer | Passionate about Technology",
        "Web Developer | Programmer | Passionate about Technology":
        "Desarrollador Web | Programador | Apasionado por la tecnología",

        "Traducir": "Translate",
        "Translate": "Traducir",

        "Todos los derechos reservados.": "All rights reserved.",
        "All rights reserved.": "Todos los derechos reservados."
    };

    let isEnglish = false;

    document.querySelector(".translate-btn").addEventListener("click", function () {
        document.querySelectorAll("h1, h2, h3, p, span, li, button").forEach(el => {
            let text = el.innerText.trim();
            if (translations[text]) {
                el.innerText = translations[text];
            }
        });

        isEnglish = !isEnglish;
        this.innerText = isEnglish ? "Traducir" : "Translate";
    });
});
