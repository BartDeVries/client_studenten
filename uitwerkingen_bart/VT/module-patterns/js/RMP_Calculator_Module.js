


export function RMP_Calculator_Module() {
    let total = 0;

    const addIntern = function(a, b)  { 
        total += a + b;
        return a + b
    };
    
    const sumIntern = function(a, b) { 
        return total + a + b
    };

    return {
        // externe naam : interne naam
        add: addIntern,
        sum: sumIntern
    }
}

            