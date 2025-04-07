"use strict";
// TODO: This is copied over from admin. Scope what fields and relations are allowed for store
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultStoreRetrieveOrderFields = exports.defaultStoreOrderFields = void 0;
exports.defaultStoreOrderFields = [
    "id",
    "status",
    "summary",
    "display_id",
    "total",
    "currency_code",
    "metadata",
    "created_at",
    "updated_at",
];
exports.defaultStoreRetrieveOrderFields = [
    "id",
    "status",
    "summary",
    "currency_code",
    "display_id",
    "region_id",
    "email",
    "total",
    "subtotal",
    "tax_total",
    "discount_total",
    "discount_subtotal",
    "discount_tax_total",
    "original_total",
    "original_tax_total",
    "item_total",
    "item_subtotal",
    "item_tax_total",
    "original_item_total",
    "original_item_subtotal",
    "original_item_tax_total",
    "shipping_total",
    "shipping_subtotal",
    "shipping_tax_total",
    "original_shipping_tax_total",
    "original_shipping_subtotal",
    "original_shipping_total",
    "created_at",
    "updated_at",
    "*items",
    "*items.tax_lines",
    "*items.adjustments",
    "*items.detail",
    "*items.variant",
    "*items.variant.product",
    "*shipping_address",
    "*billing_address",
    "*shipping_methods",
    "*shipping_methods.tax_lines",
    "*shipping_methods.adjustments",
    "*payment_collections",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultStoreRetrieveOrderFields,
    isList: false,
};
exports.listTransformQueryConfig = {
    defaults: exports.defaultStoreOrderFields,
    isList: true,
};
//# sourceMappingURL=query-config.js.map