
tv-screen-test: build/tv-screen-test.html

build/tv-screen-test.html: tv-screen-test.js build
	node tv-screen-test.js > $@

post-writer-view-bundle.js:
	browserify post-writer-view-test.js -d -o post-writer-view-bundle.js

build:
	mkdir -p build
