export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const CLEAR = "CLEAR";
export const ADD = "ADD";
export const SUB = "SUB";
export const MULT = "MULT";
export const DIV = "DIV";
export const CALCULATION = "CALCULATION";

export const addToMemory = (event) => ({
    type: ADD_TO_MEMORY,
    result: event
});

export const clear = () => ({
    type: CLEAR
});

export const addition = () => ({
    type: ADD
});

export const subtraction = () => ({
    type: SUB
});

export const multiplication = () => ({
    type: MULT
});

export const divide = () => ({
    type: DIV
});

export const calculation = action => ({
    type: CALCULATION,
    action: action
});
