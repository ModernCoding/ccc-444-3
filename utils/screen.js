export const setIsPortrait = () =>
  (body => body && (({ width, height }) =>
      width < height
    ) (body.getBoundingClientRect ())
  ) (document.querySelector ('body'))