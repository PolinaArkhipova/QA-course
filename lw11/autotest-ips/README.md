# Установка
Для работы необходимо вытянуть зависимости командой 
`npm i`

# Запуск
`npx wdio ./src/wdio.conf.ts`

## Обновление chromedriver
`npm i chromedriver@latest --save-dev`

# Coding Conventions
## Имена локальных констант/переменных
- camelCase
- имена начинаются с буквы
- осмысленные наименования, представляющие из себя существительное

## Имена глобальных констант
- SCREAMING_SNAKE_CASE
- имена начинаются с буквы
- осмысленные наименования, представляющие из себя существительное

## Имена функций и методов
- camelCase
- имена начинаются с буквы
- осмысленные наименования, начинающиеся с глагола

## Имена классов/типов
- PascalCase
- имена начинаются с буквы
- осмысленные наименования, представляющие из себя существительное

## Отступы кода
- отступ в 4 пробела

## Блоки
- открывающая скобка остается в конце строки
- закрывающая скобка на новой строке, отступ такой же как у открывающей скобки
- один пробел перед открывающей скобкой

## Объекты
- открывающая строка на той же строке, что и имя объекта
- закрывающая скобка на новой строке, отступ такой же как у открывающей скобки
- между свойством объекта и его значением - двоеточие и пробел
- каждая пара свойство-значение завершается запятой

## Код
- хорошая практика - инициализация переменных при их объявлении
- предпочтительнее использовать const при создании переменных
- использовать ‘’ вместо new String()
- использовать 0 вместо new Number()
- использовать false вместо new Boolean()
- использовать {} вместо new Object()
- использовать [] вместо new Array()
- использовать /()/ вместо new RegExp()
- использовать function (){} вместо new Function()
- предпочтительнее при сравнении использовать ===
- инструкцию switch завершайте значением default
- для объединения строк предпочтительнее использовать конструкцию `text ${const}`
- для синхронного кода вместо нативного цикла for предпочтительнее использовать встроенные функции: map() - если нужно преобразовать весь массив, forEarch() - если - для каждого элемента нужно вызвать другую функцию, но исходный массив при этом не нужно преобразовать, find(), filter(), some() и т.д.
- для acинхронного кода предпочтительнее использовать цикл for-of
