const modules = [
  {
    id: "orders",
    icon: "fa fa-file-text-o",
    path: "/Modules/Orders",
    label: "Orders",
  },
  {
    id: "companies",
    icon: "fa fa-address-card-o",
    path: "/Modules/Companies",
    label: "Companies",
  },
  {
    id: "products",
    icon: "fa fa-barcode",
    path: "/Modules/Products",
    label: "Products",
  },
  {
    id: "currencies",
    icon: "fa fa-btc",
    path: "/Modules/Currencies",
    label: "Currencies",
  },
  {
    id: "applicationProperties",
    icon: "fa fa-cogs",
    path: "/Modules/ApplicationProperties",
    label: "Applicaion Properties",
  },
];

const components = [
  {
    id: "comp1",
    icon: "fa fa-table",
    type: "grid",
    label: "Comp1",
  },
  {
    id: "comp2",
    icon: "fa fa-chart-line",
    type: "chart",
    label: "Comp2",
  },
  {
    id: "comp3",
    icon: "fa fa-th-large",
    type: "bricks",
    label: "Comp3",
  },
];

const examples = [
  {
    id: "ex1",
    icon: "fa fa-free-code-camp",
    descriptor: "Counter Using Class Components",
    path: "/Examples/CounterClass",
    label: "Counter Class Components",
  },
  {
    id: "ex2",
    icon: "fa fa-free-code-camp",
    descriptor: "Counter Using Hooks",
    path: "/Examples/CounterHooks",
    label: "Counter Using Hooks",
  },
  {
    id: "ex3",
    icon: "fa fa-free-code-camp",
    descriptor: "Quiz Using useReducer",
    path: "/Examples/Quiz1",
    label: "Quiz Reducer / Global Context",
  },
  {
    id: "ex301",
    icon: "fa fa-free-code-camp",
    descriptor: "Photos Class",
    path: "/Examples/Photos",
    label: "Photos -  Using Class / Table",
  },
  {
    id: "ex31",
    icon: "fa fa-free-code-camp",
    descriptor: "Quiz Using useReducer",
    path: "/Examples/Quiz2",
    label: "Quiz2 Reducer Global Context",
  },
  {
    id: "ex401",
    icon: "fa fa-free-code-camp",
    descriptor: "Shopping Cart useReducer",
    path: "/Examples/ShoppingCart",
    label: "ShoppingCart Reducer Global Context",
  },
  {
    id: "ex4001",
    icon: "fa fa-free-code-camp",
    descriptor: "Wizard",
    path: "/Examples/Wizard",
    label: "React Wizard",
  },
  {
    id: "ex41",
    icon: "fa fa-free-code-camp",
    descriptor: "Todos full API",
    path: "/Examples/AdvancedTodos",
    label: "Add/Edit/Delete Using Class",
  },
  {
    id: "ex4011",
    icon: "fa fa-free-code-camp",
    descriptor: "Todos full API",
    path: "/Examples/Meetings",
    label: "Mettings Add/Edit/Delete ",
  },
  {
    id: "ex4",
    icon: "fa fa-free-code-camp",
    descriptor: "Table Grid",
    path: "/Examples/Todos",
    label: "Todos Reducer",
  },
  {
    id: "ex5",
    icon: "fa fa-free-code-camp",
    descriptor: "React Fundamental",
    path: "/Examples/Fundamental",
    label: "React Fundamental",
  },
  {
    id: "ex6",
    icon: "fa fa-free-code-camp",
    descriptor: "React Context API",
    path: "/Examples/ContextAPI",
    label: "React Context API",
  },
  {
    id: "ex7",
    icon: "fa fa-free-code-camp",
    descriptor: "Slide Show",
    path: "/Examples/SlideShow",
    label: "React Slide Show",
  },
  {
    id: "ex707",
    icon: "fa fa-free-code-camp",
    descriptor: "Memory Game",
    path: "/Examples/MemoryGame",
    label: "React Memory Game",
  },
];
const images = [
  {
    id: 0,
    desc: "this is artificial-intelligence-concept-picture",
    url:
      "https://media.istockphoto.com/photos/artificial-intelligence-concept-picture-id1092659294",
  },
  {
    id: 1,
    desc: "this is concept-with-a-tablet-computer-picture",
    url:
      "https://media.istockphoto.com/photos/concept-with-a-tablet-computer-picture-id1252981448",
  },
  {
    id: 2,
    desc:
      "this is application-programming-interface-concept-api-concept-with-young-man-picture",
    url:
      "https://media.istockphoto.com/photos/application-programming-interface-concept-api-concept-with-young-man-picture-id1215417094",
  },
  {
    id: 3,
    desc:
      "this is smart-retail-concept-man-hand-tyr-to-use-machine-deep-learning-with-picture",
    url:
      "https://media.istockphoto.com/photos/smart-retail-concept-man-hand-tyr-to-use-machine-deep-learning-with-picture-id1156165816",
  },
];
const questions = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    label: "What is the correct answer of 4 + 4 ?",
    answers: [
      {
        id: 1,
        answer: 4,
      },
      {
        id: 2,
        answer: 6,
      },
      {
        id: 3,
        answer: 7,
      },
      {
        id: 4,
        answer: 8,
        correct: true,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    label: "What is the correct answer of 3 + 2 ?",
    answers: [
      {
        id: 5,
        answer: 5,
        correct: true,
      },
      {
        id: 6,
        answer: 10,
      },
      {
        id: 7,
        answer: 17,
      },
      {
        id: 8,
        answer: 2,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    label: "What is the correct answer of 5 + 5 ?",
    answers: [
      {
        id: 9,
        answer: 10,
        correct: true,
      },
      {
        id: 10,
        answer: 16,
      },
      {
        id: 11,
        answer: 17,
      },
      {
        id: 12,
        answer: 18,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    label: "What is the correct answer of 3 + 9 ?",
    answers: [
      {
        id: 13,
        answer: 6,
      },
      {
        id: 14,
        answer: 125,
      },
      {
        id: 15,
        answer: 5,
      },
      {
        id: 16,
        answer: 12,
        correct: true,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    label: "What is the correct answer of 2 + 4 ?",
    answers: [
      {
        id: 17,
        answer: 4,
      },
      {
        id: 18,
        answer: 6,
        correct: true,
      },
      {
        id: 19,
        answer: 7,
      },
      {
        id: 20,
        answer: 8,
      },
    ],
  },
];

const questions2 = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    label: "What is the capital of Germany?",
    answers: [
      {
        id: 1,
        answer: "Hamburg",
      },
      {
        id: 2,
        answer: "Madrid",
      },
      {
        id: 3,
        answer: "Barcelona",
      },
      {
        id: 4,
        answer: "Berlin",
        correct: true,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    label: "What is the capital of Spain ?",
    answers: [
      {
        id: 5,
        answer: "Madrid",
        correct: true,
      },
      {
        id: 6,
        answer: "South Africa",
      },
      {
        id: 7,
        answer: "Brazilia",
      },
      {
        id: 8,
        answer: "Rome",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    label: "What is the capital of Italy ?",
    answers: [
      {
        id: 9,
        answer: "Rome",
        correct: true,
      },
      {
        id: 10,
        answer: "Athens",
      },
      {
        id: 11,
        answer: "Paris",
      },
      {
        id: 12,
        answer: "Bouns Aries",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    label: "What is the capital of Argentina ?",
    answers: [
      {
        id: 13,
        answer: "London",
      },
      {
        id: 14,
        answer: "Paris",
      },
      {
        id: 15,
        answer: "Rome",
      },
      {
        id: 16,
        answer: "Bouns Aries",
        correct: true,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    label: "What is the capital of United kingdom ?",
    answers: [
      {
        id: 17,
        answer: "Prague",
      },
      {
        id: 18,
        answer: "Rome",
      },
      {
        id: 19,
        answer: "London",
        correct: true,
      },
      {
        id: 20,
        answer: "Paris",
      },
    ],
  },
];
export function getModules() {
  return modules;
}

export function getComponents() {
  return components;
}

export function getExamples() {
  return examples;
}
export function getQuestions2() {
  return questions2;
}
export function getQuestions() {
  return questions;
}
export function getShoppingCart() {
  return new Promise();
}
export function getImages() {
  return new Promise((resolve, reject) => {
    resolve(images);
  });
}
