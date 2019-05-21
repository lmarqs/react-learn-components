import Vue from "vue";

export default class ReactDOM {
    static render(element, container, callback) {
       const app = new Vue({
            render(createElement) {
                return element(createElement);
            }
        });

        app.$mount(container);
    }
};