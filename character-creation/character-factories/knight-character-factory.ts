import { Body } from "../features/bodies/a-body";
import { Build } from "../features/builds/build";
import { Face } from "../features/faces/a-face";

import { KnightBuild } from "../features/builds/knight-build";
import { AverageBody } from "../features/bodies/average-body";
import { EuropeanFace } from "../features/faces/eureopan-face";

import { CharacterCreatorFactory } from "./character-creator-factory";

export class KnightFactory implements CharacterCreatorFactory {
  createBody(): Body {
    return new AverageBody();
  }
  createFace(): Face {
    return new EuropeanFace();
  }
  createBuild(): Build {
    return new KnightBuild();
  }
}
