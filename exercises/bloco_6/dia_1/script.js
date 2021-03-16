const selectState = document.getElementById('estado');
const states = [{ estado: "Acre", sigla: "ac" },{ estado: "Alagoas", sigla: "al" },{ estado: "Amapá", sigla: "ap" },{ estado: "Amazonas", sigla: "am" },{ estado: "Bahia", sigla: "ba" },{ estado: "Ceará", sigla: "ce" },{ estado: "Espírito Santo", sigla: "es" },{ estado: "Goiás", sigla: "go" },{ estado: "Maranhão", sigla: "ma" },{ estado: "Mato Grosso", sigla: "mt" },{ estado: "Mato Grosso do Sul", sigla: "ms" },{ estado: "Minas Gerais", sigla: "mg" },{ estado: "Pará", sigla: "pa" },{ estado: "Paraíba", sigla: "pb" },{ estado: "Paraná", sigla: "pr" },{ estado: "Pernambuco", sigla: "pe" },{ estado: "Piauí", sigla: "pi" },{ estado: "Rio de Janeiro", sigla: "rj" },{ estado: "Rio Grande do Norte", sigla: "rn" },{ estado: "Rio Grande do Sul", sigla: "rs" },{ estado: "Rondônia", sigla: "ro" },{ estado: "Roraima", sigla: "rr" },{ estado: "Santa Catarina", sigla: "sc" },{ estado: "São Paulo", sigla: "sp" },{ estado: "Sergipe", sigla: "sp" },{ estado: "Tocantins", sigla: "to" },{ estado: "Distrito Federal", sigla: "df" }];

function createStates() {
  for(let index = 0; index < states.length; index += 1){
    const optionState = document.createElement('option');
    optionState.innerText = states[index].estado;
    optionState.value = states[index].sigla;
    selectState.appendChild(optionState)
  }
}
createStates();

function getDate() {
  const date = document.getElementById('date').value.split('/');
  const day = parseInt(date[0]);
  const month = parseInt(date[1]);
  const year = parseInt(date[2]);
  return { day: day, month: month, year: year}
}

function setDate() {
  const submitButton = document.getElementById('enviar');
  submitButton.addEventListener('click', (e) => {
    //e.preventDefault();
    const date = getDate()
    console.log(date)
    if (date.day < 0 && date.day > 31 || date.month < 0 && date.month > 12 || -date.year) {
      alert('data errada!')
    }
  })
}
setDate();