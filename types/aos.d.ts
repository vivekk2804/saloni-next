declare module "aos" {
  export interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    anchorPlacement?: string;
    [key: string]: unknown;
  }

  interface AosInstance {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosInstance;

  export default AOS;
}
