const reverse = require('../utils/for_testing')
describe('Reversal',()=>{
test('reverse of a', () => {
  const result = reverse('a')
  console.log("working")
  expect(result).toBe('a')
})
test('Reverse of wale',()=>{
  expect(reverse('wale')).toBe('elaw')
})
})
