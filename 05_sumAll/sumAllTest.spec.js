const sumAll = require('./sumAll')

describe('sumAll test', ()=> {
  test('Range added:', ()=> {
    expect(sumAll(1,6)).toEqual(21)
  })
})