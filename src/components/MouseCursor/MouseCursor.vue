<template>
    <div class="MouseCursor" v-on:mousemove="setNewCords">
        <div class="MouseCursorElement" v-bind:style="getCurrentStyles()"></div>
        <slot></slot>
    </div>
</template>

<script>
    import './MouseCursor.css';

    export default {
        name: 'MouseCursor',
        props: {
            radius: {
                type: Number,
                default: 30,
            },
            hoverRadius: {
                type: Number,
                default: 60
            },
            isHover: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            x: 0,
            y: 0
        }),
        methods: {
            setNewCords: function (event) {
                this.x = event.pageX;
                this.y = event.pageY;
            },
            getCurrentRadius: function () {
                if (this.isHover !== true)
                    return this.radius;

                return this.hoverRadius;
            },
            calcCords: function () {
                return {
                    top: (this.y - (this.getCurrentRadius() / 2)) + 'px',
                    left: (this.x - (this.getCurrentRadius() / 2)) + 'px',
                }
            },
            getCurrentStyles: function () {
                const radius = this.getCurrentRadius() + 'px';

                const styled = {
                    width: radius,
                    height: radius,
                    ...this.calcCords()
                };

                return styled;
            }
        }
    };
</script>
