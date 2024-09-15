export const patchHeights = () =>
  (body => body && (({ height }) => {

      const ratioPart
        = 1 + PHI + PHI ** 2 + PHI ** 3 + PHI ** 4 + PHI ** 5
    
      return {
        header: height / ratioPart * PHI ** 2,
        aside: height / ratioPart * PHI ** 4,
        main: height / ratioPart * PHI ** 5,
        footer: height / ratioPart * PHI ** 3
      }
    
    }) (body.getBoundingClientRect ())
  ) (document.querySelector ('body'))


export const setIsPortrait = () =>
  (body => body && (({ width, height }) =>
      width < height
    ) (body.getBoundingClientRect ())
  ) (document.querySelector ('body'))