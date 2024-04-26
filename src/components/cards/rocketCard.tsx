import { useState } from "react";
import { RocketCardProps } from "../../type";
import RocketDetails from "./rocketDetails";

export default function RocketCard({
  data,
  index,
}: {
  data: RocketCardProps;
  index: number;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`w-[250px] rounded-[8px] shadow-xl p-[20px] rocket-${index}`}
      >
        <img
          src={data?.flickr_images[0]}
          alt={data.rocket_name}
          className="h-[300px] w-full p-[10px]"
        />
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-[500]">{data.rocket_name}</h2>
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
      </div>
      <RocketDetails open={open} onClose={onClose} data={data} index={index} />
    </>
  );
}
