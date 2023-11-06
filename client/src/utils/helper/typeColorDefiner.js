
export const defineColorType = (Styles, typeName) => {
  switch (typeName) {
    case 'grass':
      return Styles.grass
    case 'normal':
      return Styles.normal
    case 'fighting':
      return Styles.fighting
    case 'flying':
      return Styles.flying
    case 'poison':
      return Styles.poison
    case 'ground':
      return Styles.ground
    case 'rock':
      return Styles.rock
    case 'bug':
      return Styles.bug
    case 'ghost':
      return Styles.ghost
    case 'steel':
      return Styles.steel
    case 'fire':
      return Styles.fire
    case 'water':
      return Styles.water
    case 'electric':
      return Styles.electric
    case 'psychic':
      return Styles.psychic
    case 'ice':
      return Styles.ice
    case 'dragon':
      return Styles.dragon
    case 'dark':
      return Styles.dark
    case 'fairy':
      return Styles.fairy
    case 'unknown':
      return Styles.unknown
    case 'shadow':
      return Styles.shadow
    default:
      null
  }
}