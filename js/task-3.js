function getElementWidth (content, padding, border) {
  const parseContent = parseFloat(content);
  const parsePadding = parseFloat(padding);
  const parseBorder = parseFloat(border);
  const totalWidth = parseContent + parsePadding * 2 + parseBorder * 2;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

