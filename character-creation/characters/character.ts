import { Body } from "../features/bodies/a-body";
import { Build } from "../features/builds/build";
import { Face } from "../features/faces/face";

export abstract class Character {
  body: Body;
  face: Face;
  build: Build;

  abstract createCharacter(): void;
}
