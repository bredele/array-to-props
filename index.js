


module.exports = (arr, key = 'name') => {
  const obj = {}
  arr.map(item => {
    const {
      [key] : name,
      ...props
    } = item
    obj[name] = props
  })
  return obj
}
