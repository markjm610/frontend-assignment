const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes.filter(hero => {
    return hero.publisher === 'Marvel Comics'
  })
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  return heroes.map(hero => {
    const charactersArr = hero.characters.split(', ')
    return { ...hero, characters: charactersArr }
  })
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  return heroes.reduce((accum, hero) => {
    const publisher = hero.publisher
    const heroesSoFar = accum[publisher]
    if (heroesSoFar) {
      return { ...accum, [publisher]: [...heroesSoFar, hero] }
    } else {
      return { ...accum, [publisher]: [hero] }
    }
  }, {})
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const heroesWithCharactersArr = convertCharactersToArray(heroes)
  return heroesWithCharactersArr.filter(hero => {
    return hero.characters.length > 1
  })
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
