const keysNumber = [
  97, 98, 99, 100, 101, 102, 103, 104, 105, 96, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 48,
];

const changeNumber = (event) => {
  var reg = /^\d+$/;

  console.log(parseInt(event.target.value));

  // if (parseInt(event.target.value)) event?.preventDefault();
};

export default changeNumber;
