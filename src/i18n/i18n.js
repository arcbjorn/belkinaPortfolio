import { init, addMessages } from 'svelte-i18n';
import { dictionary } from 'svelte-i18n';

import RU from './ru.json';
import EN from './en.json';

addMessages('RU', RU);
addMessages('EN', EN);

export function initiateLocalisation() {
  init({
    initialLocale: 'ru',
    fallbackLocale: 'en',
  });
}

export function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
  const messsagesFileUrl = `/${_locale}.json`;

  return fetch(messsagesFileUrl)
    .then(response => response.json())
    .then((messages) => {
        dictionary.set({ [_locale]: messages });

        locale.set(_locale);
    });
}
