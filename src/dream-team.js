module.exports = function createDreamTeam( members ) {
  //

  if (!Array.isArray(members)) return false
  
  return members.map(item => {
    if (typeof item === 'string') {
      return item.trim()[0].toLocaleUpperCase()
    }
  }).sort().join('')
}