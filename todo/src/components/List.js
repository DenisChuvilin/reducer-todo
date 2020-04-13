import React from "react";

import { initialState, reducer } from "../reducers/reducer";

const [state, dispatch] = useReducer(reducer, initialState) 