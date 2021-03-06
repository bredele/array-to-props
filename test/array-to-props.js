/**
 * Dependencie(s)
 */

 const test = require('tape')
 const convert = require('..')


test('should convert array into an object with given key', assert => {
   assert.plan(1)
   const obj = convert([{
     name: 'foo',
     value: 'beep'
   }, {
     name: 'bar',
     value: 'boop'
   }], 'name')
   assert.deepEqual(obj, {
     foo: {value: 'beep'},
     bar: {value: 'boop'}
   })
 })

test('should convert array into an object with default key as name', assert => {
   assert.plan(1)
   const obj = convert([{
     name: 'foo',
     value: 'beep'
   }, {
     name: 'bar',
     value: 'boop'
   }])
   assert.deepEqual(obj, {
     foo: {value: 'beep'},
     bar: {value: 'boop'}
   })
 })

test('should destructure newly created object', assert => {
  assert.plan(1)
  const obj = convert([{
    name: 'foo',
    value: 'beep'
  }, {
    name: 'bar',
    value: 'boop'
  }], 'name', 'value')
  assert.deepEqual(obj, {
    foo: 'beep',
    bar: 'boop'
  })
})
