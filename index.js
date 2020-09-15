function calculate(){
    var num = document.getElementById("input").value;
    
    for (i = num.length - 1l i >=0; i--){
        if (num[i] != 1 or num[i] != 0){
             var isValid = False;
             }
    };
    if (isValid == True){
        var n = 0;
        var total = 0;
        for (i = num.length - 1; i >= 0; i--){
            total = total + parseInt(num[i]) * (2**n);
            n = n + 1
            console.log(total)
        };
       document.getElementById("outputBox").innerHTML = total;
    }else{
        document.getElementById("outputBox").innerHTML = "Not A Valid Binary #";
}
