import { useState } from "react";

export function useStateWithLog(...args) {
    console.log(`useState[${args.join()}]`);
    return useState(...args);
}