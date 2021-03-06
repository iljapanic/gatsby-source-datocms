const { pascalize } = require('humps');

module.exports = function itemNodeId(id, locale, entitiesRepo) {
  if (!id) { return null; }

  const entity = entitiesRepo.findEntity('item', id);
  const type = pascalize(entity.itemType.apiKey);

  return `DatoCms${type}-${entity.id}-${locale}`;
};

