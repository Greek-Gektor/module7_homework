

const obj = {
    a: 1,
    b: 2
}

const showProp = (testObj) => {
    for (let key in testObj) {

        if (testObj.hasOwnProperty(key)) {

            console.log(key + ": " + testObj[key]);
        }
    }
}

showProp(obj);