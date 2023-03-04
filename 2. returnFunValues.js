function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20); //{prop:20}
doubleIt(10).toString() //"20"

objectMaker( doubleIt(100) ); //{prop:200}

/**
 * What does all of this mean?

It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

Being able to return custom values is one of the foundations that makes functional programming possible.
 */