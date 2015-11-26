var patterns = {
  zigZagVertical: function(color1, color2, row, index) {
    if(_.includes([0, 1], index % 4))
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  zigZagHorizontal: function(color1, color2, row, index) {
    if(
        (_.includes([0, 1, 2], index % 4) && row % 6 == 0) ||
        (_.includes([0, 2, 3], index % 4) && row % 6 == 1) ||
        (_.includes([1, 2, 3], index % 4) && row % 6 == 3) ||
        (_.includes([0, 1, 3], index % 4) && row % 6 == 4)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },


  hexagons: function(color1, color2, row, index) {
    if(_.includes([0, 1, 2], index % 4))
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  rhombiAlternating: function(color1, color2, row, index) {
    if(_.includes([0, 1, 2], index % 5) && row % 2 == 0)
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  rhombiUpward: function(color1, color2, row, index) {
    if(_.includes([0, 1, 2], index % 4) && row % 2 == 0)
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  rhombiDownward: function(color1, color2, row, index) {
    if(_.includes([0, 1, 2], index % 4) && row % 1 == 1)
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  diamondsAndWeirdness: function(color1, color2, row, index) {
    if(
        (row % 4 == 0 && index % 5 == 2) ||
        (row % 4 == 1 && _.include([1, 2, 3], index % 5)) ||
        (row % 4 == 2 && _.include([1, 2, 3], index % 5)) ||
        (row % 4 == 3 && index % 5 == 2)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  hexagrams: function(color1, color2, row, index) {
    if(
        (row % 4 == 0 && index % 6 == 2) ||
        (row % 4 == 1 && _.include([0, 1, 2, 3, 4], index % 6)) ||
        (row % 4 == 2 && _.include([0, 1, 2, 3, 4], index % 6)) ||
        (row % 4 == 3 && index % 6 == 2)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  hexagramsSparse: function(color1, color2, row, index) {
    if(
        (row % 6 == 0 && index % 8 == 2) ||
        (row % 6 == 1 && _.include([0, 1, 2, 3, 4], index % 8)) ||
        (row % 6 == 2 && _.include([0, 1, 2, 3, 4], index % 8)) ||
        (row % 6 == 3 && index % 8 == 2)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  diamonds: function(color1, color2, row, index) {
    if(
        (row % 4 == 0 && index % 4 == 2) ||
        (row % 4 == 1 && _.include([1, 2, 3], index % 4)) ||
        (row % 4 == 2 && _.include([1, 2, 3], index % 4)) ||
        (row % 4 == 3 && index % 4 == 2) 
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  diamondsSparse: function(color1, color2, row, index) {
    if(
        (row % 6 == 0 && index % 6 == 2) ||
        (row % 6 == 1 && _.include([1, 2, 3], index % 6)) ||
        (row % 6 == 2 && _.include([1, 2, 3], index % 6)) ||
        (row % 6 == 3 && index % 6 == 2)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  hexagonsAndTriangles: function(color1, color2, row, index) {
    if(
        (row % 6 == 0 && index % 6 == 5) ||
        (row % 6 == 1 && _.include([1, 2, 3], index % 6)) ||
        (row % 6 == 2 && _.include([1, 2, 3], index % 6)) ||
        (row % 6 == 3 && index % 6 == 5) ||
        (row % 6 == 4 && index % 6 == 2) ||
        (row % 6 == 5 && index % 6 == 2)
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  hexagonsSparse: function(color1, color2, row, index) {
    if(
        (row % 4 == 1 && _.include([1, 2, 3], index % 6)) ||
        (row % 4 == 2 && _.include([1, 2, 3], index % 6))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  vsco: function(color1, color2, row, index) {
    if(
        (row % 4 == 1 && _.include([1, 2], index % 6)) ||
        (row % 4 == 2 && _.include([1, 2], index % 6))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  rainLeft: function(color1, color2, row, index) {

    if(
        (row % 4 == 0 && _.include([0, 1], index % 4)) ||
        (row % 4 == 1 && _.include([0, 3], index % 4)) ||
        (row % 4 == 3 && _.include([1, 2], index % 4))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  graterLeft: function(color1, color2, row, index) {

    if(
        (row % 2 == 0 && _.include([0, 1], index % 4)) ||
        (row % 2 == 1 && _.include([0, 3], index % 4))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  parallelograms: function(color1, color2, row, index) {

    if(
        (row % 2 == 0 && _.include([1, 2], index % 4)) ||
        (row % 2 == 1 && _.include([0, 3], index % 4))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

  checkered: function(color1, color2, row, index) {

    if(
        (row % 4 == 0 && _.include([0, 1], index % 4)) ||
        (row % 4 == 1 && _.include([1, 2], index % 4)) ||
        (row % 4 == 2 && _.include([2, 3], index % 4)) ||
        (row % 4 == 3 && _.include([3, 0], index % 4))
      )
      return _.sample(color1)
    else
      return _.sample(color2)
  },

}
