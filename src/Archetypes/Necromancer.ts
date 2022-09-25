import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Necromancer extends ArcheType {
  static instaces = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.instaces += 1;
    this._energy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.instaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;