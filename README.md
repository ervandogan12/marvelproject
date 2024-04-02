# About Project

This project is a gives detailed information for fans of the Marvel Universe.In order to get data ‘http://gateway.marvel.com’ used as base url and data source.It many endpoints in this base url. The informations has shown to the user by using these endpoints. Firts In this application there is a “home page” which is for welcoming users. In the homepage there will be navigation menu which includes characters,comics, events, series and stories. In every menu element there will be deeper information. For example when you clicked to characters tab you can have deeper information such as details of the character, in which comics, events, series and stories she/he includes. And all the details of the menu items will be shown according the data.Besides user can add favorites characters to the favorites page and can remove from the favorites page. Finally user can search specific words in stories by using serch field. 

## Development

This project developed by Ahmet Dogan by using HTML, CSS and Javascript.

## Installing Dependencies

There are three dependency in this project. The "crypto-js" used to mix public key, private key and timestamp in order to produce hash valu which is needed for fetching data from the api. Second dependency "dotenv" it is used in order to use .env file to get secret data. Third debendency is  "dotenv-webpack" which used same porpose for the get secret data. 

# Structure

The structure of the project is like;
[public]
    ├── [assets]
        ├── favicon16.ico
        ├── image_not_available.png
        ├── logo.png
        ├── marvel.mp4
        └── poster.jpg
    └── style.css
[src]
    ├── constant.js
    ├── data.js
    ├── homePage.js
    ├── [pages]
        ├── cathegoryPage.js
        ├── clearSearch.js
        ├── getFavoritesData.js
        ├── insertFavorites.js
        └── searchPage.js
    ├── route.js
    └── [views]
        ├── categoryStarter.js
        ├── cathegoryPageView.js
        ├── favCardPageView.js
        └── homePageView.js
webpack.config.js

- `public` this contains the static files such as assets,CSS etc.
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. All logic lies in here.
  - `views` this contains code to define what the DOM will look like.
  - `homePage.js` this file has initialisation code. It is used for uploading the project or while refreshing it.
  - `data.js` in this file application gets data from api .

# Goal and Backlog
 the backlocks as seen below.

- [x] (must have) To create the project structure
- [x] (must have) To create home page for welcoming users.
- [x] (must have) To create  endpoints to for menu items on the homepages menu.
- [x] (must have) add a favicon
- [x] (should have) To add an item to the favorites such as events. answer.
- [x] (should have) To remove an item from the favorites..answers
- [x] (should have) Searching and finding any item inside the items.


```
