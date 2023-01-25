/**
 * Fill in the blanks to create a script
 * that prints the total cost if someone would buy one of every item
 * (ignoring whether it is in stock or not and not applying any discount)
 */

import "./qs.js";
async function ex4() {
  const query = qs.stringify(
    {
      field: ["price"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  console.log("The query string", query);

  // call the matching endpoint and include the querystring after the ?
  const baseUrl = "http://localhost:1337/api/products";
  const response = await fetch(`${baseUrl}?${query}`);
  const result = await response.json();
  const arr = [];
  const iniValue = 0;
  result.data.map((product) => arr.push(product.attributes.price));
  console.log(arr.reduce((sum, num) => sum + num, iniValue));
}
ex4();
