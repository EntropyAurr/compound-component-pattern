import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter iconIncrease="+" iconDecrease="-" label="My NOT so flexible counter" hideLabel={false} hideIncrease={false} hideDecrease={false} /> */}
      <div>
        <Counter>
          <Counter.Label>My first flexible counter</Counter.Label>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
        </Counter>
      </div>

      <div>
        <Counter>
          <Counter.Label>My second flexible counter</Counter.Label>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
        </Counter>
      </div>
    </div>
  );
}
