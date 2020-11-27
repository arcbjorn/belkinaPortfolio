import { init, addMessages } from 'svelte-i18n';

import EN from './en.json';
import RU from './ru.json';

addMessages('RU', RU);
addMessages('EN', EN);

export function initiateLocalisation() {
  init({
    fallbackLocale: 'EN',
    initialLocale: 'RU',
  });
}
