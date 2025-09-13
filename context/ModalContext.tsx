"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ModalData } from "@/types";

interface ModalContextType {
  isOpen: boolean;
  modalData: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (data: ModalData) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalData(null), 300); // Wait for animation to complete
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
