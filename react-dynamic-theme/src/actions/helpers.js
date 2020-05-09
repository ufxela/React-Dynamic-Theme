export function generateThemeID(theme){
    const themeKeys = Object.keys(theme);
    return themeKeys.reduce(function(result, key, index){
        // remove this later
        if(key === 'id'){
            return result;
        }
        
        if(index === 1){ 
            result += `:${theme[result]}-`;
        }
        return `${result}${key}:${theme[key]}-`;
    });
}

export function isVowel(c) {
    return ['a', 'e', 'i', 'o'].indexOf(c.toLowerCase()) !== -1;
}