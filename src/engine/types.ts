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

export interface Ray {
    origin: Vector2;
    direction: Vector2;
}

export interface Wall {
start: Vector2;
end: Vector2;
}