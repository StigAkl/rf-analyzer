import { useEffect, useRef } from "react";
import type { Room, Transmitter, Receiver } from "../engine/types";

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

    canvas.width = room.width * SCALE;
    canvas.height = room.height * SCALE;

    ctx.fillStyle = "#09090b";

    ctx.fillRect(0, 0, canvas.width * SCALE, canvas.height * SCALE);

    ctx.strokeStyle = "#27272a";
    ctx.lineWidth = 1;

    for (let x = 0; x <= room.width; x++) {
      ctx.beginPath();
      ctx.moveTo(x * SCALE, 0);
      ctx.lineTo(x * SCALE, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y <= room.height; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * SCALE);
      ctx.lineTo(canvas.width, y * SCALE);
      ctx.stroke();
    }

    // Room boundary eller noe sånt
    ctx.strokeStyle = "#71717a";
    ctx.lineWidth = 4;

    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 2;
  }, [room, transmitter]);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
};

export default RoomCanvas;
