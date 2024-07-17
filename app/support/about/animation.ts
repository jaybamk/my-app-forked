interface AnimationInterface {
  frameId: number | null;
  restart: (duration: number) => void;
}

class Animation implements AnimationInterface {
  protected startTime: number | null = 0;
  protected frameName: string = "animation";
  public frameId: number | null = 0;

  restart() {
    this.startTime = performance.now();
    console.log("animation");
  }
}

export class FadeInAnimation extends Animation {
  private duration = 0;
  private node: any;
  constructor(node: any) {
    super();
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timePassed = performance.now() - (this.startTime ?? 0);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    this.node.style.opacity = progress;
  }
  stop() {
    cancelAnimationFrame(this.frameId || 0);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
