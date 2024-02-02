import { atom, useAtom } from "jotai";

const sidebarAtom = atom(false);

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom);

  return {
    isOpen,
    setIsOpen,
  };
};
