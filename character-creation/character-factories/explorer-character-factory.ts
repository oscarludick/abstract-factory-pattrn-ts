import { Body } from "../features/bodies/a-body";
import { Build } from "../features/builds/build";
import { Face } from "../features/faces/a-face";

import { ExplorerBuild } from "../features/builds/explorer-build";
import { ThinBody } from "../features/bodies/thin-body";
import { AsianFace } from "../features/faces/asian-face";

import { CharacterCreatorFactory } from "./character-creator-factory";

export class ExplorerFactory implements CharacterCreatorFactory {
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
