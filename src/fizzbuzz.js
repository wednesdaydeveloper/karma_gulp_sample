/**
 * Return the string containing fizz, buzz or the number for the line.
 *
 * @param {Number} n The number of lines to fizzbuzz
 * @return {String}
 */
function fizzbuzz (n) {

  let buf = ''

  for (let i = 1; i <= n; i++) {

    if (i % 15 === 0) {

      buf += 'FizzBuzz\n'

    } else if (i % 5 === 0) {

      buf += 'Buzz\n'

    } else if (i % 3 === 0) {

      buf += 'Fizz\n'

    } else {

      buf += `${i}\n`

    }

  }

  return buf

}

export default fizzbuzz