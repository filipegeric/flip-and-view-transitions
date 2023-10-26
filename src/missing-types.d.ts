interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  // Deprecated
  domUpdated?: Promise<void>;
  updateCallbackDone: Promise<void>;
}

interface Document {
  startViewTransition(setupPromise: () => Promise<void> | void): ViewTransition;
}

declare var ongoingTransition: ViewTransition | undefined;

interface CSSStyleDeclaration {
  viewTransitionName: string;
}
