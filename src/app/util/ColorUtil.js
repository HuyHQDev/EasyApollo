import {APP_COLOR} from "../../res/style/AppStyle";

export const getRandomColor = () => {
    const colors = getSupportColors();
    return colors[Math.floor(Math.random() * 19)];
};

export const getSupportColors = () => {
    return [
        APP_COLOR,
        '#D32F2F', '#D81B60', '#6A1B9A', '#651FFF',
        '#536DFE', '#2979FF', '#0288D1', '#006064',
        '#009688', '#43A047', '#558B2F', '#827717',
        '#E65100', '#FF3D00', '#5D4037', '#424242',
        '#546E7A', '#000000'
    ];
};