import { Character } from "./characters/character";

export abstract class CharacterCreator {
  abstract makeCharacter(classType: string, name: string): Character;
}
