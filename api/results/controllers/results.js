"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const { finder } = require("strapi-utils/lib");

module.exports = {
  async find(ctx) {
    const entities = await strapi
      .query("score")
      .find({ _sort: "value:desc,createdAt:desc", _limit: 100 });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.score })
    );
  },

  async personal(ctx) {
    const entities = await strapi.query("score").find({
      user: ctx.state.user.id,
      _sort: "value:desc,createdAt:desc",
      _limit: 50
    });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.score })
    );
  }
};
