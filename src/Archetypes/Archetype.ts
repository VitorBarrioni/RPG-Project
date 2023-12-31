import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;
  constructor(n: string) {
    this._name = n;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }

  abstract get energyType() : EnergyType;
}