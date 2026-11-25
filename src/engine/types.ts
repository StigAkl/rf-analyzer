export interface Vector2 {
x: number;
y: number;
}

export interface Room {
    width: number;
    height: number;

}

export interface Transmitter{
    id: string;
    position: Vector2;
}

export interface Receiver {
    id: string;
    position: Vector2;
}