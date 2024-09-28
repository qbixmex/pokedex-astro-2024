import { createSignal, type Component, type JSX } from "solid-js";

type Props = {
  initialValue: number;
  children?: string;
};

const Counter: Component<Props> = (props) => {
  const [ counter, setCounter ] = createSignal(props.initialValue);

  return (
    <>
      <h2 class="text-3xl text-orange-600 mb-5">{props.children}: {counter()}</h2>

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
