export default () => defineStore ('screen', {

  state: () => ({

    screen : {

      heights: {
          header: 0,
          aside: 0,
          main: 0,
          footer: 0,
        },

      isPortrait: false,
      
      paddingTops: {
          aside: 0,
          main: 0,
          footer: 0,
        }
      
    }

  })

})