"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
/**
 * A set of functions called "actions" for `report`
 */

module.exports = {
  async index(ctx) {
    let entity = await strapi.services.score.create({
      ...ctx.request.body,
      user: ctx.state.user.id
    });
    return sanitizeEntity(entity, { model: strapi.models.score });
  }
};
