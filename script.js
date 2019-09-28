var oldest = 0;

function drink(family) {

    var i;
    for (i = 0; i < family.length; i++) {

        console.log(family[i].name + " is " + family[i].age + " years old");
        if (family[i].age > 21) {
            console.log(family[i].name + " is old enough to drink")
        } else {
            console.log(family[i].name + " is not old enough to drink")
        }
    }
}

function maxage(family) {

    var i;
    for (i = 0; i < family.length; i++) {

        if (family[i].age > oldest) {
            oldest = family[i].age;
        }

    }
    console.log("max age is " + oldest);
}

var me = {
    name: 'Akaki',
    age: 38
};


var shota = {
    name: 'Shota',
    age: 41
};


var drini = {
    name: 'Drini',
    age: 45
};

var nino = {
    name: "Nino",
    age: 7
};

family = [me, shota, drini, nino];

drink(family);
maxage(family);
