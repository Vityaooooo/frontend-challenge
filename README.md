# Задание для Front-end стажёра
Меня зовут Илясов Виктор
Данный проект был выполнен для прохождения тестового задания на позицию стажера в VK в команду "Учи.ру"

## Перед запуском
При клонировании репозитория необходимо создать файл `.env`, пример его содержимого можно увидеть в `.env.example`
Личный токен для выполнения запросов к API вы можете получить на сайте https://thecatapi.com

## С какими трудностями столкнулся
- **SVG**
реализация заливки кнопки `Like` сделана не лучшим образом. Связано это с тем, что при экспорте `svg` из макета Figma необходимо реализовать отдельно
контур и заливку, на что у меня не хватило времени
По этой причине заливка в проекте реализована с помощью css свойства `clip-path`

**UDP**:
Это исправлено в ветке fix/svg

- **Webpack**
Для реализации проекта был использован стартер `Webpack`, который я реализовывал в рамках самостоятельного изучения, и дополнен следующим функционалом:
  - добавлен prettier
  - добавлен eslint
  - для дальнейшего развития проекта (добавления типизации) добавлен ts-loader и ts

## Что можно улучшить
- Типизация
при необходимости масштабирования проекта осущесвил бы переход на typescript для уменьшения ошибок во время разработки
- Тесты
для проверки корректности работы бизнес-логики и компонентов
- Redux (Optional)
при реализации сложной логики хранения информации на стороне клиента добавил бы state manager 

## ТЗ проекта:
- по умолчанию должна открываться вкладка "все котики"
- у котика должна быть возможность добавить в "любимые" и убрать из "любимых"
- данные о "любимых" котиках должны хранится на клиенте
- на вкладке "любимые котики" должны отображаться добавленные в "любимые" котики
- реализация адаптивности будет плюсом, но не обязательна
- бесконечная прокрутка будет плюсом, но не обязательна
- можно использовать любой фреймворк включая vanilla.js

API: https://thecatapi.com
Дизайн - https://bit.ly/3utxaL2
