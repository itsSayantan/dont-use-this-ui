export enum Colors {
  dark1 = "dark1",
  dark2 = "dark2",
  gray1 = "gray1",
  gray2 = "gray2",
  light1 = "light1",
  light2 = "light2",
  primary = "primary",
  error = "error",
  success = "success",
  info = "info",
  warning = "warning",
}

export default {
  dark1: "rgba(44, 62, 80,1.0)",
  dark2: "rgba(52, 73, 94,1.0)",
  gray1: "rgba(127, 140, 141,1.0)",
  gray2: "rgba(149, 165, 166,1.0)",
  light1: "rgba(189, 195, 199,1.0)",
  light2: "rgba(236, 240, 241,1.0)",
  primary: "rgba(41, 128, 185,1.0)",
  error: "rgba(231, 76, 60,1.0)",
  success: "rgba(39, 174, 96,1.0)",
  info: "rgba(22, 160, 133,1.0)",
  warning: "rgba(241, 196, 15,1.0)",
} as { [key in Colors]: string };
