import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './app'
import { UserState } from './user'

Vue.use(Vuex)

export interface RootState {
  app: AppState;
  user: UserState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({});
