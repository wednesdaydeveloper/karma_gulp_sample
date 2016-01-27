import fizzbuzz from '../src/fizzbuzz'

describe('fizzbuzz', () => {

  it('returns the fizz buzz lines of the given number', () => {

    expect(fizzbuzz(1)).to.equal('1\n')

    expect(fizzbuzz(15)).to.equal(`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
`)

  })

})