describe("Cats.js", function() {
  const url = "http://agl-developer-test.azurewebsites.net/people.json";
  var jsonData;

  beforeEach(function(done) {
    getJson(url, function(data) {
      jsonData = data;
      done();
    });
  });

  it("should be able to get JSON from remote URL", function() {
    expect(jsonData).toBeTruthy();
  });

  it("should parse the JSON data into an array of correct male cat names", function() {
    var males = extractPetNames(jsonData, "Male");
    expect(males).toEqual(["Garfield", "Tom", "Max", "Jim"]);
  });

  it("should parse the JSON data into an array of correct female cat names", function() {
    var females = extractPetNames(jsonData, "Female");
    expect(females).toEqual(["Garfield", "Tabby", "Simba"]);
  });
});
