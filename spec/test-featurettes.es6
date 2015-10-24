Featurette.register("Exclamation", class extends Featurette {
  constructor(element) {
    super(element);
    element.innerHTML = element.innerHTML + "!";
  }

  name() {
    return data("name");
  }
});

Featurette.register("ExclamationGenerator", class extends Featurette {
  constructor(element) {
    super(element);
    element.innerHTML = "<div data-featurette=\"Exclamation\">Cool Beans</div>";
    Featurette.load();
  }
});
