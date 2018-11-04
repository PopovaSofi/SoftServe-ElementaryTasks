describe("Task3 - sortTriangles", function() {

  let triangle = [{vertices:'ABC',a:10,b:20,c:22.36},
                    {vertices:'DEF',d:5,e:5,f:7.07},
                    {vertices:'GHI',k:30,m:24,n:28},
                    {vertices:'JKL',g:15,h:25,i:20}];
  expected = ["GHI", "JKL", "ABC", "DEF"];

  it("Сортировка трeугольников (от большей площади к меньшей)", function() {
    let result = sortTriangles(triangle);
    assert.deepEqual(result , expected);
  });
});