import { ADD_TO_MEMORY } from "../action/action";
import { CLEAR } from "../action/action";
import { ADD } from "..//action/action";
import { SUB } from "..//action/action";
import { MULT } from "..//action/action";
import { DIV } from "..//action/action";
import { CALCULATION } from "../action/action";

let initialState = {
    prev: "",
    result: "",
    current: "",
    action: "",
    disabled: true,
    dotted: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MEMORY: {

            let id = action.result.target.id;
            state.result += id;

            if (state.result === '.') {
                state.dotted = 1;
            }

            return {
                ...state
            };

        }

        case CLEAR: {
            state.result = "";
            state.prev = "";
            state.dotted = 0;
            state.disabled = true;

            return {
                ...state
            };
        }

        case ADD: {
            state.prev = state.result;
            state.result = "";
            state.action = "add";
            state.disabled = false;
            state.dotted = 0;

            return {
                ...state
            };
        }

        case SUB: {
            state.prev = state.result;
            state.result = "";
            state.action = "sub";
            state.disabled = false;
            state.dotted = 0;

            return {
                ...state
            };
        }

        case MULT: {
            state.prev = state.result;
            state.result = "";
            state.action = "mult";
            state.disabled = false;
            state.dotted = 0;

            return {
                ...state
            };
        }

        case DIV: {
            state.prev = state.result;
            state.result = "";
            state.action = "div";
            state.disabled = false;
            state.dotted = 0;

            return {
                ...state
            };
        }

        case CALCULATION: {
            if (state.action === "add") {
                state.current = state.prev;
                state.result = parseFloat(state.result) + parseFloat(state.current);
                state.dotted = 0;
                state.disabled = true;

                state.prev = "";
            } else if (state.action === "sub") {
                state.current = state.prev;
                state.result = parseFloat(state.prev) - parseFloat(state.result);
                state.dotted = 0;
                state.disabled = true;

            } else if (state.action === "mult") {
                state.current = state.prev;
                state.result = parseFloat(state.result) * parseFloat(state.prev);
                state.dotted = 0;
                state.disabled = true;

            } else if (state.action === "div") {
                state.current = state.prev;
                state.result = parseFloat(state.prev) / parseFloat(state.result);
                state.dotted = 0;
                state.disabled = true;
            }

            return {
                ...state
            };
        }

        default:
            return state;
    }
};
