import Vue from "vue";


const states = Object.assign([], { depth: 0, index: 0 });

export default class React {

    static createElement(type, props, ...children) {
        const element = {
            functional: true,
            render(createElement, context) {
                if (isFunction(type)) {
                    return type({ ...props, children })(createElement);
                }

                return createElement(type, convertJsxPropsToVueApi(props),
                    children.map(child => isFunction(child) ? child(createElement, context) : child)
                );
            }
        };

        return (createElement, ...args) => {
            states.depth++;
            const vtree = createElement(element, ...args);
            states.depth--;

            if (!states.depth) {
                states.index = 0;
            }

            return vtree;
        };
    }
}

function isFunction(object) {
    // https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
    return Object.prototype.toString.call(object) === "[object Function]";
}


export function useState() {
    const state = states[states.index] = states[states.index] || new Vue({
        data() {
            return { value: null };
        }
    });

    states.index++;

    return [state.value, value => state.value = value];
}


function convertJsxPropsToVueApi(jsxProps) {
    const props = { ...jsxProps };

    delete props.__source;
    delete props.__self;

    const className = props.className;
    delete props.className;

    const htmlAttrs = ["id", "alt", "src", "width", "heigth"];

    const attrs = Object.keys(props)
        .filter(key => htmlAttrs.includes(key))
        .reduce((acc, cur) => {
            acc[cur] = props[cur];
            delete props[cur];
            return acc;
        }, {});


    const on = Object.keys(props)
        .filter(key => key.startsWith("on"))
        .reduce((acc, cur) => {
            const key = cur.replace(/^on/, "").toLowerCase();

            acc[key] = props[cur] || (() => true);
            delete props[cur];
            return acc;
        }, {});

    const data = (...ctx) => {
        return {};
    };


    return {
        attrs,
        props: props,
        data,
        class: className,
        on,
    };
}