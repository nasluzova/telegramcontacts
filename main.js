const telegramContacts = {
  list: {
    "max gud": undefined,
    "Викуля Бойкова": +79811997891,
    Дашка: +79019981108,
    "Karina Avagyan": +381605599855,
    "Маша Кандинская": +79052032688,
    Игорь: undefined,
    Алиса: +79643343243,
    "Matija Stepanović": +79261346436,
    Ску: +79994417546,
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
    delete telegramContacts.list[name];
  },
};
telegramContacts.add("Tara", 12345);
telegramContacts.delete("Karina Avagyan");
console.log(telegramContacts);

const phoneBook = {
  list: {
    John: 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111,
  },
};
for (const name in phoneBook.list) {
  console.log(name + "-" + phoneBook.list[name]);
}
const John = "John";
const Pete = "Pete";
const list = {
  John,
  Pete,
};
const phoneBook1 = {
  list,
};
console.log(phoneBook1);
