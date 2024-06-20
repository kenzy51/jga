// NOTE: The declaration below was injected by `"framer"`
// see https://www.framer.com/docs/guides/handshake for more information.
declare module "https://framer.com/m/*";

declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
