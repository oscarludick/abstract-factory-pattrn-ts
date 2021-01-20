import { Character } from "./character";

import { CharacterCreatorFactory } from "../character-factories/character-creator-factory";

export class MeleeCharacter extends Character {
  private _characterFactory: CharacterCreatorFactory;

  constructor(characterFactory: CharacterCreatorFactory) {
    super();
    this._characterFactory = characterFactory;
  }

  createCharacter() {
    this.body = this._characterFactory.createBody();
    this.build = this._characterFactory.createBuild();
    this.face = this._characterFactory.createFace();
  }
}
