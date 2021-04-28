"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const { finder } = require("strapi-utils/lib");

module.exports = {
  async find(ctx) {
    const entities = await strapi
      .query("score")
      .find({ _sort: "value:desc,createdAt:desc" });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.score })
    );
  },

  async personal(ctx) {}
};
