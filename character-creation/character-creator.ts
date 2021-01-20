import { Character } from "./characters/character";

export abstract class CharacterCreator {
  customizeCharacter(classType: string, name: string): Character {
    
    return character;
  }

  abstract createCharacter(classType: string, name: string): Character;
}