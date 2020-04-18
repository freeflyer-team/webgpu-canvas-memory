import helloTriangle from './helloTriangle';

const canvasContainer = document.getElementById('canvas-container');

class ExampleInstance {
    public frameCallback: (timestamp: number) => boolean;
    public loadCount: number;

    public animate(): void {
        requestAnimationFrame((timestamp) => { this.animate_internal(timestamp); });
    }

    public animate_internal(timestamp: number): void {
        if(!this.frameCallback(timestamp))
            return;

        requestAnimationFrame((timestamp) => { this.animate_internal(timestamp); });
    }
}

let currentLoadCount = 0;

canvasContainer.innerHTML = "";
currentLoadCount++;

let numCanvases = 20;

for(var i = 0; i < numCanvases; i++)
{
    let canvas = document.createElement('canvas');

    canvas.width = 100;
    canvas.height = 100;

    canvasContainer.appendChild(canvas);

    helloTriangle(canvas).then((frame) =>
    {
        let instance = new ExampleInstance();

        instance.loadCount = currentLoadCount;

        instance.frameCallback = (timestamp) =>
        {
            if(instance.loadCount != currentLoadCount)
                return false;
            
            frame();

            return true;
        };
    
        instance.animate();    
    });
}