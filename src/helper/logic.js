let upperCaseText = (input) => {
  return input.toUpperCase();
};

let lowerCaseText = (input) => {
  return input.toLowerCase();
};

let removeSpace = (input) => {
  return input.replace(/\s+/g, " ").trim();
};

let clearText = (input) => {
  return "";
};

let copyText = (input) => {
  navigator.clipboard.writeText(input);
  return input;
};

let functionalities = [
  { title: "Uppercase", func: upperCaseText },
  { title: "Lowercase", func: lowerCaseText },
  { title: "Remove Space", func: removeSpace },
  { title: "Copy", func: copyText },
  { title: "Clear", func: clearText },
];

export {
  functionalities,
  upperCaseText,
  lowerCaseText,
  removeSpace,
  copyText,
  clearText,
};
