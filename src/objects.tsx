import Matter from 'matter-js';
import {DEVICE_HEIGHT, DEVICE_WIDTH, ROAD_SIZE} from './Constants';

export const roadBody = Matter.Bodies.rectangle(
  DEVICE_WIDTH / 2,
  100,
  ROAD_SIZE.width,
  ROAD_SIZE.height,
  {
    isStatic: true,
    isSensor: false,
    label: 'road',
  },
);

export const floor = Matter.Bodies.rectangle(
  DEVICE_WIDTH / 2,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  10,
  {
    isStatic: true,
    isSensor: true,
    label: 'floor',
  },
);
