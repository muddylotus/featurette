Featurette
=====

Featurette is a super simple javascript library for adding javascript features to
elements in a web page. It's based on patterns that we used at
[Treehouse](http://teamtreehouse.com) and [The Iron Yard](http://theironyard.com)
to make our javascript less obtrusive.

Getting Started
----

To add a feature to an element involves writing and registering a class that defines
your feature and then declaring that you want to use that feature on a
particular element. Let's look at a quick example feature. While this
example is written in ES6, you can use practically any flavor of JavaScript
with Featurette.

A feature can be any JavaScript object. Let's define a feature that adds
cool Spanish exclamation marks to whatever element it's applied to.
We're using jQuery with this feature, just to make life a little easier.

Here's the feature:

```coffeescript
class Exclamation {
  constructor(element) {
    var element = $(element);
    var newText = "¡${element.text()}!";
    element.text(newText);
  }
}

Featurette.register("exclamation", Exclamation);
```

We define a class called `Exclamation` with a constructor that takes one
argument, the element that we're attaching the feature to. Once that
class is defined we call `Featurette.register` to register the feature
that we defined. The first argument of `Featurette.register` is the
name we'll use to apply that feature, and the second argument is the
class that we'll instantiate to attach the feature.

Now, let's imagine we want to add the `exclamation` feature to an `h1`
tag in our page. First, we'll ensure that we've called `Featurette.load` once
the DOM loads. Featurette doesn't handle this automatically since there are
quite a few different libraries that handle DOM loaded events, and Featurette
doesn't prefer one of them over the other.

Most people do use jQuery, though, so here's how to handle loading
Featurette with jQuery:

```javascript
$(function() { Featurette.load(); });
```

Now let's attach that `exclamation` feature to the `h1` tag:

```html
<h1 data-featurette="exclamation">Hola</h1>
```

The `data-featurette` attribute on the `h1` tells Featurette what
feature to instantiate. When the document loads, Featurette will
search for all elements with a `data-featurette` attribute and
instantiate the class that corresponds to the feature name given on that
element with `data-featurette`.

Accessing Featurette Objects
-----
Featurette generates an id attribute for any element that doesn't already have
one, and expects ids to be unique. You can call `Featurette.get("[id]")` to
access the feature attached to an element with the passed id.

Contributing
----
Featurette uses Babel to transpile ES6 to something that all browsers can
use. That means you'll need Babel installed to work with Featurette:

```sh
npm install -g babel
```

Once you have Babel installed you can build the project with the `build.sh` script:

```sh
./build.sh
```

The tests are runnable by opening `build/spec/spec.html`.

License
----

Copyright (c) 2013-2015 Alan Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
