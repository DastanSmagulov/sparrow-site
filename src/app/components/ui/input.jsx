import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ ...props }, ref) => {
  return <input className="" ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
