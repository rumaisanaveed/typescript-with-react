import { type Colors } from "./lib/types";

// export default function Button({
//   backgroundColor,
// }: {
//   backgroundColor: string;
// }) {
//   // one more way of accepting props
//   return (
//     // how to accept props
//     <button
//       style={{ backgroundColor: `${backgroundColor}` }}
//       className="bg-blue-500 text-white rounded px-4 py-2"
//     >
//       Click me
//     </button>
//   );
// }

import { ComponentProps, useEffect, useRef, useState } from "react";

// type Color = "red" | "blue" | "green";

// type ButtonProps = {
//   // more cleaner code will have the Color type
//   backgroundColor: Color;
//   // padding: number[];
//   // we can use tuples for specifying how many times
//   padding: [number, number, number, number];
//   // backgroundColor: string;
// };

// type ButtonProps = {
//   // instead of this we can write this
//   //   style: {
//   //     // backgroundColor: string;
//   //     // fontSize: number;
//   //     // textColor: string;
//   //
//   //   };
//   style: React.CSSProperties;
// };

// one more way of accepting props
// export default function Button({ style }: ButtonProps) {
//   return (
//     // how to accept props
//     <button
//       //   style={
//       //     {
//       //       // backgroundColor: backgroundColor,
//       //       // padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
//       //       // not a good practice
//       //     }
//       //   }
//       style={style}
//     >
//       Click me
//     </button>
//   );
// }

// record type

// type ButtonProps = {
//   borderRadius: Record<string, number>;
// };

// export default function Button({ borderRadius }: ButtonProps) {
//   return <button>Click me</button>;
// }

// type ButtonProps = {
//   // accepts everything
//   //   children: React.ReactNode;
//   // if we only want to allow jsx elements, we can't pass text here now
//   //   children: JSX.Element;
//   // setCount: React.Dispatch<React.SetStateAction<number>>;
//   autoFocus? : boolean,
//   type : "submit" | "reset" | "button"
// };

// we can use react component props type to get all the attributes which an html element can have
// type ButtonProps = ComponentProps<"button"> & {
//   variant?: "primary" | "secondary";
// };

// intersection

// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green";
// };

// type SuperButtonProps = ButtonProps & {
//   size: "lg" | "md";
// };

// rest with wrap everything in an array
// export default function Button({}: ButtonProps) {
//   return <button>Click Me</button>;
// }

// export default function SuperButton({}: SuperButtonProps) {
//   return <button>Click me</button>;
// }

// typing event handler functions

type User = {
  name: string;
  age: number;
};

// only age will be included in this type
type Guest = Omit<User, "name">;

type ButtonColor = "red" | "blue" | "green";

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
  color: Colors;
};

export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  // const [user, setUser] = useState<User | null>(null);
  // const ref = useRef<HTMLButtonElement>(null);

  // getting an item from local storage
  useEffect(() => {
    const previousBtnColor = localStorage.getItem("buttonColor") as ButtonColor;
    console.log(previousBtnColor);
  });

  // we're saying that this function will return the array of that value which it will take as input
  const convertToArray = <T,>(value: T): T[] => {
    return [value];
  };

  convertToArray(5);
  convertToArray("Rumaisa");

  // const name = user?.name;

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log("Button clicked");
  // };
  // we can't add anything and the array members will be constant and the array will be read only
  // const buttonTextOptions = ["Click me", "Click me", "Click me"] as const;

  return (
    // <button>
    //   {buttonTextOptions.map((option) => {
    //     return option;
    //   })}
    // </button>
    <button></button>
  );
}
