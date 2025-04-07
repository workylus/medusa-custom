"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = require("../start");
const utils = __importStar(require("@medusajs/framework/utils"));
const logger = __importStar(require("@medusajs/framework/logger"));
const instrumentationFixture = __importStar(require("../__fixtures__/instrumentation"));
const instrumentationFailureFixture = __importStar(require("../__fixtures__/instrumentation-failure/instrumentation"));
const path_1 = __importDefault(require("path"));
describe("start", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe("registerInstrumentation", () => {
        it("should not throw when registering the instrumentation if the file is not ", async () => {
            const fsSpy = jest.spyOn(utils.FileSystem.prototype, "exists", "");
            await (0, start_1.registerInstrumentation)(__dirname);
            expect(fsSpy).toHaveBeenCalled();
            expect(fsSpy).toHaveBeenCalledWith(expect.stringContaining("instrumentation.js"));
        });
        it("should log an info message if the file is present but not register function is found", async () => {
            const fsSpy = jest.spyOn(utils.FileSystem.prototype, "exists", "");
            const loggerSpy = jest.spyOn(logger.logger, "info", "");
            await (0, start_1.registerInstrumentation)(path_1.default.join(__dirname, "../__fixtures__/instrumentation-no-register"));
            expect(fsSpy).toHaveBeenCalled();
            expect(fsSpy).toHaveBeenCalledWith(expect.stringContaining("instrumentation.js"));
            expect(loggerSpy).toHaveBeenCalled();
            expect(loggerSpy).toHaveBeenCalledWith("Skipping instrumentation registration. No register function found.");
        });
        it("should register the instrumentation if the file is present and exports a register function", async () => {
            const fsSpy = jest.spyOn(utils.FileSystem.prototype, "exists", "");
            instrumentationFixture.registerMock.mockReturnValue(true);
            await (0, start_1.registerInstrumentation)(path_1.default.join(__dirname, "../__fixtures__"));
            expect(fsSpy).toHaveBeenCalled();
            expect(instrumentationFixture.registerMock).toHaveBeenCalled();
            expect(fsSpy).toHaveBeenCalledWith(expect.stringContaining("instrumentation.js"));
        });
        it("should throw if the instrumentation file exists but cannot be imported", async () => {
            const fsSpy = jest.spyOn(utils.FileSystem.prototype, "exists", "");
            const err = await (0, start_1.registerInstrumentation)(path_1.default.join(__dirname, "../__fixtures__/instrumentation-failure")).catch((e) => e);
            expect(fsSpy).toHaveBeenCalled();
            expect(instrumentationFailureFixture.registerMock).toHaveBeenCalled();
            expect(fsSpy).toHaveBeenCalledWith(expect.stringContaining("instrumentation.js"));
            expect(err).toBeInstanceOf(Error);
        });
    });
});
//# sourceMappingURL=start.spec.js.map