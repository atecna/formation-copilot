function calculateArea(shape, width, height) {
  if (shape === 'rectangle') {
    return width * height;
  } else if (shape === 'triangle') {
    return (width * height) / 2;
  } else {
    return 0;
  }
}