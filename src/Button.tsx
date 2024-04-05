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

import { ComponentProps } from "react";

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

type ButtonProps = {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green";
};

type SuperButtonProps = ButtonProps & {
  size: "lg" | "md";
};

// rest with wrap everything in an array
// export default function Button({}: ButtonProps) {
//   return <button>Click Me</button>;
// }

export default function SuperButton({}: SuperButtonProps) {
  return <button>Click me</button>;
}

// typing event handler functions
