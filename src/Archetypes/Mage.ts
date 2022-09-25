import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Mage extends ArcheType {
  static instaces = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.instaces += 1;
    this._energy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.instaces;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;