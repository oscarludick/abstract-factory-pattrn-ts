import { CharacterCreator } from "./character-creator";
import { Character } from "./characters/character";

export class Knight extends CharacterCreator {
  makeCharacter(classType: string, name: string): Character {
    throw new Error("Method not implemented.");
  }
}
