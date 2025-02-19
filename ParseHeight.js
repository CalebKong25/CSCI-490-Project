function parseHeight(height) {
  const [feet, inches] = height.split("'").map(part => parseInt(part, 10));
  return feet * 12 + (inches || 0);
}
