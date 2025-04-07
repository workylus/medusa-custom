"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const format_registration_name_1 = require("../format-registration-name");
describe("formatRegistrationName", () => {
    const tests = [
        [["medusa-test-dir", "dist", "services", "my-test.js"], "myTestService"],
        [["medusa-test-dir", "dist", "services", "my.js"], "myService"],
        [["services", "my-quite-long-file.js"], "myQuiteLongFileService"],
        [
            ["/", "Users", "seb", "com.medusa.js", "services", "dot.js"],
            "dotService",
        ],
        [
            ["/", "Users", "seb.rin", "com.medusa.js", "services", "dot.js"],
            "dotService",
        ],
        [
            ["/", "Users", "seb.rin", "com.medusa.js", "repositories", "dot.js"],
            "dotRepository",
        ],
        [
            ["/", "Users", "seb.rin", "com.medusa.js", "models", "dot.js"],
            "dotModel",
        ],
        [["C:", "server", "services", "dot.js"], "dotService"],
    ];
    test.each(tests.map(([pathParts, expected]) => [path_1.default.join(...pathParts), expected]))("Service %s -> %s", (fn, expected) => {
        const res = (0, format_registration_name_1.formatRegistrationName)(fn);
        expect(res).toEqual(expected);
    });
});
describe("formatRegistrationNameWithoutNamespace", () => {
    const tests = [
        [["medusa-test-dir", "dist", "services", "my-test.js"], "myTest"],
        [["medusa-test-dir", "dist", "services", "my.js"], "my"],
        [["services", "my-quite-long-file.js"], "myQuiteLongFile"],
        [["/", "Users", "seb", "com.medusa.js", "services", "dot.js"], "dot"],
        [["/", "Users", "seb.rin", "com.medusa.js", "services", "dot.js"], "dot"],
        [
            ["/", "Users", "seb.rin", "com.medusa.js", "repositories", "dot.js"],
            "dot",
        ],
        [["/", "Users", "seb.rin", "com.medusa.js", "models", "dot.js"], "dot"],
        [["C:", "server", "services", "dot.js"], "dot"],
    ];
    test.each(tests.map(([pathParts, expected]) => [path_1.default.join(...pathParts), expected]))("Service %s -> %s", (fn, expected) => {
        const res = (0, format_registration_name_1.formatRegistrationNameWithoutNamespace)(fn);
        expect(res).toEqual(expected);
    });
});
//# sourceMappingURL=format-registration-name.js.map