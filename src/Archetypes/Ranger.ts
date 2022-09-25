import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Ranger extends ArcheType {
  static instaces = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.instaces += 1;
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.instaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;