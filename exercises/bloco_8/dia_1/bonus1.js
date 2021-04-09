const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const dragonDamage = (obj) => {
  let maxStrength = obj.strength;
  const damageDragon = Math.round(Math.random() * (maxStrength - 15) + 15);
  obj.damage = damageDragon;
  return obj.damage;
}

/* console.log(dragonDamage(dragon))
console.log(dragon) */

/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).*/

const warriorDamage = (obj) => {
  let minStrength = obj.strength;
  let maxStrength = obj.strength * obj.weaponDmg;
  const damageWarrior = Math.round(Math.random() * (maxStrength - minStrength) + minStrength);
  obj.damage = damageWarrior;
  return obj.damage;
}

/* console.log(warriorDamage(warrior));
console.log(warrior); */