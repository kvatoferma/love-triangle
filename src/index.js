/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
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
