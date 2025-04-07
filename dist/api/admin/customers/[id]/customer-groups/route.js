"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const helpers_1 = require("../../helpers");
const POST = async (req, res) => {
    const { id } = req.params;
    const { add, remove } = req.validatedBody;
    const workflow = (0, core_flows_1.linkCustomerGroupsToCustomerWorkflow)(req.scope);
    await workflow.run({
        input: {
            id,
            add,
            remove,
        },
    });
    const customer = await (0, helpers_1.refetchCustomer)(id, req.scope, req.queryConfig.fields);
    res.status(200).json({ customer: customer });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map