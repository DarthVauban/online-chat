import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },

  reducers: {
    sendMessage(state, action) {},
  },
});

export const { sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
