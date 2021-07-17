

const obj = {
    a: 3,
    b: 4
}

const showProp = (testObj,x) => {
    console.log(x in testObj)
}

showProp(obj,"a");
