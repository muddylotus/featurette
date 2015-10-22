class Exclamation extends Featurette {
  constructor(element) {
    super(element);
    element.innerHTML = element.innerHTML + "!";
  }
}
Featurette.register(Exclamation);

class ExclamationGenerator extends Featurette {
  constructor(element) {
    super(element);
    element.innerHTML = "<div data-featurette=\"Exclamation\">Cool Beans</div>";
    Featurette.load();
  }
}
Featurette.register(ExclamationGenerator);
