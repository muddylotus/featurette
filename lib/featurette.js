"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Featurette = (function () {
  function Featurette() {
    _classCallCheck(this, Featurette);
  }

  _createClass(Featurette, null, [{
    key: "register",

    // Registers a new featurette.
    value: function register(name, klass) {
      Featurette.registeredFeatures[name] = klass;
    }

    // Finds featurette elements in the current document and initializes them.
  }, {
    key: "load",
    value: function load() {
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
      for (var i = 0; i < elements.length; i++) {
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
          console.log("Unknown featurette " + featurette);
        }
      }
    }

    // Finds the featurette with the given id
  }, {
    key: "get",
    value: function get(id) {
      var element = document.getElementById(id);
      if (element) {
        return element.featurette;
      }
    }
  }]);

  return Featurette;
})();

Featurette.registeredFeatures = {};
Featurette.version = "3.0.0beta";
Featurette.nameCounter = 0;
