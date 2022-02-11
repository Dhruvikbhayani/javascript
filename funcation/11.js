var secound = function (arr){
    function comparenumber(a,b){
        console.log(a,b)

        return a-b;
    }
    console.log(arr.sort(comparenumber))
    console.log(arr[1])
    console.log(arr[arr.length-2])
}
secound([34,20,500,8000,600,200,80])
