
        //to get the values in the button and display it
        display = (value) => {
            document.getElementById("result").value += value;
        }
        //to solve for the inputed values using calc function
        cal = () => {
            var x = document.getElementById("result").value;
            //var y = eval(x);  //using eval function to evaluate the inputted values
            //document.getElementById("result").value = y;
            try {
            var y = eval(x); 
            document.getElementById("result").value = y;
            }
            catch {
            document.getElementById("result").value ="Error";
            }
        }

        // to delete the display on the screen
        AC = () => {
            document.getElementById("result").value = "";
        }