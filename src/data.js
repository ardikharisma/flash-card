const flashCards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function scoped, let and const are block scoped. const cannot be reassigned."
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its outer function scope even after the outer function has returned."
  },
  {
    question: "What is React used for?",
    answer:
      "React is a JavaScript library for building user interfaces."
  },
  {
    question: "Explain the virtual DOM in React.",
    answer:
      "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize DOM updates."
  },
  {
    question: "What is the useEffect hook in React?",
    answer:
      "useEffect lets you perform side effects in function components, such as fetching data or directly manipulating the DOM."
  }
];

export default flashCards;