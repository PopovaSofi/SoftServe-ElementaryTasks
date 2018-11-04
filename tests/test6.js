describe("Task6 - isValidNumbers", function() {
    it("Корректный ввод данных", function() {
      let result = isValidNumbers(5,5)
      assert.equal(result , true);
    });

    it("Некорректный ввод данных", function() {
      let result = isValidNumbers('o',5,)
      assert.equal(result , false);
    });

    it("Данные не введены", function() {
      let result = isValidNumbers('',5,)
      assert.equal(result , false);
    });

    it("Значения длины строки меньше и минимального квадрата введены корректно", function() {
      let result = isValid(4,5,)
      assert.equal(result , false);
    });

    it("Значение длины строки меньше, чем минимальный квадрат", function() {
      let result = isValid(4,5,)
      assert.equal(result , false);
    });

  }); 