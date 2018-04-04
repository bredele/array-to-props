


/**
 * Destructure an array into an object.
 *
 * @param {Array} arr
 * @param {String?} key
 * @param {String?} value
 * @return {Object}
 * @api public
 */

module.exports = (arr, key = 'name', value) => {
  const obj = {}
  arr.map(item => {
    const {
      [key] : name,
      ...props
    } = item
    obj[name] = value ? props[value] : props
  })
  return obj
}
