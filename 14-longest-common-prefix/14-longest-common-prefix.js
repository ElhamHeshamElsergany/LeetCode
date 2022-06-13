/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let i = 0;
    let letter = strs[0][i];
    const prefix = [];
    while (i < strs[0].length) {
        for (let j = 1; j < strs.length; j ++) {
            if (strs[j][i] != letter)
                return prefix.join('')
        }
        prefix.push(letter)
        i ++
        letter = strs[0][i]
    }
    
    return prefix.join('')
    
    
    
};