var a = [1,2,3];
try{
    console.log(a[i]);
} catch (e) {
    if (e instanceof ReferenceError ){
        console.log('例外:Referenceerror');
    } else if(e instanceof SyntaxError){
        console.log('例外:Syntaxerror');
    }
}