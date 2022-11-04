import {
  circle,
  gapped,
  horizontal,
  round,
  square,
  vertical,
  facebook,
  instagram,
  youtube,
  tictok,
  telegram,
  twitter,
} from "./assets/img";

export const drawersNames = [
  { name: "square", icon: square },
  { name: "gapped", icon: gapped },
  { name: "horizontal", icon: horizontal },
  { name: "round", icon: round },
  { name: "circle", icon: circle },
  { name: "vertical", icon: vertical },
];

export const presetNames = [
  { name: "facebook", icon: facebook },
  { name: "instagram", icon: instagram },
  { name: "youtube", icon: youtube },
  { name: "tictok", icon: tictok },
  { name: "telegram", icon: telegram },
  { name: "twitter", icon: twitter },
];

export const endPoints = {
  generator: 'https://generatorqr.herokuapp.com//generate',
  registration: 'https://generatorqr.herokuapp.com//registration',
  login: 'https://generatorqr.herokuapp.com//login',
  verify: 'https://generatorqr.herokuapp.com//check',
}
