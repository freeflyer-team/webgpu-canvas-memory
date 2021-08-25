# webgpu-canvas-memory 

## [Demo](https://the-ocho.github.io/webgpu-canvas-memory/index.html)

This WebGPU demo shows the memory overhead of instantiating multiple
WebGPU devices within a single JS app. Note how in [main.ts](https://github.com/the-ocho/webgpu-canvas-memory/blob/master/src/main.ts)
20 Canvas instances are created, each [requesting their own GPU device](https://github.com/the-ocho/webgpu-canvas-memory/blob/master/src/helloTriangle.ts#L22-L24).
This implementation is based on [this helloTriangle implementation](https://github.com/austinEng/webgpu-samples/blob/master/src/examples/helloTriangle.ts).

Zazz a ma phone
