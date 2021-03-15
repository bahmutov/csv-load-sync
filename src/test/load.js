const path = require('path')
const load = require('../load')
const expect = require('chai').expect

describe('load', () => {
  it('basics', function () {
    expect(load).to.be.a('function')
    expect(load, 'two arguments').to.have.property('length', 2)
  })

  it('custom parsing', function () {
    function split(line, lineNumber) {
      if (lineNumber === 0) {
        // title line
        return line.split(',')
      }
      // our line will be <location>,<lat>,<lon>
      // and we want to combine lat and lon
      var parts = line.split(',')
      return [parts[0], parts[1] + ',' + parts[2]]
    }
    var filename = path.join(__dirname, 'gps.csv')
    var results = load(filename, {
      getColumns: split,
    })
    expect(results, 'returns results').to.be.an('array')
    expect(results, 'two records').to.have.length(2)
    expect(results[0]).to.have.property('place', 'home')
  })

  it('one column of three records', function () {
    var filename = path.join(__dirname, 'one.csv')
    var results = load(filename)
    expect(results, 'returns results').to.be.an('array')
    expect(results, 'two records').to.have.length(3)
  })

  it('two records', function () {
    var filename = path.join(__dirname, 'two.csv')
    var results = load(filename)
    expect(results, 'returns results').to.be.an('array')
    expect(results, 'two records').to.have.length(2)
  })

  it('three records', function () {
    var filename = path.join(__dirname, 'three.csv')
    var results = load(filename)
    expect(results, 'returns results').to.be.an('array')
    expect(results, 'two records').to.have.length(3)
  })

  it('property values', function () {
    var filename = path.join(__dirname, 'two.csv')
    var results = load(filename)
    expect(results, 'two records').to.have.length(2)
    expect(results[0]).to.deep.equal({
      deviceId: '1',
      description: 'iPhone 4',
    })
    expect(results[1]).to.deep.equal({
      deviceId: '2',
      description: 'iPhone 4S',
    })
  })

  it('loading 100 records', function () {
    var filename = path.join(__dirname, '100.csv')
    const started = +new Date()
    var results = load(filename)
    expect(results, 'loaded 100 records').to.have.length(100)
    const finished = +new Date()
    const took = finished - started
    expect(took, 'loading 100 records should take less 100 ms').to.be.lessThan(
      100,
    )
  })
})
