этот минипроект создан для обучения наших QA 

## Перед тем как начать писать тесты

1. Установить удобное вам ИДЕ, например https://code.visualstudio.com/download
2. качаем и устанавливаем актуальню версию `Node.js` (Recommended, только не Latest Features) https://nodejs.org/en/
3. ставим менеджер пакетов `nvm`, для убунту это команда `sudo apt install npm`
4. проверить версию ноды можно так `node -v`
5. склонировать этот репозиторий себе в любое место `git clone git@github.com:ILyaLupach/qa-automation.git` или `git clone https://github.com/ILyaLupach/qa-automation.git`
  -если вдруг гит не установлен, то установить https://git-scm.com/

## Разворачиваем проект
1. после того как склонируете проект, откройте папку с проектом в вашем ИДЕ
2. в консоли (именно в папке с проектом) вводим команду `npm install`, загружаем все необходимые зависимости
3. тесты запускаются командой `npm run test`, тест запустится в браузере хром
4. запустится простой тест по открытию реги и вводом невалидных значений


## ...
по работе с самим webdriverio самые частоиспользуемые кейсы постараюсь показать в на митапе, до этого можно почитать офф доки https://webdriver.io/docs/selectors

В этом тесте можно посмотреть как находить елементы **$('#signup-country-selection')**, а так же простые варианты тестов **expect**
