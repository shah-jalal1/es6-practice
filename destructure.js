const person = {name: 'jack', age: 17, job: 'facebooker', gName: 'ema watson', address: 'kochu khet', phone: '01547856547', friends: ['tom', 'kom']};

// its call destructure. it is important
const { phone, gName, address } = person;

const complexObjext = {
    names: 'abc',
    info: {
        address: 'kola bagan',
        leader: "Tiger leader"
    }
}

const {leader} = complexObjext.info;

// const gName = person.gName;
// const phone = person.phone;

// console.log(gName, phone);
// console.log(phone);


friends = ['sakib khan', 'salman khan', 'amir khan', 'shahrukh khan', 'Arman khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(chotoFriend, nextFriend);
console.log(restFriends);