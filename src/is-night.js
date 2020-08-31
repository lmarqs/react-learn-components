import { useState } from "react";

export function useIsNight(initialValue) {
    return useState(initialValue);
}