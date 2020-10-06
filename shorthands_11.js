// 11. Default Parameter Values

//Longhand:
function volume(l, w, h) {
    if (w === undefined)
      w = 3;
    if (h === undefined)
      h = 4;
    return l * w * h;
  }


//Shorthand:
volume = (l, w = 3, h = 4 ) => (l * w * h);

volume(2) //output: 24