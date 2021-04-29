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

    const count = await strapi
      .query("score")
      .count({ user: ctx.state.user.id });

    const best = await strapi.query("score").find({
      user: ctx.state.user.id,
      _sort: "value:desc",
      _limit: 1
    });

    const latest = await strapi.query("score").find({
      user: ctx.state.user.id,
      _sort: "createdAt:desc",
      _limit: 1
    });

    return {
      count,
      best: best[0] || null,
      latest: latest[0] || null
    };
  }
};
