// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "suthar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj4 = {5: "a", 6: "b"}

// const Obj3 = { Obj1, Obj2 }
// const Obj3 = Object.assign({},Obj1, Obj2)

const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "hitesh",
//     "course": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {},
]

