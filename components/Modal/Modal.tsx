"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css"

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => {
    router.back();
  };
  return (
    <div className={css.block}>
      <div className={css.blockText}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};
export default Modal;