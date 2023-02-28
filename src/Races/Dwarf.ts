import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 74;
  private static _instances = 0;
  constructor(name: string, dexterity: number, max: number) {
    super(name, dexterity);
    this._maxLifePoints = max;
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}