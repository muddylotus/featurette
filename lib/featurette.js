"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      var _iteratorNormalCompletion = true;

      // initialize the featurettes
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elementsNeedingLoad[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          if (!element.featuretteLoading && !element.featurette) {
            elements.push(element);
            element.featuretteLoading = true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;

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
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
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

exports["default"] = Featurette;

Featurette.registeredFeatures = {};
Featurette.version = "1.3.0";
Featurette.nameCounter = 0;
module.exports = exports["default"];
