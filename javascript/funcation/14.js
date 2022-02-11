var abc= function (num){
    var a=[25,10,5,2,1]
    var c=[]
  for(i=0;num!=0;i++){
      if(num>=25){
          c[i]=a[0]
          num-=25
      }
      else if(num>=10){
          c[i]=a[1]
          num-=10
      }
      else if(num>=5){
          c[i]=a[2]
          num-=5
      }
      else if(num>=2){
          c[i]=a[3]
          num-=2
      }
      else{
          c[i]=a[4]
          num-=1
      }
      
  }
  console.log(c)
}
abc(40)