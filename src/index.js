/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const people = preferences;
  let ids = [];
  people.unshift(null);
    for (var i = 1; i <= people.length; i++) {
      let love = people[i];
      let loveOfLove = people[love];
      if (people[loveOfLove] === i && i !== love && love !== loveOfLove && i !== loveOfLove) {
        let triangle = [i, love, loveOfLove];
        let id = JSON.stringify(triangle.sort());
        if (!ids.includes(id)) {
          ids.push(id);
        }
      }
    }
  return ids.length;
}
