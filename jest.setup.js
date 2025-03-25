import "whatwg-fetch"
import { getEnvironments } from "./src/helpers";
import { TextEncoder, TextDecoder } from 'util';


require('dotenv').config({
    path: '.env.test'
});

jest.mock("./src/helpers", () => ({
    getEnvironments: () => ({ ...process.env})
}));


global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;