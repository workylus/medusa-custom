"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const utils_1 = require("@medusajs/framework/utils");
const resolve_plugins_1 = require("../helpers/resolve-plugins");
const BASE_DIR = path_1.default.join(__dirname, "sample-proj");
const fs = new utils_1.FileSystem(BASE_DIR);
afterEach(async () => {
    await fs.cleanup();
});
describe("getResolvedPlugins | relative paths", () => {
    test("resolve configured plugins", async () => {
        await fs.createJson("plugins/dummy/package.json", {
            name: "my-dummy-plugin",
            version: "1.0.0",
        });
        const plugins = await (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "./plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        expect(plugins).toEqual([
            {
                resolve: path_1.default.join(fs.basePath, "./plugins/dummy/.medusa/server/src"),
                adminResolve: path_1.default.join(fs.basePath, "./plugins/dummy/.medusa/server/src/admin"),
                name: "my-dummy-plugin",
                id: "my-dummy-plugin",
                options: { apiKey: "asecret" },
                version: "1.0.0",
                modules: [],
            },
        ]);
    });
    test("scan plugin modules", async () => {
        await fs.createJson("plugins/dummy/package.json", {
            name: "my-dummy-plugin",
            version: "1.0.0",
        });
        await fs.create("plugins/dummy/.medusa/server/src/modules/blog/index.js", ``);
        const plugins = await (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "./plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        expect(plugins).toEqual([
            {
                resolve: path_1.default.join(fs.basePath, "./plugins/dummy/.medusa/server/src"),
                adminResolve: path_1.default.join(fs.basePath, "./plugins/dummy/.medusa/server/src/admin"),
                name: "my-dummy-plugin",
                id: "my-dummy-plugin",
                options: { apiKey: "asecret" },
                version: "1.0.0",
                modules: [
                    {
                        options: {
                            apiKey: "asecret",
                        },
                        resolve: "./plugins/dummy/.medusa/server/src/modules/blog",
                    },
                ],
            },
        ]);
    });
    test("throw error when package.json file is missing", async () => {
        const resolvePlugins = async () => (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "./plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        await expect(resolvePlugins()).rejects.toThrow(`Unable to resolve plugin "./plugins/dummy". Make sure the plugin directory has a package.json file`);
    });
    test("resolve admin source from medusa-plugin-options file", async () => {
        await fs.createJson("plugins/dummy/package.json", {
            name: "my-dummy-plugin",
            version: "1.0.0",
        });
        await fs.create("plugins/dummy/.medusa/server/src/modules/blog/index.js", ``);
        await fs.createJson("plugins/dummy/.medusa/server/medusa-plugin-options.json", {
            srcDir: path_1.default.join(fs.basePath, "plugins/dummy/src"),
        });
        const plugins = await (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "./plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        expect(plugins).toEqual([
            {
                resolve: path_1.default.join(fs.basePath, "./plugins/dummy/.medusa/server/src"),
                adminResolve: path_1.default.join(fs.basePath, "./plugins/dummy/src/admin"),
                name: "my-dummy-plugin",
                id: "my-dummy-plugin",
                options: { apiKey: "asecret" },
                version: "1.0.0",
                modules: [
                    {
                        options: {
                            apiKey: "asecret",
                        },
                        resolve: "./plugins/dummy/.medusa/server/src/modules/blog",
                    },
                ],
            },
        ]);
    });
});
describe("getResolvedPlugins | package reference", () => {
    test("resolve configured plugins", async () => {
        await fs.createJson("package.json", {});
        await fs.createJson("node_modules/@plugins/dummy/package.json", {
            name: "my-dummy-plugin",
            version: "1.0.0",
        });
        const plugins = await (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "@plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        expect(plugins).toEqual([
            {
                resolve: path_1.default.join(fs.basePath, "node_modules/@plugins/dummy/.medusa/server/src"),
                adminResolve: path_1.default.join(fs.basePath, "node_modules/@plugins/dummy/.medusa/server/src/admin"),
                name: "my-dummy-plugin",
                id: "my-dummy-plugin",
                options: { apiKey: "asecret" },
                version: "1.0.0",
                modules: [],
            },
        ]);
    });
    test("scan plugin modules", async () => {
        await fs.createJson("package.json", {});
        await fs.createJson("node_modules/@plugins/dummy/package.json", {
            name: "my-dummy-plugin",
            version: "1.0.0",
        });
        await fs.create("node_modules/@plugins/dummy/.medusa/server/src/modules/blog/index.js", ``);
        const plugins = await (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "@plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        expect(plugins).toEqual([
            {
                resolve: path_1.default.join(fs.basePath, "node_modules/@plugins/dummy/.medusa/server/src"),
                adminResolve: path_1.default.join(fs.basePath, "node_modules/@plugins/dummy/.medusa/server/src/admin"),
                name: "my-dummy-plugin",
                id: "my-dummy-plugin",
                options: { apiKey: "asecret" },
                version: "1.0.0",
                modules: [
                    {
                        options: {
                            apiKey: "asecret",
                        },
                        resolve: "@plugins/dummy/.medusa/server/src/modules/blog",
                    },
                ],
            },
        ]);
    });
    test("throw error when package.json file is missing", async () => {
        const resolvePlugins = async () => (0, resolve_plugins_1.getResolvedPlugins)(fs.basePath, (0, utils_1.defineConfig)({
            plugins: [
                {
                    resolve: "@plugins/dummy",
                    options: {
                        apiKey: "asecret",
                    },
                },
            ],
        }), false);
        await expect(resolvePlugins()).rejects.toThrow(`Unable to resolve plugin "@plugins/dummy". Make sure the plugin directory has a package.json file`);
    });
});
//# sourceMappingURL=get-resolved-plugins.spec.js.map