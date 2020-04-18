Split(['#left','#right'], {
    elementStyle: (dimension, size, gutterSize) => ({
      'flex-basis': `calc(${size}% - ${gutterSize}px)`,
    }),
    gutterStyle: (dimension, gutterSize) => ({
      'flex-basis':  `${gutterSize}px`,
    }),
	sizes: [25, 75],
  expandToMin: true,
})
alert('worked')