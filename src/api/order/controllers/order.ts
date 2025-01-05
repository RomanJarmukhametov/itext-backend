/**
 * order controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::order.order');

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
      // Use the default implementation of the create method
      const response = await super.create(ctx);

      // Populate the `userFiles` relation in the response
      const populatedOrder = await strapi.entityService.findOne(
        "api::order.order",
        response.data.id,
        {
          populate: ["userFiles"],
        }
      );

      return { data: populatedOrder };
    },
  })
);
