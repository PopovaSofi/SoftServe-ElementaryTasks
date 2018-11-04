describe("Task1 - isValid", function() {
  it("Корректный ввод размеров шахматной доски", function() {
    let result = isValid(5,5)
    assert.equal(result , true);
  });

  it("Некорректный ввод размеров шахматной доски", function() {
    let result = isValid(-9,5)
    assert.equal(result , false);
  });

  it("Некорректный ввод размеров шахматной доски", function() {
    let result = isValid(0,5)
    assert.equal(result , false);
  });

});