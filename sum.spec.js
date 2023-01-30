const { sum, compact, concat, join } = require('./sum');

describe("Sum Component", () => {
   test("should sum to numbers", () => {
      expect(sum(2, 2)).toBe(4);
   });

   test("should sum truthly", () => {
      expect(sum(2, 2)).toBeTruthy()
   });

   test("should greather than 3", () => {
      expect(sum(2, 2)).toBeGreaterThan(3)
   });
});

describe("Companent", () => {
   test('Should be temoved all falsy values', () => {
      const data = [0, 1, false, 2, "", 3];
      const resultCompact = [1, 2, 3];
      expect(compact(data)).toEqual(resultCompact);
   });
});

describe("Concat", () => {
   test('Should concat values', () => {
      const data = [1, 2, 3];
      const results = [1, 2, 3, 1, 2, 3, 4];
      expect(concat(data, 1, 2, 3, 4)).toEqual(results);
   });
});

describe("Join", () => {
   test('Should join values', () => {
      const result = ['1 = 2 = 3 ='];
      expect(join([1, 2, 3], '=')).toEqual(result);
   });
});