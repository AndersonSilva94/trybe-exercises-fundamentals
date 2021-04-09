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
  obj.damage = damageDragon
  return damageDragon
}

/* console.log(dragonDamage(dragon))
console.log(dragon) */