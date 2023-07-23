install:
	npm install

serve:
	webpack serve --open --mode development

dev:
	webpack --mode development

build:
	webpack --mode production