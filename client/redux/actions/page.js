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

export const OPEN_FLASHCARDPANEL = 'OPEN_FLASHCARDPANEL';
export const openFlashCardPanel = deck => ({
  type: OPEN_FLASHCARDPANEL,
  name: deck.name,
  id: deck.id
});

export const EXIT_FLASHCARDPANEL = 'EXIT_FLASHCARDPANEL';
export const exitFlashCardPanel = () => ({
  type: EXIT_FLASHCARDPANEL
});

export const NEXT_ACTION = 'NEXT_ACTION';
export const nextAction = isShowingAnswer => ({
  type: NEXT_ACTION,
  isShowingAnswer
});
