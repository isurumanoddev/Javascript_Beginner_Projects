class Car {

    constructor(name, color, speed) {

        this.name = name;
        this.color = color;
        this.speed = speed;
        this.currentSpeed = 0

    }

    // drive() {
    //     console.log("Drive 10 miles")
    // }
    drive = () => {
        console.log("Drive 20 miles")
        this.currentSpeed += 10
    }
    zeroToSixty = () => {
        setTimeout(() =>{
            this.currentSpeed = 60
            console.log("************************** ",this.currentSpeed)
        }, 1500)
        // console.log("brake at 20 miles")


    }

}

const ferrari = new Car("ferrari", "red", 250);
ferrari.zeroToSixty()
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.drive()
console.log(ferrari.currentSpeed)

const array =[ 1,2,3,4,5]

array.forEach(a => a + 5 )

console.log(array)