describe("Task4 - Verification", function() {
    it("Палиндром должен состоять более чем из одной цифры", function() {
      let result = Verification(5)
      assert.equal(result, false);
    });

   /*it("Корректный ввод палиндрома", function() {
      let result = Verification(2332)
      assert.equal(result, true);
    });*/
}); 

describe("isValidPalindrom - проверка на ввод числа", function() {
    it("Данные введены не корректно", function() {
      let result = isValidPalindrom('hhh')
      assert.equal(result, false);
    });

   /* it("Корректный ввод палиндрома", function() {
      let result = isValidPalindrom(424)
      assert.equal(result, true);
    });*/

   it("Введено отрицательное значение", function() {
      let result = isValidPalindrom(-4)
      assert.equal(result, false);
    });

   it("Длина палиндрома недопустима", function() {
      let result = isValidPalindrom(0)
      assert.equal(result, false);
    });

  }); 