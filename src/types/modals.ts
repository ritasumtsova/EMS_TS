export interface ModalWindowContent {
  title: string;
  modalForm:  React.ReactNode;
  // children?: React.ReactNode;
}

export interface ModalWindowContext {
  openModal: (modalConfig: ModalWindowContent) => void;
  closeModal: () => void;
};
