# HOW TO USE GIT
___________________________________________________________________________________________________
## Instruction
1. На github сделать fork. (копирования репозтория из командного проекта к себе, будет высвечиваться как обычный твой репозиторий)
2. Зайти на страницу своего репозитория {your_name}/POS-Card. Сделать clone (скопировть ссылку).
3. Открыть на компьютере папку, в ней git bush. Склонировать проект на компьютер:

    `git clone {link of repo}`

4. Создать свою ветку

    `git checkout -b {name of branch}`

5. Дальше приступать к работе, стараться как можно больше коммитить. Написал функцию - закоммитил, изменил подключение библеотек - закоммитил
6. Когда "сегодняшняя" часть работы будет готова, заливаешь к себе на гит.
7. Когда задача из Notion будет готова, делаешь pull request 

О создании pull request можно посмотреть здесь: https://www.youtube.com/watch?v=rgbCcBNZcdQ

## Commands of git
1. Клонирование репозитория

    `git clone {link of repo}`

2. Сохранение изменений

    `git add .`
    
    `git commit -m "{name of commit}"`

3. Проверка статуса репозитория (есть ли несохраненные даные)
Будет подсвечивть красным не сохраненные данные и зеленым сохраненные, но не закоммиченные

    `git status`

4. Добавить файл в .gitignore

    `git clone {link of repo}`

5. Залить себе на гит

    `git push -u origin master`

___________________________________________________________________________________________________
# HOW TO CREATE BASIC VK MINI APP AND START IT
___________________________________________________________________________________________________

[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# Create VK Mini App [![npm][npm]][npm-url] [![deps][deps]][deps-url]

## How to install

### Create VK Mini App with gh-pages deploy

`npx @vkontakte/create-vk-mini-app <app-directory-name>`

### Create VK Mini App with Zeit deploy

Firstly, you have to create Zeit account and connect it with your GitHub profile — https://zeit.co/

`npx @vkontakte/create-vk-mini-app <app-directory-name> --zeit`

### Create VK Mini App with Surge deploy

Firstly, you have to create Surge account and Surge-domain — https://surge.sh/

`npx @vkontakte/create-vk-mini-app <app-directory-name> --surge <surge-domain>`

## How to start work with app

Go to created folder and run:
`yarn start` || `npm start` — this will start dev server with hot reload on `localhost:10888`.

`yarn run build` || `npm run build` — this will build production bundle, with tree-shaking, uglify and all this modern fancy stuff

[npm]: https://img.shields.io/npm/v/@vkontakte/create-vk-mini-app.svg
[npm-url]: https://npmjs.com/package/@vkontakte/create-vk-mini-app

[deps]: https://img.shields.io/david/vkcom/create-vk-mini-app.svg
[deps-url]: https://david-dm.org/vkcom/create-vk-mini-app