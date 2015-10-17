class Exclamation {
  constructor(element) {
    element.innerHTML = element.innerHTML + "!";
  }
}
Featurette.register("exclamation", Exclamation)

class ExclamationGenerator {
  constructor(element) {
    element.innerHTML = "<div data-featurette=\"exclamation\">Cool Beans</div>";
    Featurette.load();
  }
}
Featurette.register("exclamation-generator", ExclamationGenerator)
