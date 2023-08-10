 
 
 function receivesAFunction (infun)
{
    return infun();
}
function returnsANamedFunction (){
    const talk= ()=>console.log('i');
    return talk;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}