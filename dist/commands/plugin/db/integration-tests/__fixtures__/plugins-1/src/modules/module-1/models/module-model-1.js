"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const model1 = utils_1.model.define("module_model_1", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
});
exports.default = model1;
//# sourceMappingURL=module-model-1.js.map