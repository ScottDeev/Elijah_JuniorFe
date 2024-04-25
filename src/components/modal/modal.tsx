import { Breakpoint, Dialog } from "@mui/material";
import { ReactNode } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "sm",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth: false | Breakpoint | undefined;
}) {
  // maxWidth is sm by default, but can be of sm, md, lg, xl
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth}>
      <div className="py-[52px] px-[52px] rounded-[16px] relative">
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] text-textColor z-[3]"
        >
          <HighlightOffIcon />
        </button>
        {children}
      </div>
    </Dialog>
  );
}
