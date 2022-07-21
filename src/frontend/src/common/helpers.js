import { SAUCE_LIST, SIZE_LIST, DOUGH_LIST } from "@/common/constants";

// из поля image получает имя ингедиента
export const normalizeIngredients = (ingredients) => {
  return ingredients.map((el) => ({
    ...el,
    value: (() => {
      const tempArray = el.image.split("/");
      const nameImg = tempArray[tempArray.length - 1].split(".");
      return nameImg[0];
    })(),
  }));
};

// Нормализация соусов
export const normalizeSauce = (sauces) => {
  return sauces.map((sauceItem) => ({
    ...sauceItem,
    nameEn: SAUCE_LIST.find(({ name }) => sauces.name === name)?.nameEn,
  }));
};

// Добавляет размер пиццы в словах
export const normalizeSize = (sizes) => {
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
