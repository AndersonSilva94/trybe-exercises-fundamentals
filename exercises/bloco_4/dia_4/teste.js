function palindromo (str){
  for(let i in str){
    if(str[i] === str[str.length - i - 1]) return true
  } 
}

palindromo("arara");