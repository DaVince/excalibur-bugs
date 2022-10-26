import { Actor, CollisionType, Color, DisplayMode, Engine, Loader, vec } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 600, maxFps: 60});
    }
    initialize() {

      const player = new Player();
      this.add(player);

      const box = new Actor({
        pos: vec(300, 300),
        color: Color.Red,
        width: 100,
        height: 100,
        collisionType: CollisionType.Fixed
      });
      this.add(box);

      const loader = new Loader([Resources.Sword]);
      this.start(loader);
    }
  }

  export const game = new Game();
  game.initialize();