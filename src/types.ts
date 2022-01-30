import {JSXElement} from '@babel/types';
import Matter from 'matter-js';

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface RoadType {
  body: Matter.Body;
  size: Size;
  renderer: JSXElement;
}

export interface GameFloor {
  body: Matter.Body;
  size: Size;
  color: string;
  renderer: JSXElement;
}

export interface Entities {
  physics: {
    engine: any;
    world: any;
  };

  theRoad: RoadType;

  gameFloor: GameFloor;
}
