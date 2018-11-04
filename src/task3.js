function sortTriangles(arr){
	arr.sort(function(a,b) {
    return HeronF(a) < HeronF(b);
    });

   
    
    for (var i = 0; i<arr.length;i++){
        arr[i] = arr[i].vertices;
    }
        return arr;
}
 function HeronF(triangle){
        var sides = Object.keys(triangle),
            a = triangle[sides[1]],
            b = triangle[sides[2]],
            c = triangle[sides[3]];
            p = (a + b + c)/2;
        return Math.sqrt (p*(p - a)*(p - b)*(p - c));
    }

triangle = [{vertices:'ABC',a:10,b:20,c:22.36},
            {vertices:'DEF',d:5,e:5,f:7.07},
            {vertices:'GHI',k:30,m:24,n:28},
            {vertices:'JKL',g:15,h:25,i:20}];

sortTriangles(triangle);

