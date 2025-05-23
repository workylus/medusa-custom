"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const generate_jwt_token_1 = require("../../../utils/generate-jwt-token");
const POST = async (req, res) => {
    const { actor_type, auth_provider } = req.params;
    const config = req.scope.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
    const service = req.scope.resolve(utils_1.Modules.AUTH);
    const authData = {
        url: req.url,
        headers: req.headers,
        query: req.query,
        body: req.body,
        protocol: req.protocol,
    };
    const { success, error, authIdentity } = await service.register(auth_provider, authData);
    if (success && authIdentity) {
        const { http } = config.projectConfig;
        const token = (0, generate_jwt_token_1.generateJwtTokenForAuthIdentity)({
            authIdentity,
            actorType: actor_type,
        }, {
            secret: http.jwtSecret,
            expiresIn: http.jwtExpiresIn,
        });
        return res.status(200).json({ token });
    }
    throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNAUTHORIZED, error || "Authentication failed");
};
exports.POST = POST;
//# sourceMappingURL=route.js.map