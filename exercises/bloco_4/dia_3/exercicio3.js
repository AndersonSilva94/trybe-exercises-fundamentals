//3- Agora inverta o lado do triângulo.
let n = 5;
let asterisco = '*'; 
let espaco = ' '; 
let receberAsterisco = '';
let receberEspaco = '';

for(let index = 1; index <= n; index += 1){
  receberAsterisco = '';
  for(let asteriscos = 1; asteriscos <= index; asteriscos += 1){
    receberAsterisco += asterisco;
  }
  receberEspaco = '';
  for(let espacos = 1; espacos <= n - index; espacos += 1){
    receberEspaco += espaco;
  }
  console.log(receberEspaco + receberAsterisco);
}
