export interface IMenuItem {
  key: React.Key;
  href: string;
  label: string;
}

export const getLink = (
  key: React.Key,
  href: string,
  label: string
): IMenuItem => {
  return {
    key,
    href,
    label,
  };
};
