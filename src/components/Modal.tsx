import React, { useLayoutEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { SCard, SOverlay, SWrapper } from "./Modal.S";

export type TModalProps = {
  children: JSX.Element;
  isOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
};

export const Modal = ({ isOpen, children, onOpenChange }: TModalProps) => {
  const rootElement = document.getElementById("root") as HTMLElement;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(isOpen);
  const openValue = onOpenChange ? isOpen : open;

  useLayoutEffect(() => {
    const handleChange = onOpenChange ?? setOpen;

    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();

      if (ref && ref.current && ref.current.contains(e.target as Node)) {
        // Clicked inside
      } else {
        // Clicked outside
        handleChange(false);
      }
    };
    window.addEventListener("mousedown", handleClick, false);
    return () => {
      window.removeEventListener("mousedown", handleClick, false);
    };
  }, [openValue, onOpenChange]);

  const component = !isOpen ? null : (
    <SWrapper>
      <SOverlay />
      <SCard id="modal" ref={ref}>
        {children}
      </SCard>
    </SWrapper>
  );

  return ReactDOM.createPortal(component, rootElement);
};
