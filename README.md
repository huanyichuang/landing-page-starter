# Landing Page Starter

This project is used as the starter package of One-page sites.
In order to minimize the size of static resources, no CSS framework is included at the moment.

## Prerequisite
1. This project uses NPM to manage useful packages.
2. I recommend to install Git.

## Installation
1. Clone the project with `git clone git@github.com:huanyichuang/landing-page-starter.git`
2. Modify the file `package.json` to opt out dependencies that you don't need.
3. Modify `Gruntfile.js` to setup the process of compiling SCSS files and JS files.
4. Enter the project directory in your terminal, and use `npm install` to install prepared packages.
5. Edit the `*.scss` files and `js/*.js` files.
6. Use `grunt` command to start minififcation of static resources.

## File structures
### Styles
The file structure of SCSS file is based on the WordPress starter theme [_s](https://underscores.me/).

# Update Log
* 20201206: Added browser-sync and sass-watch

### Assets
If you want to convert your image files to WebP, save your image files in `assets/img`, and the Grunt process will auto detect the files when you execute the `grunt` command.

# 一頁式網站環境建置

這個專案主要是拿來做一頁式 Landing page 用的。
目前還沒有加入任何 CSS 框架，主要是因為目前遇到的專案，如果使用前端框架，反而會增加不必要的靜態資源。

## 安裝條件
1. 這個專案使用 NPM 來進行套件管理。
2. 建議在本機安裝 Git。

## 安裝步驟
1. 透過 Git 指令將專案複製到本機 `git clone git@github.com:huanyichuang/landing-page-starter.git`
2. 調整 `package.json` 檔案，移除不需要的套件。
3. 調整 `Gruntfile.js` 檔案，設定一些預設的程序。
4. 透過終端機或命令提示字元進入專案資料夾，使用 `npm install` 指令安裝預載的套件。
5. 編輯 `*.scss` 與 `js/*.js` 檔案。
6. 透過 `grunt` 指令開始預設的 SCSS 編譯與靜態資源最小化程序。