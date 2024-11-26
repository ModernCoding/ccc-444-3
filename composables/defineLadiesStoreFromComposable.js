export default () => defineStore ('ladies', {

  state: () => ({

    ladies: {

      index: 0,

    
      MAP: (map => {

          map.set (0, {
              key: 'ada',
              name: 'Ada Lovelace',
              dates: '1815-1852'
            })

          map.set (1, {
              key: 'grace',
              name: 'Grace Hopper',
              dates: '1906-1992'
            })

          map.set (2, {
              key: 'margaret',
              name: 'Margaret Hamilton',
              dates: '1936-'
            })


          return map

        }) (new Map ())

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