"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Modal: React.FC = () => {
  const { isOpen, modalData, closeModal } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            {modalData?.title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div
            className="text-zinc-600 dark:text-zinc-300 space-y-4 prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: modalData?.content || "" }}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
