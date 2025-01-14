declare module 'dom-to-image-more' {
    export function toPng(node: any, options?: any): Promise<string>;
    export function toJpeg(node: any, options?: any): Promise<string>;
    export function toSvg(node: any, options?: any): Promise<string>;
    export function toBlob(node: any, options?: any): Promise<Blob>;
    export function toPixelData(node: any, options?: any): Promise<number[]>;
    export function toCanvas(node: any, options?: any): Promise<HTMLCanvasElement>;
}
