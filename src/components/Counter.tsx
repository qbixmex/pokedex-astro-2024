import { createSignal } from "solid-js";

const Counter = () => {
  const [ counter, setCounter ] = createSignal(10);

  return (
    <>
      <h2 class="text-3xl text-orange-600 mb-5">Counter: {counter()}</h2>

      <div class="flex gap-x-2">
        <button
          class="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          onClick={() => setCounter(previousCounterValue => ++previousCounterValue)}
        >+</button>

        <button
          class="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          onClick={() => {
            if (counter() > 0) {
              setCounter(prev => prev - 1);
            }
          }}
        >-</button>
      </div>
    </>
  );
};

export default Counter;
