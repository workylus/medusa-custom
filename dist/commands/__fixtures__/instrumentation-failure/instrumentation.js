"use strict";
const registerMock = jest.fn().mockImplementation(() => {
    throw new Error("Failed to register instrumentation");
});
module.exports = {
    registerMock,
    register: registerMock,
};
//# sourceMappingURL=instrumentation.js.map