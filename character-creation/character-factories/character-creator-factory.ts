import { Body } from "../features/bodies/a-body";
import { Build } from "../features/builds/build";
import { Face } from "../features/faces/a-face";

export interface CharacterCreatorFactory {
  createBody(): Body;
  createFace(): Face;
  createBuild(): Build;
}
