# Landing Page Starter

This project is used as the starter package of One-page sites.
In order to minimize the size of static resources, no CSS framework is included at the moment.

## Prerequisite
1. This project uses NPM to manage useful packages.

## Installation
1. Clone the project with `git clone git@github.com:huanyichuang/landing-page-starter.git`
2. Modify the file `package.json` to opt out dependencies that you don't need.
3. Modify `Gruntfile.js` to setup the process of compiling SCSS files and JS files.
4. Enter the project directory in your terminal, and use `npm install` to install prepared packages.
5. Edit the `*.scss` files and `js/*.js` files.
6. Use `grunt` command to start minififcation of static resources.

## File structures.
### Styles
The file structure of SCSS file is based on the WordPress starter theme [_s](https://underscores.me/).

### Assets
If you want to convert your image files to WebP, save your image files in `assets/img`, and the Grunt process will auto detect the files when you execute the `grunt` command.