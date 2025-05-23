"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("../helpers");
const GET = async (req, res) => {
    const customerGroup = await (0, helpers_1.refetchCustomerGroup)(req.params.id, req.scope, req.queryConfig.fields);
    if (!customerGroup) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Customer group with id: ${req.params.id} not found`);
    }
    res.status(200).json({ customer_group: customerGroup });
};
exports.GET = GET;
const POST = async (req, res) => {
    const existingCustomerGroup = await (0, helpers_1.refetchCustomerGroup)(req.params.id, req.scope, ["id"]);
    if (!existingCustomerGroup) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Customer group with id "${req.params.id}" not found`);
    }
    await (0, core_flows_1.updateCustomerGroupsWorkflow)(req.scope).run({
        input: {
            selector: { id: req.params.id },
            update: req.validatedBody,
        },
    });
    const customerGroup = await (0, helpers_1.refetchCustomerGroup)(req.params.id, req.scope, req.queryConfig.fields);
    res.status(200).json({ customer_group: customerGroup });
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const id = req.params.id;
    const deleteCustomerGroups = (0, core_flows_1.deleteCustomerGroupsWorkflow)(req.scope);
    await deleteCustomerGroups.run({
        input: { ids: [id] },
    });
    res.status(200).json({
        id,
        object: "customer_group",
        deleted: true,
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=route.js.map