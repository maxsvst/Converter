export const URL =
  "https://api.apilayer.com/fixer/latest?symbols=USD,EUR,UAH&base=UAH";

const myHeaders = new Headers();
myHeaders.append("apikey", "fZ9AXes8ZiL9z4zH0Tu74ov7arsSHcqi");

export const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const numFormat = (number) => {
  return number.toFixed(3);
};
