// eslint-disable-next-line no-undef
const isNotNodeEnv = arguments.length === 3;

if (isNotNodeEnv) {
    Object.defineProperty(exports, "__esModule", { value: true });
    Object.assign(exports, require("./index"));
}