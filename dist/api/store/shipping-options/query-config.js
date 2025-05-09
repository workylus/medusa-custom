"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveTransformQueryConfig = exports.listTransformQueryConfig = exports.defaultStoreShippingOptionsFields = void 0;
exports.defaultStoreShippingOptionsFields = [
    "id",
    "name",
    "price_type",
    "service_zone_id",
    "shipping_profile_id",
    "fulfillment_provider_id",
    "shipping_option_type_id",
];
exports.listTransformQueryConfig = {
    defaultLimit: 20,
    isList: true,
};
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultStoreShippingOptionsFields,
    isList: false,
};
//# sourceMappingURL=query-config.js.map