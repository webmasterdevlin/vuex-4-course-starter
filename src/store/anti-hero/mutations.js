import * as types from "./types";

const mutations = {
  [types.GET_ANTI_HEROES](state, antiHeroes) {
    state.antiHeroes = antiHeroes;
  },

  [types.IS_LOADING_ANTI_HERO](state, toggle) {
    state.isLoading = toggle;
  },

  [types.REMOVE_ANTI_HERO](state, id) {
    state.antiHeroes = state.antiHeroes.filter((h) => h.id !== id);
  },

  [types.ADD_ANTI_HERO](state, antiHeroData) {
    state.antiHeroes.push(antiHeroData);
  },

  [types.UPDATE_ANTI_HERO](state, antiHero) {
    const index = state.antiHeroes.findIndex((h) => h.id === antiHero.id);
    state.antiHeroes[index] = antiHero;
  },
};

export default mutations;
