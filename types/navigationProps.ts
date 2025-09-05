export interface NavigationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface NavigationLinksProps {
  closeNav: () => void;
  activeSection: string;
  className?: string;
}
