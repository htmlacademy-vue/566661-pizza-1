import { DOUGH_LIST, SAUCE_LIST, SIZE_LIST } from "@/common/constants";
import resources from "@/common/enums/resources";
import { AuthApiService, ReadOnlyApiService } from "@/services/api.service";

// из поля image получает имя ингедиента
export const normalizeIngredients = (ingredients) => {
  return ingredients.map((el) => ({
    ...el,
    value: (() => {
      const tempArray = el.image.split("/");
      const nameImg = tempArray[tempArray.length - 1].split(".");
      return nameImg[0];
    })(),
    count: 0,
  }));
};

// Нормализация соусов
export const normalizeSauces = (sauces) => {
  return sauces.map((sauceItem) => ({
    ...sauceItem,
    value: SAUCE_LIST.find(({ name }) => sauceItem.name === name)?.value,
  }));
};

// Добавляет размер пиццы в словах
export const normalizeSizes = (sizes) => {
  return sizes.map((sizeItem) => ({
    ...sizeItem,
    value: SIZE_LIST.find(({ name }) => sizeItem.name === name)?.value,
  }));
};

// Добавляет толщину пиццы в словах
export const normalizeDough = (dough) => {
  return dough.map((doughItem) => ({
    ...doughItem,
    value: DOUGH_LIST.find(({ name }) => doughItem.name === name)?.value,
  }));
};

export const capitalize = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const createResources = () => {
  return {
    [resources.AUTH]: new AuthApiService(),
    [resources.USERS]: new ReadOnlyApiService(resources.USERS),
  };
};

export const setAuth = (store) => {
  store.$api.auth.setAuthHeader();
  store.dispatch("Auth/getMe");
};
