import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "../modal/modal";
import { useState } from "react";
import FilterForm from "./filterForm";
export default function Filter() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <section className="px-[40px] my-[50px]">
      <div className="flex justify-end ">
        <div className="flex gap-[10px] items-center">
          <span className="font-[500]">Filter options</span>
          <button onClick={() => setOpen(true)}>
            <FilterListIcon />
          </button>
        </div>
      </div>
      <Modal onClose={onClose} open={open} maxWidth="sm">
        <FilterForm />
      </Modal>
    </section>
  );
}
