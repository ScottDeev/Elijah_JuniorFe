import { RocketCardProps } from "../../type";
import Modal from "../modal/modal";

export default function RocketDetails({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: RocketCardProps;
}) {
  return (
    <Modal open={open} onClose={onClose} maxWidth={"sm"}>
      <div className="flex flex-col gap-[15px]">
        <img
          src={data.flickr_images[0]}
          alt={data.rocket_name}
          className="h-[250px]"
        />
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-bold">{data.rocket_name}</span>
            <span
              className={`rounded-[10px] px-[10px] py-[5px] border border-[2px] ${
                data.active
                  ? "border-green-700 text-green-700"
                  : "border-red-700 text-red-700"
              }`}
            >
              {data.active ? "Active" : "Inactive"}
            </span>
          </div>
          <div>
            <p>{data.description}</p>
            <p>
              Click{" "}
              <a
                className="text-blue-400"
                href={data.wikipedia}
                target="_blank"
              >
                here
              </a>{" "}
              to read more about it
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
