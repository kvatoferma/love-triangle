/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [3, 3, 3, 3, 3, 3, 3, 3]) {
  const people = preferences;
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
        return persons.map((person) => {
          return person.name;
        }).sort();
      }
    }
  }
  const compareTriangles = (target1, target2) => {
    return JSON.stringify(target1.getId()) == JSON.stringify(target2.getId()) || false;
  }
  let ids = [];
    people.unshift(null);
    for (var i = 1; i <= people.length; i++) {
      let love = people[i];
      let loveOfLove = people[love];
      if (people[loveOfLove] === i && i !== love && love !== loveOfLove && i !== loveOfLove) {
        let triangle = triangleFactory([
          personFactory(i, people[i]),
          personFactory(love, people[love]),
          personFactory(loveOfLove, people[loveOfLove])
        ]);
        let id = JSON.stringify(triangle.getId());
        if (!ids.includes(id)) {
          ids.push(id);
        }
      }
    }
  return ids.length;
}
