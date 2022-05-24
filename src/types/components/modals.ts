export interface ModalWindowContent {
  isOpen?: boolean;
  title: string;
  modalForm:  React.ReactNode;
  submitHandler: any;
}

export interface ModalWindowContext {
  openModal: (modalConfig: ModalWindowContent) => void;
  closeModal: () => void;
};
