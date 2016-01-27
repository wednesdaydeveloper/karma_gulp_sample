import sum from '../src/sum'

describe('sum', () => {

  it('sums up the given numbers', () => {

    expect(sum(1)).to.equal(1)
    expect(sum(1, 2)).to.equal(3)
    expect(sum(1, 2, 3)).to.equal(6)
    expect(sum(1, 2, 3, 4)).to.equal(10)
    expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    expect(sum(1, 2, 3, 4, 5, 6)).to.equal(21)

  })

})