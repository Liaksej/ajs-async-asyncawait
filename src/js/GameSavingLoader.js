import json from "./parser.js";
import read from "./reader.js";

export class GameSavingLoader {
  static async load() {
    const readed = await read();
    return await json(readed);
  }
}
