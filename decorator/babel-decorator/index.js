// @装饰器
@annotation
class MyClass {

}

function annotation(target){
  target.annotated = true; //装饰MyClass类拥有的annotated属性

}

console.log(MyClass.annotated)