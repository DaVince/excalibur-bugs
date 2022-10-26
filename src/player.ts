import { Actor, CollisionType, Color, Engine, Input, vec } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  engine: Engine;

  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100,
      collisionType: CollisionType.Active
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Sword.toSprite());
  }

  public onPreUpdate(_engine: Engine, _delta: number): void {
    this.engine = _engine;

    // Handle input
    if (_engine.input.keyboard.isHeld(Input.Keys.Up)) {
      this.move(0, -32);
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.move(0, 32);
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.move(-32, 0);
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.move(32, 0);
    }
  }

  public move(x: number, y: number) {
    if (this.actions.getQueue().isComplete()) {
      this.actions.moveBy(vec(x, y), this.engine.maxFps * 8).delay(50);
    }
  }
}
