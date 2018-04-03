"use strict";
const url = "http://agl-developer-test.azurewebsites.net/people.json";

// Call-back function once the JSON data is retrieved
function processJson(data) {
  displayNames(extractPetNames(data, "Male"), "#males");
  displayNames(extractPetNames(data, "Female"), "#females");
}

// Returns the list of pet names for a specified gender
function extractPetNames(data, gender) {
  const genderedData = _.filter(data, {gender: gender});
  const pets = _.flatMap(genderedData, 'pets');
  const cats = _.filter(pets, {type: "Cat"});
  return _.map(cats, "name");
}

// Takes an array of names and appends HTML li elements to the specified element
function displayNames(names, elementSelector) {
  _.forEach(names, function (name) {
    $(elementSelector).append("<li>" + name + "</li>")
  });
}

// Entry point
$.getJSON(url, function (data) {
  processJson(data);
});