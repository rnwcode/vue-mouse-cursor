# Vue MouseCursor 

![Screenshot](https://raw.githubusercontent.com/rnwcode/vue-mouse-cursor/master/public/example-image.png)

This Vue component integrates its own mouse cursor into your project. It inverts the background and reacts to communicated hover states. 

The following properties can be overwritten: 

Name | Type | Default
----- | ------ | --------
radius | Number | 30
hover-radius | Number | 30
is-hover | Boolean | false 
is-animated | Boolean | true

## Install

`yarn add @rnwcode/vue-mouse-cursor`

or 

`npm install --save @rnwcode/vue-mouse-cursor`

## Usage

`<MouseCursor v-bind:is-hover="mouseHover"> ... </MouseCursor>`
