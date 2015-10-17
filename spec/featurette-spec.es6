describe("Featurette", () => {
  it("registers featurettes", () => {
    expect(Featurette.registeredFeatures["exclamation"]).toBeDefined();
  });

  it("executes features when load is run", () => {
    Featurette.load();
    var element = document.getElementsByTagName("h1")[0];
    expect(element.innerHTML).toEqual("Exclamation!");
  });

  it("gives ids to featurettes without them", () => {
    var element = document.getElementsByTagName("h1")[0];
    expect(element.id.indexOf("featurette-")).toEqual(0);
  });

  it("doesn't give ids to features that already have ids", () => {
    var element = document.getElementById("so-awesome");
    expect(element.innerHTML).toEqual("So awesome!");
  });

  describe("calling load subsequent times", () => {
    it("ignores featurettes that have already loaded", () => {
      var list = document.getElementById("exclamatory-list");
      list.innerHTML = "<li id=\"so-cool\" data-featurette=\"exclamation\">So cool</li>";

      Featurette.load();

      var element = document.getElementsByTagName("h1")[0];
      expect(element.innerHTML).toEqual("Exclamation!");
    });

    it("loads unloaded featurettes", () => {
      var element = document.getElementById("so-cool");
      expect(element.innerHTML).toEqual("So cool!");
    });

    describe("calling Featurette.load inside a featurette's constructor", () => {
      it("doesn't make the world implode", () => {
        expect(Featurette.get("boom")).toBeDefined();
      });
    });
  });
});
