const Capitalize = (inpt = "") => {
  const firstChar = inpt.charAt(0).toUpperCase();
  const restPart = inpt.slice(1).toLowerCase();

  return firstChar + restPart;
};

export default Capitalize;
