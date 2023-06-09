const questions = [
  {
    text: "Яка столиця України?",
    choices: ["Київ", "Харків", "Львів", "Одеса"].sort(() => Math.random() - 0.5),
    answer: "Київ",
  },
  {
    text: "Яка найбільша річка України?",
    choices: ["Дніпро", "Дунай", "Дністер", "Прут"].sort(() => Math.random() - 0.5),
    answer: "Дніпро",
  },
  {
    text: "Як називається найвища гора Українських Карпат?",
    choices: ["Говерла", "Піп Іван Чорногірський", "Петрос", "Гимба"].sort(() => Math.random() - 0.5),
    answer: "Говерла",
  },
  {
    text: "Який кольори має прапор України?",
    choices: ["Жовтий і блакитний", "Червоний і чорний", "Зелений і синій", "Білий і червоний"].sort(
      () => Math.random() - 0.5
    ),
    answer: "Жовтий і блакитний",
  },
  {
    text: "Україна розташована в:",
    choices: ["Східній Європі", "Південній Азії", "Північній Америці", "Центральній Африці"].sort(
      () => Math.random() - 0.5
    ),
    answer: "Східній Європі",
  },
  {
    text: "Яка назва найбільшого озера в Україні?",
    choices: ["Світязь", "Ялпуг", "Молоде", "Синевир"].sort(() => Math.random() - 0.5),
    answer: "Світязь",
  },
  {
    text: "Ким був Тарас Шевченко?",
    choices: ["Письменником", "Художником", "Музикантом", "Політиком"].sort(() => Math.random() - 0.5),
    answer: "Письменником",
  },
  {
    text: "Хто є автором 'Кобзаря'?",
    choices: ["Тарас Шевченко", "Іван Франко", "Леся Українка", "Микола Гоголь"].sort(() => Math.random() - 0.5),
    answer: "Тарас Шевченко",
  },
  {
    text: "Яка назва найвідомішого українського фестивалю?",
    choices: ["Gogolfest", "Koktebel Jazz Festival", "Atlas Weekend", "Захід"].sort(() => Math.random() - 0.5),
    answer: "Atlas Weekend",
  },
  {
    text: "Яка назва найбільшого національного парку в Україні?",
    choices: ["Карпати", "Синевир", "Голосіївський", "Олешківські піски"].sort(() => Math.random() - 0.5),
    answer: "Олешківські піски",
  },
];

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

export default shuffledQuestions;
