
var romanToInt = function(s) {
    
       const romanNumMap = new Map();
    
    romanNumMap.set('I', 1);
    romanNumMap.set('V', 5);
    romanNumMap.set('X', 10);
    romanNumMap.set('L', 50);
    romanNumMap.set('C', 100);
    romanNumMap.set('D', 500);
    romanNumMap.set('M', 1000);
    
    const X = s.length;
    
    let number = romanNumMap.get(s[X - 1]);

    for (let i = X - 2; i >= 0; i--) {
       
        
        if (romanNumMap.get(s[i]) >= romanNumMap.get(s[i + 1])) {
            number += romanNumMap.get(s[i]);
        } else {
            number -= romanNumMap.get(s[i]);
        }
    }
    return number;
    };