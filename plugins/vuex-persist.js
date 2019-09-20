import VuexPersistence from 'vuex-persist'

const whitelist = ['profile/$update']

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    filter: (mutation) => whitelist.includes(mutation.type)
  }).plugin(store)
}
