const { load, getHeaders } = require('..')
const expect = require('chai').expect

describe('exports', () => {
  it('has load function', () => {
    expect(load).to.be.a('function')
  })

  it('has getHeaders function', () => {
    expect(getHeaders).to.be.a('function')
  })
})
