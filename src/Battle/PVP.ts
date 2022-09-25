import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _char1: Fighter;
  private _char2: Fighter;
  constructor(char1: Fighter, char2: Fighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  fight(): number {
    while (this._char1.lifePoints > 0 && this._char2.lifePoints > 0) {
      this._char1.attack(this._char2);
      this._char2.attack(this._char1);
    }
    return this._char1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;