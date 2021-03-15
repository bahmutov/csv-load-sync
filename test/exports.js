const { load } = require('..')
const expect = require('chai').expect

describe('exports', () => {
  it('has load function', () => {
    expect(load).to.be.a('function')
  })
})
