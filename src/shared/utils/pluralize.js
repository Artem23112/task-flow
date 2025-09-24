/**
 * Универсальная функция склонения слов
 * @param {number} count - число
 * @param {[string, string, string]} forms - массив из 3 форм слова
 */

export function pluralize(count, forms) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return forms[0];
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return forms[1];
  }
  return forms[2];
}
