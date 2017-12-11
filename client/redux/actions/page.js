export const OPEN_CREATEDECKPANEL = 'OPEN_CREATEDECKPANEL';
export const openCreateDeckPanel = () => ({
  type: OPEN_CREATEDECKPANEL
});

export const OPEN_CREATECARDPANEL = 'OPEN_CREATECARDPANEL';
export const openCreateCardPanel = deck => ({
  type: OPEN_CREATECARDPANEL,
  name: deck.name,
  id: deck.id
});
