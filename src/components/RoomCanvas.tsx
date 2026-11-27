import { useEffect, useRef } from "react";
import type { Room, Transmitter, Receiver, Wall } from "../engine/types";
import { drawNode } from "../rendering/drawNode";
import { drawRays } from "../rendering/drawRays";
import { drawBackground } from "../rendering/drawBackground";
import { drawGrid } from "../rendering/drawGrid";
import { drawRoom, drawWalls } from "../rendering/drawRoom";
import { getRoomWalls } from "../engine/room";

interface RoomCanvasProps {
  room: Room;
  transmitter: Transmitter;
  receiver: Receiver;
}

const SCALE = 60;

const RoomCanvas = ({ room, transmitter, receiver }: RoomCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const draw = () => {
      const walls: Wall[] = [
        ...getRoomWalls(room),
        {
          start: { x: 4, y: 1 },
          end: { x: 6, y: 5 },
        },
        {
          start: { x: 1, y: 3 },
          end: { x: 3, y: 3 },
        },
      ];

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      drawBackground(ctx, canvas.width, canvas.height);
      drawGrid(ctx, canvas.width, canvas.height, SCALE);
      drawRoom(ctx, room, SCALE);
      drawWalls(ctx, walls, SCALE);
      drawRays(ctx, transmitter.position, SCALE, walls);
      drawNode(
        ctx,
        {
          position: transmitter.position,
          color: "#ff9999",
          label: "TX",
        },
        SCALE,
      );

      drawNode(
        ctx,
        {
          position: receiver.position,
          color: "#fade80",
          label: "RX",
        },
        SCALE,
      );
    };

    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    draw();

    return () => observer.disconnect();
  }, [room, transmitter, receiver]);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
};

export default RoomCanvas;
