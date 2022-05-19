export interface ModalWindowContent {
  title: string;
  modalForm:  React.ReactNode;
}

export interface ModalWindowContext {
  openModal: (modalConfig: ModalWindowContent) => void;
  closeModal: () => void;
};
