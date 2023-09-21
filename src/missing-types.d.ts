interface ViewTransition {
  finished: Promise<void>;
}

interface Document {
  startViewTransition(updateDOM: () => void): ViewTransition;
}

interface CSSStyleDeclaration {
  viewTransitionName?: string;
}
