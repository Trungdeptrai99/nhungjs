
function Apple() {

    this.weight = 10;

    this.decrease = function () {
        if(this.weight>0){
            this.weight--
        }
    }
    this.isEmpty= function () {
        if (this.weight > 0) {
            return true;
        }
        return false;
    }

    this.getWeight= function () {
        return this.weight;

    }
}
function Human(name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        if (this.gender == 'Male') {
            return true;
        }
        return false;
    }
    this.say = function (string) {
        document.write( this.name+": " + string);

    }
    this.eat = function (a) {
        a.decrease();
        this.weight++;
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }

}
function storyofheaven() {


    var apple = new Apple();
    var adam = new Human('Adam','Male',70);
    var eva =   new Human('Eva','-Male',48 );
    adam.say("Mình có kẹo táo đây, cắn miếng không "+eva.getName()+"  eiiiiii!"+"<br>");
    eva.say("Thôi mình sợ nghiện lắm " + adam.getName()+ " à......"+"<br>");
    adam.say("Mình có " + apple.weight +" viên, mình cắn trước nha " +"<br>");
    while (apple.weight>0){
        adam.eat(apple);
        adam.say( "Giờ còn "+apple.weight +" đây bạn ei, cắn đi không hết bây giờ!!!!! Chill vleuu bạn eiii "+"<br>");
        eva.eat(apple)
        eva.say("Mình làm 1 viên đây "+ adam.getName()+ " ơiiii. Bạn ơi kéo tôi xuống, tôi sắp bay ra qua trần nhà rồi" +"<br>");
        if(apple.weight==0){
            adam.say( "Ôi hết kẹo rồi bạn ôiiiiii"+"<br>");
            break;
        }
    }
    document.write("Cân nặng sau cùng của eva là :"+ eva.getWeight()+" của Adam là: "+ adam.getWeight() )
}
