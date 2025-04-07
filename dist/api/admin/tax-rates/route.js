"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("./helpers");
const POST = async (req, res) => {
    const { result } = await (0, core_flows_1.createTaxRatesWorkflow)(req.scope).run({
        input: [
            {
                ...req.validatedBody,
                created_by: req.auth_context.actor_id,
            },
        ],
    });
    const taxRate = await (0, helpers_1.refetchTaxRate)(result[0].id, req.scope, req.queryConfig.fields);
    res.status(200).json({ tax_rate: taxRate });
};
exports.POST = POST;
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const { rows: tax_rates, metadata } = await remoteQuery((0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "tax_rate",
        variables: {
            filters: req.filterableFields,
            ...req.queryConfig.pagination,
        },
        fields: req.queryConfig.fields,
    }));
    res.status(200).json({
        tax_rates,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map