import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { api } from "../../utils/api";
import { AppThunk } from "../store";

import { IPostResponse, IPostState, IPostUIResponse } from "./index.models";

const initialState: IPostState = {
  loading: false
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchStarted: state => {
      state.loading = true;
    },
    postsFulfilled: (
      state,
      action: PayloadAction<IPostUIResponse[] | undefined>
    ) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchFulfilled: state => {
      state.loading = false;
    },
    fetchFailed: (state, action: PayloadAction<AxiosError<string>>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const userActions = postSlice.actions;

export const fetchPosts =
  (): AppThunk<Promise<IPostUIResponse[] | undefined>> => async dispatch => {
    try {
      dispatch(userActions.fetchStarted());

      const { data } = await api.get<IPostResponse[]>("/posts");
      const posts: IPostUIResponse[] = data.map(p => ({
        id: p.id,
        title: p.title,
        body: p.body
      }));

      dispatch(userActions.postsFulfilled(posts));

      return posts;
    } catch (e) {
      const err = e as AxiosError<string>;
      dispatch(userActions.fetchFailed(err));

      throw err;
    }
  };

export const deletePost =
  (postId: number): AppThunk<Promise<void>> =>
  async (dispatch, getStore) => {
    try {
      dispatch(userActions.fetchStarted());

      const posts = getStore().post.posts;
      const filteredPosts = posts?.filter(p => p.id !== postId);

      dispatch(userActions.postsFulfilled(filteredPosts));
    } catch (e) {
      const err = e as AxiosError<string>;
      dispatch(userActions.fetchFailed(err));

      throw err;
    }
  };

export const addPost =
  (): AppThunk<Promise<void>> => async (dispatch, getStore) => {
    try {
      dispatch(userActions.fetchStarted());

      const posts = [...(getStore().post.posts ?? [])];
      posts?.push({
        id: posts.length + 1,
        title: "Example text" + posts.length + 1,
        body: "Lorem impsum"
      });

      dispatch(userActions.postsFulfilled(posts));
    } catch (e) {
      const err = e as AxiosError<string>;
      dispatch(userActions.fetchFailed(err));

      throw err;
    }
  };

export default postSlice.reducer;
