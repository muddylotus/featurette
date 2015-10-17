#!/bin/sh

mkdir -p build
mkdir -p build/lib
mkdir -p build/spec

babel src/featurette.es6 -o build/lib/featurette.js

# Build our spec files
cp -R spec/jasmine-2.0.0 build/spec/jasmine-2.0.0
cp spec/spec.html build/spec/spec.html
babel spec/spec-helper.es6 -o build/spec/spec-helper.js
babel spec/test-featurettes.es6 -o build/spec/test-featurettes.js
babel spec/featurette-spec.es6 -o build/spec/featurette-spec.js

# Put the final script into lib
cp build/lib/featurette.js lib/featurette.js
