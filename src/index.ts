import { initGame } from "./loader";
import { Renderer } from "./renderer";

initGame();
const renderer = new Renderer("canvas");
renderer.start();
