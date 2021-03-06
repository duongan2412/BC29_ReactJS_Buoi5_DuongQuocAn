import dataShoes from "./../../data/data_giay.json";

const DEFAULT_STATE = {
    selectedShoes: dataShoes[0],
}

export const shoesReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "SELECTED_SHOES":
            state.selectedShoes = payload
            return { ...state }

        default:
            return state
    }
}