import helloTriangle from './helloTriangle';

const container = document.getElementById('root');

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

currentLoadCount++;

let numCanvases = 20;

for(var i = 0; i < numCanvases; i++)
{
    const canvas = document.createElement('canvas') as HTMLCanvasElement;

    canvas.width = 100;
    canvas.height = 100;

    container.appendChild(canvas);

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