/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// module.exports = 
function getLoveTrianglesCount(preferences = []) {
  const personFactory = function (name, loves) {
    return {
      name: name,
      loves: loves,
      lovedBy: []
    }
  }
  const people = [];
  preferences.forEach((element, index) => {
    people.push(personFactory(index+1, element));
  });

  (function setLovers() {
    people.forEach((person) => {
      people[person.loves -1].lovedBy.push(person.name);
    });
  })();

  function countLoveTriangles() {

  }
  // Алгоритм:
  // 1) Имеется массив:
  //      people = [2, 3, 1];
  // 2) Устраняем смещение, чтобы отсчет элементов шёл с i=1:
  //      people.unshift(null); => [null, 2, 3, 1];
  // 3) Получаем ссылку на любимого:
  //      love = people[i]; => 2
  // 4) Переходим по ссылке:
  //      loveOfLove = people[love]; => 3
  // 5) Сравниваем значения:
  //      if (people[loveOfLove] === people[i])
  // 6) Если true, создаем треугольник в виде массива объектов:
  //      triangle = [
  //        personFactory(i, people[i]),
  //        personFactory(love, people[love]),
  //        personFactory(loveOfLove, people[loveOfLove])
  //      ];
  // 7) Создаем массив для хранения треугольников:
  //      triangles = []
  // 8) Если данного треугольника нету в массиве, кладем его туда:
  //      if (!triangles.includes(triangle)) { triangles.push(triangle) }
  // 9) Повторяем для каждого элемента people[i] пока не переберём весь массив people:
  //      people.forEach((element, i) => { ... });
  // 10) Вычисляем длину массива triangles, это и есть кол-во любовных треугольников:
  //      return triangles.length




  // Алгоритм (громоздкий)
  // 1) Имеется массив объектов:
  //    const people = [{name: 1, loves: 2},
  //                    {name: 2, loves: 3},
  //                    {name: 3, loves: 1}];
  // 2) Извлекаем из массива первый объект people[0]
  // 3) Получаем из него свойство people[0].loves => 2
  // 4) Находим в массиве объект people.findByName()



  console.log(people);

};
getLoveTrianglesCount([2, 3, 1, 5, 6, 4]);

  //   if (this.includesIndex(element)) {
  //
  //   }
  // });

  // Array.prototype.includesIndex = function(index) {
  //   return (index < this.length) || false;
  // }
  //   let count;
  // preferences.forEach((element, index) => {
  //   if (preferences.[preferences[preferences[index]]] === preferences[index]) {
  //     count++;
  //   }
  // });
  // return count;
