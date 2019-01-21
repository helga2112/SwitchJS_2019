"В модуле solution.js есть несколько экспортированных функций:

export const getFirstWeekday = () => 'Monday'; 

export const getSecondWeekday = () => 'Tuesday'; 

const getFifthWeekday = () => 'Friday';

export default getFifthWeekday;

Как правильно импортировать функцию getFirstWeekday
в модуле test.js?

import { ... } from './solution.js';

====================================================== 
Модуль strings содержит (и экспортирует) функцию length,
которая возвращает длину переданной строки.
Каким должен быть импорт для того чтобы сработал этот код?
const endWith = (str, char) => str[length(str) - 1] === char;

endWith('hello', 'o'); // true
endWith('hey', 'h'); // false

- import { length } from './strings';
- import length from './strings';
- import { strings } from './strings';
- import * as strings from './strings';
- import * as length from './strings';"
