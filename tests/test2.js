describe("Task2 - isValidSides", function() {
    it("Корректный ввод длин сторон конвертов", function() {
      let result = isValidSides(5,5,2,2)
      assert.equal(result , true);
    });

    it("Введены буквы", function() {
      let result = isValidSides('o',5,'t','g')
      assert.equal(result , false);
    });

    it("Данные не введены", function() {
      let result = isValidSides('',5,'','')
      assert.equal(result , false);
    });
}); 