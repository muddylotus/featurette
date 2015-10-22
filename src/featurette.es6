class Featurette {

  // We use this function to identify objects that extend Featurette.
  static isFeaturette() {
    return true;
  }

  // Registers a new featurette.
  static register(klass) {
    var name = klass.name;
    if (klass.isFeaturette && klass.isFeaturette()) {
      Featurette.registeredFeatures[name] = klass;
    } else if (window.console) {
      console.error(`Cannot register ${name} since it's not a Featurette.`);
    }
  }

  // Finds featurette elements in the current document and initializes them.
  static load() {
    var elementsNeedingLoad = document.querySelectorAll("[data-featurette]");
    var elements = [];

    // filter the element list to elements that aren't already being loaded
    for (var i = 0; i < elementsNeedingLoad.length; i++) {
      var element = elementsNeedingLoad[i];
      if (!element.featuretteLoading && !element.featurette) {
        elements.push(element);
        element.featuretteLoading = true;
      }
    }

    // initialize the featurettes
    for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
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
        console.error(`Unknown featurette ${featurette}`);
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
Featurette.version = "3.0.0beta";
Featurette.nameCounter = 0;
