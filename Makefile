
tv-screen-test: build/tv-screen-test.html

build/tv-screen-test.html: tv-screen-test.js build
	node tv-screen-test.js > $@

build:
	mkdir -p build
