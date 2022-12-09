import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
const initialState = {
    listOfLinks: [],
};

//slicer
export const linksListSlicer = createSlice({
    name: "linksList",
    initialState,
    reducers: {
        addLink: (state, action) => {
            state.listOfLinks.push(action.payload);
        },
    },
});

// for use selector
export const selectLinksList = (state) => state.linksList.listOfLinks;

// to wait  for axios
export const addLinkAsync = (url) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        console.log(response.data.result);
        dispatch(addLink(response.data.result));
    } catch (err) {
        throw new Error(err);
    }
};


export const { addLink } = linksListSlicer.actions;

// the default to link our store
export default linksListSlicer.reducer;
