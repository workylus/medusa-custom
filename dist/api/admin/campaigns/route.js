"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("./helpers");
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const query = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "campaign",
        variables: {
            filters: req.filterableFields,
            ...req.queryConfig.pagination,
        },
        fields: req.queryConfig.fields,
    });
    const { rows: campaigns, metadata } = await remoteQuery(query);
    res.json({
        campaigns,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { additional_data, ...rest } = req.validatedBody;
    const createCampaigns = (0, core_flows_1.createCampaignsWorkflow)(req.scope);
    const campaignsData = [rest];
    const { result } = await createCampaigns.run({
        input: { campaignsData, additional_data },
        context: {
            requestId: req.requestId,
        },
    });
    const campaign = await (0, helpers_1.refetchCampaign)(result[0].id, req.scope, req.queryConfig.fields);
    res.status(200).json({ campaign });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map