"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@medusajs/framework/logger");
const utils_1 = require("@medusajs/framework/utils");
const path_1 = require("path");
const generate_1 = __importDefault(require("../../generate"));
jest.mock("@medusajs/framework/logger");
describe("plugin-generate", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest
            .spyOn(process, "exit")
            .mockImplementation((code) => {
            return code;
        });
    });
    afterEach(async () => {
        const module1 = new utils_1.FileSystem((0, path_1.join)(__dirname, "..", "__fixtures__", "plugins-1", "src", "modules", "module-1"));
        await module1.remove("migrations");
    });
    describe("main function", () => {
        it("should successfully generate migrations when valid modules are found", async () => {
            await (0, generate_1.default)({
                directory: (0, path_1.join)(__dirname, "..", "__fixtures__", "plugins-1"),
            });
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(1, "Generating migrations...");
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(2, "Generating migrations for module module1...");
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(3, expect.stringContaining("Migration created"));
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(4, "Migrations generated");
            expect(process.exit).toHaveBeenCalledWith();
        });
        it("should handle case when no migrations are needed", async () => {
            await (0, generate_1.default)({
                directory: (0, path_1.join)(__dirname, "..", "__fixtures__", "plugins-1"),
            });
            jest.clearAllMocks();
            await (0, generate_1.default)({
                directory: (0, path_1.join)(__dirname, "..", "__fixtures__", "plugins-1"),
            });
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(1, "Generating migrations...");
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(2, "Generating migrations for module module1...");
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(3, expect.stringContaining("No migration created"));
            expect(logger_1.logger.info).toHaveBeenNthCalledWith(4, "Migrations generated");
            expect(process.exit).toHaveBeenCalledWith();
        });
        it("should handle error when module has no default export", async () => {
            await (0, generate_1.default)({
                directory: (0, path_1.join)(__dirname, "..", "__fixtures__", "plugins-1-no-default"),
            });
            expect(logger_1.logger.error).toHaveBeenCalledWith("The module should default export the `Module()`", new Error("The module should default export the `Module()`"));
            expect(process.exit).toHaveBeenCalledWith(1);
        });
    });
});
//# sourceMappingURL=plugin-generate.spec.js.map