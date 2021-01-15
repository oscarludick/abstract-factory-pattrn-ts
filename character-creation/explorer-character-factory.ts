import { Body } from "./features/bodies/a-body";
import { Build } from "./features/builds/build";
import { Face } from "./features/faces/face";

import { ThinBody } from "./features/bodies/thin-body";

import { CharacterCreatorFactory } from "./character-creator-factory";
import { AsianFace } from "./features/faces/asian-face";
import { ExplorerBuild } from "./features/builds/explorer-build";

export class ExplorerCharacerFactory implements CharacterCreatorFactory {
  createBody(): Body {
    return new ThinBody();
  }
  createFace(): Face {
    return new AsianFace();
  }
  createBuild(): Build {
    return new ExplorerBuild();
  }
}
