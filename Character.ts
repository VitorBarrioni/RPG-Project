import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(n: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(n, getRandomInt(1, 10));
    this._archetype = new Mage(n);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get defense(): number {
    return this._defense;
  }

  public get strength(): number {
    return this._strength;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this._defense;
    damage = damage > 0 ? damage : 1;
    const newLife = this._lifePoints - damage;
    return this._lifePoints <= 0 ? -1 : newLife;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints = this._maxLifePoints > this.race.maxLifePoints
      ? this.race.maxLifePoints
      : this._maxLifePoints;
    this._lifePoints = this._maxLifePoints;
  }
}
