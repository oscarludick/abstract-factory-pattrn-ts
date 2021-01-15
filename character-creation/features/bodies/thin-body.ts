import { Body } from "./a-body";

export class ThinBody implements Body {
  createBody(): void {
    throw new Error("Method not implemented.");
  }
}
