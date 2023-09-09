import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, ccn3 } = country;
  let words = test(parseInt(population));
  //   console.log(country);
  const [visit, isvisit] = useState(false);
  const isvisited = () => {
    isvisit(true);
    if (visit) isvisit(false);
  };
  return (
    <div className="country" style={{ backgroundColor: visit ? "black" : "" }}>
      <h3>{name?.common}</h3>
      <img className="flag" src={flags.png} alt="" />
      <h4>Population:{" " + words + "(" + population + ")"}</h4>
      <p>
        <small>Country code :{ccn3}</small>
      </p>
      <button onClick={isvisited}>{visit ? "visited" : "Not visited"}</button>
    </div>
  );
};

export default Country;
function test(n) {
  var word = "",
    single_digit,
    double_digit,
    rem,
    below_hundred;
  if (n < 0) return false;
  single_digit = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  double_digit = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  below_hundred = [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  if (n === 0) return "Zero";
  function translate(n) {
    if (n < 10) {
      word = single_digit[n] + " ";
    } else if (n < 20) {
      word = double_digit[n - 10] + " ";
    } else if (n < 100) {
      rem = translate(n % 10);
      word = below_hundred[(n - (n % 10)) / 10 - 2] + " " + rem;
    } else if (n < 1000) {
      word =
        single_digit[Math.trunc(n / 100)] + " Hundred " + translate(n % 100);
    } else if (n < 1000000) {
      word =
        translate(parseInt(n / 1000)).trim() +
        " Thousand " +
        translate(n % 1000);
    } else if (n < 1000000000) {
      word =
        translate(parseInt(n / 1000000)).trim() +
        " Million " +
        translate(n % 1000000);
    } else {
      word =
        translate(parseInt(n / 1000000000)).trim() +
        " Billion " +
        translate(n % 1000000000);
    }
    return word;
  }
  var result = translate(n);
  return result.trim();
}
