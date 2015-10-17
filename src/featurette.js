export default class Featurette {

  // Registers a new featurette.
  static register(name, klass) {
    Featurette.registeredFeatures[name] = klass;
  }

  // Finds featurette elements in the current document and initializes them.
  static load() {
    var elementsNeedingLoad = document.querySelectorAll("[data-featurette]");
    var elements = [];

    // filter the element list to elements that aren't already being loaded
    for (var element of elementsNeedingLoad) {
      if (!element.featuretteLoading && !element.featurette) {
        elements.push(element);
        element.featuretteLoading = true;
      }
    }

    // initialize the featurettes
    for(var element of elements) {
      var featurette = element.getAttribute("data-featurette");
      var klass = Featurette.registeredFeatures[featurette];

      if (klass) {
        var id = element.id;

        // generate an id for the element if one doesn't already exist
        if (!id || id == "") {
          Featurette.nameCounter += 1;
          id = "featurette-#{@featurettes_counter}";
          element.id = id;
        }

        var obj = new klass(element);
        element.featurette = obj;
      } else if (window.console) {
        console.log(`Unknown featurette ${featurette}`);
      }
    }
  }

  // Finds the featurette with the given id
  static get(id) {
    var element = document.getElementById(id);
    if (element) {
      return element.featurette;
    }
  }
}

Featurette.registeredFeatures = {};
Featurette.version = "1.3.0";
Featurette.nameCounter = 0;
