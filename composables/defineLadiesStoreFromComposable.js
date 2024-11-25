export default () => defineStore ('ladies', {

  state: () => ({

    ladies: {
      index: 0,
      names: [ 'Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton' ]
    }

  }),


  actions: {

    patchIndex (i = 0) {
      this.ladies.index = i
    },

    resetIndex () {
      this.ladies.index = 0
    }

  }

})