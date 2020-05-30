//instanceof
function rocketInstanceOf(obj,cls){
    while(obj!=null && obj.__proto__ !== cls.prototype){        
        obj = obj.__proto__;
    }

    if(obj == null){
        return false;
    }else{
        return true;
    }
}

//new
function rocketNew(rocketClass,...rocketArgs){
    if(typeof rocketClass !== "function"){
        throw new TypeError("The first arg must be a class");
    }
    let rocketObj = Object.create(rocketClass.prototype);
    rocketClass.call(rocketObj,...args);
    return rocketObj;
}

//extend
function A(){

}

function B(){
    A.call(this);
    //...
}

Object.setPrototypeOf(B.prototype,A.prototype);

let b = new B();

rocketInstanceOf(b,A);//TRUE