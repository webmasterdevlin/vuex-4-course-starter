import * as types from "./types";
import { get, deleteById, post, put } from "@/api/axiosConfig";

export function getAntiHeroesAction({ commit }) {
  commit(types.IS_LOADING_ANTI_HERO, true);

  return get("anti-heroes")
    .then(({ data }) => commit(types.GET_ANTI_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_ANTI_HERO, false));
}

export function removeAntiHeroAction({ commit }, payload) {
  commit(types.IS_LOADING_ANTI_HERO, true);

  return deleteById("anti-heroes", payload)
    .then(() => commit(types.REMOVE_ANTI_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_ANTI_HERO, false));
}

export function addAntiHeroAction({ commit }, payload) {
  commit(types.IS_LOADING_ANTI_HERO, true);

  return post("anti-heroes", payload)
    .then(({ data }) => commit(types.ADD_ANTI_HERO, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_ANTI_HERO, false));
}

export function updateAntiHeroAction({ commit }, payload) {
  commit(types.IS_LOADING_ANTI_HERO, true);

  return put("anti-heroes", payload)
    .then(() => commit(types.UPDATE_ANTI_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.IS_LOADING_ANTI_HERO, false));
}
