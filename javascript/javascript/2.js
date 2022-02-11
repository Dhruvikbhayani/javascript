var student ={
    name:'rohan',
    math:80,
    sci:85,
    eco:95,
    total:0,
    pr :0,

    cu :function(){
        var d;
        if(this.math>=35,this.sci>=35,this.eco>=35)
        {
            d = true;
        this.total=this.math+this.sci+this.eco,
    this.pr=this.total/3
        }
        else{
            d= false;
        }
        
        if(student.pr>80){
            console.log('Grade A')
        }
        else if(student.pr>60){
            console.log('Grade B')
        }
        else if(student.pr>40){
            console.log('Grade C')
        }
        else{
            console.log('Grade D')
        }
        return d;
    }
}
// console.log(student)
// console.log(student.name)
// console.log(student.math)
// console.log(student.sci)
// console.log(student.eco)

console.log(student.cu())

// console.log(student.abc())

