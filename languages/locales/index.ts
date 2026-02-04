import enAuth from './en/auth.json';
import enCommon from './en/common.json';
import enFavorites from './en/favorites.json';
import enHome from './en/home.json';
import enNotifications from './en/notifications.json';
import enRecipeInffo from './en/recipe-info.json';
import enSearch from './en/search.json';
import enSettings from './en/settings.json';
import enValidation from './en/validation.json';
import ruAuth from './ru/auth.json';
import ruCommon from './ru/common.json';
import ruFavorites from './ru/favorites.json';
import ruHome from './ru/home.json';
import ruNotifications from './ru/notifications.json';
import ruRecipeInffo from './ru/recipe-info.json';
import ruSearch from './ru/search.json';
import ruSettings from './ru/settings.json';
import ruValidation from './ru/validation.json';

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    auth: enAuth,
    favorites: enFavorites,
    notifications: enNotifications,
    search: enSearch,
    settings: enSettings,
    validation: enValidation,
    recipeInfo: enRecipeInffo,
  },
  ru: {
    common: ruCommon,
    home: ruHome,
    auth: ruAuth,
    favorites: ruFavorites,
    notifications: ruNotifications,
    search: ruSearch,
    settings: ruSettings,
    validation: ruValidation,
    recipeInfo: ruRecipeInffo,
  },
};
