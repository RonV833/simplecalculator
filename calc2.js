   
    //to get the values in the button and display it
    display=(value)=> {
        document.getElementById("result").value += value;
    }
    //to solve for the inputed values using calc function
    /*cal=()=> {
        var x = document.getElementById("result").value;
        var y = eval(x);  //using eval function to evaluate the inputted values
        document.getElementById("result").value = y;
    }*/
    cal=()=> {
        //var x = parseFloat(document.getElementById("result").value);
        var x =  parseFloat(document.getElementById("result").value);
        var op = document.getElementById ("ops").value;
        switch (op) {
            case "+":
            document.getElementById("result").value =x +x;
            break;
            case "-":
            document.getElementById("result").value =x -x;
            break;
            case "*":
            document.getElementById("result").value =x *x;
            break;
            case "/":
            document.getElementById("result").value =x /x;
            break;
            case "/":
            document.getElementById("result").value =x %x;
            break;
            default:
            break;
        }
    }

    // to delete the display on the screen
    AC=() =>{
        document.getElementById("result").value = "";
    }