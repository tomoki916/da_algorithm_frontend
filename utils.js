import { red, purple, blue, teal, green, lime, yellow, amber, deepOrange, brown, cyan, indigo } from '@mui/material/colors';

const colorChoice = [
  red,
  purple,
  blue,
  teal,
  green,
  lime,
  yellow,
  amber,
  deepOrange,
  brown,
  cyan,
  indigo
]
export function getColor(index, contrast, offset = 0) {
  return colorChoice[index + offset % colorChoice.length][contrast]
}