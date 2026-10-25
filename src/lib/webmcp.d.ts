// Declarative WebMCP attributes (https://developer.chrome.com/docs/ai/webmcp/declarative-api).
// Annotated forms are exposed to in-browser AI agents as callable tools.
import 'react';

declare module 'react' {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
}

declare global {
  /** SubmitEvent fields added by WebMCP when an agent submits an annotated form. */
  interface SubmitEvent {
    agentInvoked?: boolean;
    respondWith?: (result: Promise<unknown>) => void;
  }
}
