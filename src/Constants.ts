import {Dimensions} from 'react-native';
import {Size} from './types';

const {height, width} = Dimensions.get('window');

export const DEVICE_HEIGHT = height;
export const DEVICE_WIDTH = width;

export const CAR_WIDTH = 10;
export const CAR_HEIGHT = 13;

export const MID_POINT = width / 2 - CAR_WIDTH / 2;

export const ROAD_SIZE: Size = {width: 20, height: 100};

//export const BOX_SIZE:
