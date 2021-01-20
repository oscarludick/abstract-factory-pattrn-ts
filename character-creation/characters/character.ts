import { Body } from "../features/bodies/a-body";
import { Build } from "../features/builds/build";
import { Face } from "../features/faces/a-face";

export abstract class Character {
  body: Body;
  face: Face;
  build: Build;

  abstract createCharacter(): void;

  description(): void {
    console.log(`Body ${this.body}, Build ${this.build}, Face ${this.face}`);
  }
}
