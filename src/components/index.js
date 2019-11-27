import Vue from 'vue';
import MouseCursor from "./MouseCursor/MouseCursor";

const Components = [
    MouseCursor
];

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components;
