// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html


"use strict";

/**
 * This function converts Fahrenheit to Celsius
 */
function convertFahrenheitToCelsius() {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit-input').value);

  // process
  const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(3);

  // output
  document.getElementById('celsius-result').innerHTML = 'Celsius: ' + celsius;
}
