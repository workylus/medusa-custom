"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const define_middlewares_1 = require("../utils/define-middlewares");
const middlewares_1 = require("./admin/api-keys/middlewares");
const middlewares_2 = require("./admin/campaigns/middlewares");
const middlewares_3 = require("./admin/claims/middlewares");
const middlewares_4 = require("./admin/collections/middlewares");
const middlewares_5 = require("./admin/currencies/middlewares");
const middlewares_6 = require("./admin/customer-groups/middlewares");
const middlewares_7 = require("./admin/customers/middlewares");
const middlewares_8 = require("./admin/draft-orders/middlewares");
const middlewares_9 = require("./admin/exchanges/middlewares");
const middlewares_10 = require("./admin/fulfillment-providers/middlewares");
const middlewares_11 = require("./admin/fulfillment-sets/middlewares");
const middlewares_12 = require("./admin/fulfillments/middlewares");
const middlewares_13 = require("./admin/inventory-items/middlewares");
const middlewares_14 = require("./admin/invites/middlewares");
const middlewares_15 = require("./admin/notifications/middlewares");
const middlewares_16 = require("./admin/order-edits/middlewares");
const middlewares_17 = require("./admin/orders/middlewares");
const middlewares_18 = require("./admin/payment-collections/middlewares");
const middlewares_19 = require("./admin/payments/middlewares");
const middlewares_20 = require("./admin/price-lists/middlewares");
const middlewares_21 = require("./admin/price-preferences/middlewares");
const middlewares_22 = require("./admin/product-categories/middlewares");
const middlewares_23 = require("./admin/product-tags/middlewares");
const middlewares_24 = require("./admin/product-types/middlewares");
const middlewares_25 = require("./admin/product-variants/middlewares");
const middlewares_26 = require("./admin/products/middlewares");
const middlewares_27 = require("./admin/promotions/middlewares");
const middlewares_28 = require("./admin/refund-reasons/middlewares");
const middlewares_29 = require("./admin/regions/middlewares");
const middlewares_30 = require("./admin/reservations/middlewares");
const middlewares_31 = require("./admin/return-reasons/middlewares");
const middlewares_32 = require("./admin/returns/middlewares");
const middlewares_33 = require("./admin/sales-channels/middlewares");
const middlewares_34 = require("./admin/shipping-options/middlewares");
const middlewares_35 = require("./admin/shipping-profiles/middlewares");
const middlewares_36 = require("./admin/stock-locations/middlewares");
const middlewares_37 = require("./admin/stores/middlewares");
const middlewares_38 = require("./admin/tax-rates/middlewares");
const middlewares_39 = require("./admin/tax-regions/middlewares");
const middlewares_40 = require("./admin/uploads/middlewares");
const middlewares_41 = require("./admin/users/middlewares");
const middlewares_42 = require("./admin/workflows-executions/middlewares");
const middlewares_43 = require("./auth/middlewares");
const middlewares_44 = require("./hooks/middlewares");
const middlewares_45 = require("./store/carts/middlewares");
const middlewares_46 = require("./store/collections/middlewares");
const middlewares_47 = require("./store/currencies/middlewares");
const middlewares_48 = require("./store/customers/middlewares");
const middlewares_49 = require("./store/middlewares");
const middlewares_50 = require("./store/orders/middlewares");
const middlewares_51 = require("./store/payment-collections/middlewares");
const middlewares_52 = require("./store/payment-providers/middlewares");
const middlewares_53 = require("./store/product-categories/middlewares");
const middlewares_54 = require("./store/products/middlewares");
const middlewares_55 = require("./store/product-tags/middlewares");
const middlewares_56 = require("./store/product-types/middlewares");
const middlewares_57 = require("./store/regions/middlewares");
const middlewares_58 = require("./store/return-reasons/middlewares");
const middlewares_59 = require("./store/shipping-options/middlewares");
exports.default = (0, define_middlewares_1.defineMiddlewares)([
    ...middlewares_49.storeRoutesMiddlewares,
    ...middlewares_6.adminCustomerGroupRoutesMiddlewares,
    ...middlewares_7.adminCustomerRoutesMiddlewares,
    ...middlewares_27.adminPromotionRoutesMiddlewares,
    ...middlewares_2.adminCampaignRoutesMiddlewares,
    ...middlewares_45.storeCartRoutesMiddlewares,
    ...middlewares_48.storeCustomerRoutesMiddlewares,
    ...middlewares_45.storeCartRoutesMiddlewares,
    ...middlewares_46.storeCollectionRoutesMiddlewares,
    ...middlewares_53.storeProductCategoryRoutesMiddlewares,
    ...middlewares_55.storeProductTagRoutesMiddlewares,
    ...middlewares_56.storeProductTypeRoutesMiddlewares,
    ...middlewares_52.storePaymentProvidersMiddlewares,
    ...middlewares_59.storeShippingOptionRoutesMiddlewares,
    ...middlewares_51.storePaymentCollectionsMiddlewares,
    ...middlewares_50.storeOrderRoutesMiddlewares,
    ...middlewares_43.authRoutesMiddlewares,
    ...middlewares_42.adminWorkflowsExecutionsMiddlewares,
    ...middlewares_32.adminReturnRoutesMiddlewares,
    ...middlewares_57.storeRegionRoutesMiddlewares,
    ...middlewares_29.adminRegionRoutesMiddlewares,
    ...middlewares_32.adminReturnRoutesMiddlewares,
    ...middlewares_41.adminUserRoutesMiddlewares,
    ...middlewares_14.adminInviteRoutesMiddlewares,
    ...middlewares_38.adminTaxRateRoutesMiddlewares,
    ...middlewares_39.adminTaxRegionRoutesMiddlewares,
    ...middlewares_1.adminApiKeyRoutesMiddlewares,
    ...middlewares_44.hooksRoutesMiddlewares,
    ...middlewares_37.adminStoreRoutesMiddlewares,
    ...middlewares_5.adminCurrencyRoutesMiddlewares,
    ...middlewares_47.storeCurrencyRoutesMiddlewares,
    ...middlewares_26.adminProductRoutesMiddlewares,
    ...middlewares_19.adminPaymentRoutesMiddlewares,
    ...middlewares_20.adminPriceListsRoutesMiddlewares,
    ...middlewares_21.adminPricePreferencesRoutesMiddlewares,
    ...middlewares_13.adminInventoryRoutesMiddlewares,
    ...middlewares_4.adminCollectionRoutesMiddlewares,
    ...middlewares_34.adminShippingOptionRoutesMiddlewares,
    ...middlewares_8.adminDraftOrderRoutesMiddlewares,
    ...middlewares_33.adminSalesChannelRoutesMiddlewares,
    ...middlewares_36.adminStockLocationRoutesMiddlewares,
    ...middlewares_24.adminProductTypeRoutesMiddlewares,
    ...middlewares_23.adminProductTagRoutesMiddlewares,
    ...middlewares_40.adminUploadRoutesMiddlewares,
    ...middlewares_11.adminFulfillmentSetsRoutesMiddlewares,
    ...middlewares_15.adminNotificationRoutesMiddlewares,
    ...middlewares_17.adminOrderRoutesMiddlewares,
    ...middlewares_30.adminReservationRoutesMiddlewares,
    ...middlewares_22.adminProductCategoryRoutesMiddlewares,
    ...middlewares_35.adminShippingProfilesMiddlewares,
    ...middlewares_12.adminFulfillmentsRoutesMiddlewares,
    ...middlewares_10.adminFulfillmentProvidersRoutesMiddlewares,
    ...middlewares_54.storeProductRoutesMiddlewares,
    ...middlewares_58.storeReturnReasonRoutesMiddlewares,
    ...middlewares_31.adminReturnReasonRoutesMiddlewares,
    ...middlewares_3.adminClaimRoutesMiddlewares,
    ...middlewares_28.adminRefundReasonsRoutesMiddlewares,
    ...middlewares_9.adminExchangeRoutesMiddlewares,
    ...middlewares_25.adminProductVariantRoutesMiddlewares,
    ...middlewares_16.adminOrderEditRoutesMiddlewares,
    ...middlewares_18.adminPaymentCollectionsMiddlewares,
]);
//# sourceMappingURL=middlewares.js.map