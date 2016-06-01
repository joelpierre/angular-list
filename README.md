# Angular-list

Simple app that pulls dummy datas from api. 
It features pagination and search by title.

# Folder structure of development app

```
app/
├── scss/
│   ├── _all.scss
|   ├── main.scss
|   ├── _settings.scss
│   └──blocks/
│      ├── _album.scss
│      ├── _filter.scss
│      ├── _header.scss
|      └── _page-controls.scss
└── js/
    ├── app.js
    ├── controller.js
    ├── factory.js
    └── filter.js
```
#Gulp server

When gulp runs is possible to preview the app at localhost:8080. Gulp serve will autoreload the page when the any file in the dist folder is changed.
