/*
TODO: Аналіз покупок.
TODO:
TODO: Є об'єкт products, який представляє покупки користувача в онлайн-магазині.
TODO: 1. Виведе у консоль повідомлення про кожен товар у форматі. (Користувач купив 5 одиниць товару apple).
TODO: 2. Порахуйте загальну кількість всіх куплених товарів.
TODO: 3. Створи новий масив із назвами лише тих товарів, яких було куплено 2 або більше одиниць.
*/

// const products = {
//   apple: 5,
//   banana: 2,
//   orange: 4,
//   mango: 0,
//   pineapple: 1,
// };

//~ 1.

// const productsKeys = Object.keys(products);
//
// console.log(products);
// console.log(productsKeys);
//
// for (const key of productsKeys) {
//   console.log(`Користувач купив ${products[key]} одиниць товару ${key}`);
// }

//~ 2.

// const productsValues = Object.values(products);
//
// console.log(products);
// console.log(productsValues);
//
// let totalProduct = 0;
//
// for (const value of productsValues) {
//   totalProduct += value;
// }
//
// console.log(totalProduct);

//~ 3.

// const productsKeys = Object.keys(products);
// const productsNames = [];
//
// console.log(products);
// console.log(productsKeys);
//
// for (const key of productsKeys) {
//   if (products[key] >= 2) {
//     productsNames.push(key);
//   }
// }
//
// console.log(productsNames);

/*
TODO: Методи для виводу інформації про товар.
TODO:
TODO: Створи об'єкт product з властивостями title, price, category.
TODO: Додай метод getInfo(), який повертає рядок типу: `Товар: {title}, Категорія: {category}, Ціна: {price} грн`
*/

// const product = {
//   title: 'Товар 1',
//   price: 10000,
//   category: 'електроніка',
//
//   getInfo() {
//     return `Товар: ${this.title}, Категорія: ${this.category}, Ціна: ${this.price} грн`;
//   },
// };
//
// console.log(product);
//
// console.log(product.getInfo());

/*
TODO: Створення методу в об'єкті.
TODO:
TODO: Створи об'єкт user з властивостями firstName, lastName та age, а також методом getFullname().
TODO: Метод має повертати повне ім'я користувача.
*/

// const user = {
//   firstName: 'Glen',
//   lastName: 'Riley',
//   age: 30,
//
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
// };
//
// console.log(user);
// console.log(user.getFullName());

/*
TODO: Метод для додавання друзів.
TODO:
TODO: Є об'єкт user з масивом friends.
TODO: Додай наступні методи:
TODO: - addFriend(friendName) - додає ім'я в список друзів.
TODO: - removeFriend(friendName) - видаляє ім'я із списку друзів
*/

// const user = {
//   friends: ['Claudia', 'Justin', 'Ada', 'Lilly'],
//
//   addFriend(friendName) {
//     if (friendName === '') {
//       return;
//     }
//
//     this.friends.push(friendName);
//   },
//   removeFriend(friendName) {
//     const indexOfFriendName = this.friends.indexOf(friendName);
//
//     if (indexOfFriendName === -1 ) {
//       console.log(`${friendName} не знайдено!`);
//
//       return;
//     }
//
//     this.friends.splice(indexOfFriendName, 1);
//   },
// };
//
// console.log(user.friends);
//
// user.addFriend('Clarence');
// user.addFriend('');
//
// console.log(user.friends);
//
// user.removeFriend('Justin');
// user.removeFriend('sdf');
//
// console.log(user.friends);


/*
const friends = ['Claudia', 'Justin', 'Ada', 'Lilly'];

const indexOfFriend = friends.indexOf('Justin');

console.log(friends);

friends.splice(indexOfFriend, 1);

console.log(friends);
*/


/*
TODO: Методи для роботи з корзиною товарів.
TODO:
TODO: Є об'єкт cart. У властивості items зберігається масив з товарами.
TODO: Додай наступні методи в об'єкт:
TODO: - changeQuantity(productName, value) - змінює кількість товару у кошику.
TODO: - getTotalPrice() - повертає загальну суму товарів у кошику.
*/

// const cart = {
//   items: [
//     {title: 'Хліб', price: 25, quantity: 3},
//     {title: 'Молоко', price: 30, quantity: 2},
//   ],
//
//   changeQuantity(productName, value) {
//     productName = productName.toLowerCase();
//
//     for (const product of this.items) {
//       if (product.title.toLowerCase() === productName) {
//         product.quantity += value;
//
//         return;
//       }
//     }
//   },
//
//   getTotalPrice() {
//     let totalPrice = 0;
//
//     for (const product of this.items) {
//       totalPrice += product.price * product.quantity;
//     }
//     return totalPrice;
//   },
// };
//
// console.table(cart.items);
//
// cart.changeQuantity('Хліб', 2);
// console.log(cart.getTotalPrice());
//
// console.table(cart.items);

/*
TODO: Пошук за значенням.
TODO:
TODO: Напиши функцію findByName(users, userName), яка шукає об'єкт у масиві за полем name/
*/

// const findByName = function(users, userName) {
//   userName = userName.toLowerCase();
//   console.table(users);
//
//   for (const user of users) {
//     if (user.firstName.toLowerCase() === userName) {
//       return user;
//     }
//   }
// };
//
// console.log(
//   findByName(
//     [
//       { firstName: 'Allen', age: 30, gender: 'male' },
//       { firstName: 'Theresa', age: 20, gender: 'female' },
//       { firstName: 'Josephine', age: 25, gender: 'female' },
//       { firstName: 'Max', age: 40, gender: 'male' },
//       { firstName: 'Phillip', age: 23, gender: 'male' },
//     ],
//     'Max'
//   )
// );

/*
TODO: Фільтрація об'єктів у масиві
TODO:
TODO: Напиши функцію filterProductsByPrice(products, threshold), яка буде приймати масив об'єктів з товарами.
TODO: Функція має повертати лише ті, в яких ціна менше ніж параметр threshold.
*/


// const filterProductsByPrice = function (products, threshold) {
//   console.table(products);
//   const filteredProducts = [];
//
//   for (const product of products) {
//     if (product.price < threshold) {
//       filteredProducts.push(product);
//     }
//   }
//
//   return filteredProducts;
// };
//
//
// console.log(
//   filterProductsByPrice([
//     {title: 'Товар 1', price: 50},
//     {title: 'Товар 2', price: 150},
//     {title: 'Товар 3', price: 80},
//   ],
//     100
//     )
// );