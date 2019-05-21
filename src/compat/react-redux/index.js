import React from "react";

import { bindActionCreators } from "redux";

const VueProvider = {
    props: {
        consumer: { required: true, type: Function },
        store: { required: true, type: Object, },

        mapDispatchToProps: { default: () => ({}), type: Function, },
        mapStateToProps: { default: () => ({}), type: Function, },
    },

    data: ctx => ({
        state: ctx.store.getState(),
    }),

    created() {
        this.unsubscribe = this.store.subscribe(() =>
            this.state = this.store.getState()
        );
    },

    destroyed() {
        this.unsubscribe();
    },

    render(createElement) {
        const dispatch = this.mapDispatchToProps(this.store.dispatch);
        const state = this.mapStateToProps(this.state);
        const vnodes = this.consumer(createElement, { ...dispatch, ...state });
        return vnodes;
    },
};


let storeInstance;
export function Provider({ store, children }) {
    storeInstance = store;

    const consumer = (createElement, props) => {
        return children.map(child => child(createElement, props));
    };

    return <VueProvider
        store={store}
        consumer={consumer}
    />;
}

export function connect(mapStateToProps, mapDispatchToProps) {
    return component => props => {
        const consumer = (createElement, storeProps) => {
            const connectedProps = { ...storeProps, ...props };            
            const Component = {
                functional: true,
                props: Object.keys(connectedProps),
                render(createElement) {
                    return component(connectedProps)(createElement);
                },
            }

            return createElement(Component, { ...storeProps, ...props });
        };

        return <VueProvider
            store={storeInstance}
            consumer={consumer}
            mapStateToProps={mapStateToProps}
            mapDispatchToProps={dispatch => bindActionCreators(mapDispatchToProps || {}, dispatch)}
        />;
    }
}

