// programs-data.js
// Data file for Multi-Culti Curriculum & Age Programs (Ливерпуль / Waterloo)
// Ordered from oldest to youngest with bold introductory descriptions

const programsData = {
  overview: {
    ru: {
      title: "Группы и программы",
      lead: "В Multi-Culti мы распределяем детей по группам не только по возрасту, но и по уровню владения языком, создавая комфортную среду для каждого ребёнка."
    },
    en: {
      title: "Groups & Programs",
      lead: "At Multi-Culti, we group children by both age and Russian proficiency, ensuring a tailored and supportive learning environment for every child."
    }
  },

  // Russian Curriculum Cards (8+ -> 4-5)
  ru: [
    {
      tag: "8+ лет",
      tagClass: "tag-green",
      title: "Чтение, текст и грамматика",
      description: `<strong>Язык как инструмент мышления на основе CLIL.</strong><br>
        <ul class="card-list">
          <li>Чтение и анализ интересных текстов (нон-фикшн и литература);</li>
          <li>Развитие связной устной и письменной речи;</li>
          <li>Изучение грамматики в реальном контексте;</li>
          <li>Дискуссии, проекты и творческие задания.</li>
        </ul>`,
      bgImage: "images/program_grammar.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "7–8 лет",
      tagClass: "tag-green",
      title: "Читаем, пишем и рассуждаем",
      description: `<strong>Уверенная работа с текстом и освоение письменной речи.</strong><br>
        <ul class="card-list">
          <li>Совершенствование навыков чтения и логики;</li>
          <li>Письмо слов, предложений и мини-текстов;</li>
          <li>Умение задавать вопросы и рассуждать;</li>
          <li>Увлекательные языковые игры и задачи.</li>
        </ul>`,
      bgImage: "images/program_reading.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "5–7 лет",
      tagClass: "tag-green",
      title: "Речь, буквы и подготовка к чтению",
      description: `<strong>Активное развитие речи и плавный шаг к грамотности.</strong><br>
        <ul class="card-list">
          <li>Фонематический слух, звуки и буквы;</li>
          <li>Чтение первых слов и предложений;</li>
          <li>Расширение активного словарного запаса;</li>
          <li>Подготовка руки к письму и моторика через крафт.</li>
        </ul>`,
      bgImage: "images/program_letters.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "4–5 лет",
      tagClass: "tag-green",
      title: "Развитие речи",
      description: `<strong>Первые шаги в русском языке через игру и творчество.</strong><br>
        <ul class="card-list">
          <li>Тематическое расширение словарного запаса;</li>
          <li>Понимание и использование новых выражений;</li>
          <li>Развивающие игры и живое общение;</li>
          <li>Творчество, рисование и крафт.</li>
        </ul>`,
      bgImage: "images/program_speech.jpg",
      bgOpacity: 0.88
    }
  ],

  // English Curriculum Cards (Ages 8+ -> Ages 4-5)
  en: [
    {
      tag: "Ages 8+",
      tagClass: "tag-orange",
      title: "Reading, Analysis & Applied Grammar",
      description: `<strong>Language as a critical thinking tool using communicative and CLIL.</strong><br>
        <ul class="card-list">
          <li>Reading and analyzing fiction and non-fiction texts;</li>
          <li>Developing structured spoken and written Russian;</li>
          <li>Contextual grammar practice through real-life scenarios;</li>
          <li>Collaborative projects, debates, and creative tasks.</li>
        </ul>`,
      bgImage: "images/program_grammar.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "Ages 7–8",
      tagClass: "tag-orange",
      title: "Reading, Writing & Reasoning",
      description: `<strong>Building reading fluency, comprehension, and written expression.</strong><br>
        <ul class="card-list">
          <li>Strengthening reading comprehension and logical thinking;</li>
          <li>Constructing sentences and foundational writing;</li>
          <li>Practicing reasoning, questioning, and discussion;</li>
          <li>Linguistic challenges and educational games.</li>
        </ul>`,
      bgImage: "images/program_reading.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "Ages 5–7",
      tagClass: "tag-orange",
      title: "Speech, Letters & Pre-Reading",
      description: `<strong>Developing conversational fluency and steps toward Russian literacy.</strong><br>
        <ul class="card-list">
          <li>Phonemic awareness, alphabet, and sound recognition;</li>
          <li>Reading first words and simple sentences;</li>
          <li>Active vocabulary expansion in context;</li>
          <li>Fine motor skills and handwriting prep via crafts.</li>
        </ul>`,
      bgImage: "images/program_letters.jpg",
      bgOpacity: 0.88
    },
    {
      tag: "Ages 4–5",
      tagClass: "tag-orange",
      title: "Speech Development",
      description: `<strong>First steps in Russian through play, crafts, and interactive storytelling.</strong><br>
        <ul class="card-list">
          <li>Building vocabulary through themed topics;</li>
          <li>Understanding and speaking new expressions;</li>
          <li>Cognitive games and active social interaction;</li>
          <li>Hands-on arts, crafts, and creative drawing.</li>
        </ul>`,
      bgImage: "images/program_speech.jpg",
      bgOpacity: 0.88
    }
  ]
};