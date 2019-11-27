import Vue from 'vue';
import {shallowMount} from "@vue/test-utils";
import MouseCursor from "@/components/MouseCursor/MouseCursor";

const wrapper = shallowMount(MouseCursor, {});

describe("MouseCursor.vue", () => {
    it("set the correct default data", () => {
        expect(typeof MouseCursor.data).toBe('function');
        const defaultData = MouseCursor.data();
        expect(defaultData.x).toBe(0);
    });

    it("calculate the correct calculations", () => {

        expect(wrapper.vm.getCurrentRadius()).toBe(30);
        expect(JSON.stringify(wrapper.vm.calcCords())).toBe(JSON.stringify({top: '-15px', left: '-15px'}));
    });

    it("generate the correct styles", () => {
        expect(JSON.stringify(wrapper.vm.getCurrentStyles())).toBe(
            JSON.stringify(
                {
                    width: '30px',
                    height: '30px',
                    top: '-15px',
                    left: '-15px'
                }
            )
        );
    });
});
