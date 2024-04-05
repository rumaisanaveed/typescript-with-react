import { useState } from "react";
import Button from "./Button";
import SuperButton from "./Button";

export default function Home() {
  // const [count, setCount] = useState<number>(0);
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <Button
        // style={{ backgroundColor: "blue", fontSize: 24, color: "white" }}
        borderRadius={{
          topLeft: 5,
          topRight: 5,
          bottomRight: 10,
          bottomLeft: 10,
        }}
      /> */}
      {/* how to use components with the closing tag and with the inner childs */}
      {/* <Button>Click Me</Button> */}
      {/* <Button>
        <div>Hello</div>
      </Button> */}
      {/* <Button /> */}
      <SuperButton type="submit" color="blue" size="lg" />
    </div>
  );
}
