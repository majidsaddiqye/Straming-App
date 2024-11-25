export { removepeople } from "../store/reducers/peopleSlice";
import axios from "../utils/axios";
import { loadpeople } from "../store/reducers/peopleSlice";

export const asyncloadpeople = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    const vd = {
      detail: detail.data,
      externalid: combinedCredits.data,
      combinedCredits: externalid.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    console.log(vd);
    dispatch(loadpeople(vd));
  } catch (error) {
    console.error("Error:", error);
  }
};
