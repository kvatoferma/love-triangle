/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// module.exports =
// function getLoveTrianglesCount(preferences = [2,3,1]) {
(function getLoveTrianglesCount(people = [2, 3, 1, 5, 6, 4]) {
  const personFactory = (name, loves) => {
    return {
      name: name,
      loves: loves,
    }
  }

  const triangleFactory = (persons) => {
    return {
      persons: persons,
      getId: () => {
        persons.map((person) => {
          return person.name;
        });
      }
    }
  }



  let triangle1 = [
    {name: 1, loves: 2},
    {name: 2, loves: 3},
    {name: 3, loves: 1}
  ]

  let triangle2 = [
    {name: 4, loves: 5},
    {name: 5, loves: 6},
    {name: 6, loves: 4}
  ]

  let triangle3 = [
    {name: 2, loves: 3},
    {name: 3, loves: 1},
    {name: 1, loves: 2}
  ]

  const compareTriangles = (target1, target2) => {
    return JSON.stringify(target1.getId()) == JSON.stringify(target2.getId()) || false;
  }

  const triangleFactory = (persons) => {
    return {
      persons: persons,
      getId: () => {
        return persons.map((person) => person.name).sort();
      }
    }
  }

  const obj1 = triangleFactory(triangle1);
  const obj2 = triangleFactory(triangle2);
  const obj3 = triangleFactory(triangle3);
  console.log('getId obj1 ', obj1.getId());
  console.log('getId obj2 ', obj2.getId());
  console.log('getId obj3 ', obj3.getId());
  console.log('compare different self ', compareTriangles(obj1, obj1));
  console.log('compare different obj ', compareTriangles(obj1, obj2));
  console.log('compare disordered same obj ', compareTriangles(obj1, obj3));


  const getId = (triangle) => {
    let triangleId = triangle.map((element) => {
      return element.name;
    });
    return triangleId;
  }
  console.log(getId(triangle));

    // const getTriangleId = (triangle) => {
    //   return {
    //
    //   }
    // }






//*****************************
// [null, 2, 3, 1]
// 2) Устраняем смещение, чтобы отсчет элементов шёл с i=1:
    let triangles = [];
    people.unshift(null);
// 3) Получаем ссылку на любимого:
    // people.forEach((element, i) => {
      for (var i = 1; i <= people.length; i++) {
        let love = people[i]; // => 2
        let loveOfLove = people[love]; // => 3
// 5) Сравниваем значения:
        if (people[loveOfLove] === i) {
          triangle = [
            personFactory(i, people[i]),
            personFactory(love, people[love]),
            personFactory(loveOfLove, people[loveOfLove])
          ];
          triangles.push(triangle);
        }






// 8) Если данного треугольника нету в массиве, кладем его туда:

// Сравнение объектов:
// JSON.stringify(obj1) === JSON.stringify(obj2);


        // if (!triangles.includes(triangle)) { triangles.push(triangle) }


// 9) Повторяем для каждого элемента people[i] пока не переберём весь массив people:
//      people.forEach((element, i) => { ... });
// 10) Вычисляем длину массива triangles, это и есть кол-во любовных треугольников:
//      return triangles.length
    }
    // });

//***************************

  // Алгоритм:
  // 1) Имеется массив:
  //      people = [2, 3, 1];
  // 2) Устраняем смещение, чтобы отсчет элементов шёл с i=1:
  //      people.unshift(null); => [null, 2, 3, 1];
  // 3) Получаем ссылку на любимого:
  //      love = people[i]; => 2
  // 4) Получаем ссылку на любомого любимого:
  //      loveOfLove = people[love]; => 3
  // 5) Сравниваем значения:
  //      if (people[loveOfLove] === i)
  // 6) Если true, создаем треугольник в виде массива объектов:
  //      triangle = [
  //        personFactory(i, people[i]),
  //        personFactory(love, people[love]),
  //        personFactory(loveOfLove, people[loveOfLove])
  //      ];
  // 7) Создаем массив для хранения треугольников:
  //      triangles = []
  // 8) Если данного треугольника нету в массиве, кладем его туда:
  //      for (var i = 0; i < triangles.length; i++) {
  //        if (!JSON.stringify(triangles[i]) === JSON.stringify(triangle)) { triangles.push(triangle) }
  //      }
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



  console.log(triangles);

})();

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
