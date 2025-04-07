"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const define_middlewares_1 = require("../define-middlewares");
describe("defineMiddlewares", function () {
    test("define custom middleware for a route", () => {
        const config = (0, define_middlewares_1.defineMiddlewares)([
            {
                matcher: "/admin/products",
                middlewares: [() => { }],
            },
        ]);
        expect(config).toMatchObject({
            routes: [
                {
                    matcher: "/admin/products",
                    middlewares: [expect.any(Function)],
                },
            ],
        });
    });
    test("should wrap additionalDataValidator to middleware", () => {
        const req = {
            body: {},
        };
        const res = {};
        const nextFn = jest.fn();
        const schema = {
            brand_id: zod_1.default.string(),
        };
        const config = (0, define_middlewares_1.defineMiddlewares)([
            {
                matcher: "/admin/products",
                additionalDataValidator: schema,
            },
        ]);
        expect(config).toMatchObject({
            routes: [
                {
                    matcher: "/admin/products",
                    middlewares: [expect.any(Function)],
                },
            ],
        });
        config.routes?.[0].middlewares?.[0](req, res, nextFn);
        expect(req.additionalDataValidator.parse({ brand_id: "1" })).toMatchObject({
            brand_id: "1",
        });
    });
});
//# sourceMappingURL=define-routes-config.spec.js.map