import RoomCanvas from "./components/RoomCanvas";

const App = () => {
  return (
    <main className="flex h-dvh w-full flex-col overflow-hidden bg-zinc-950 p-6 text-zinc-100">
      <h1 className="text-4xl font-bold tracking-widest text-blue-400">
        Signaanalyse
      </h1>

      <p className="mt-2 text-zinc-400">Simulering av radiofrekvenser</p>

      <section className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
        <RoomCanvas
          room={{ width: 13, height: 10 }}
          transmitter={{ id: "123", position: { x: 5, y: 5 } }}
          receiver={{ id: "321", position: { x: 7, y: 8 } }}
        />
      </section>
    </main>
  );
};

export default App;
