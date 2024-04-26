import { useEffect, useState } from "react";
import { getData } from "../../utils/fetcher";
import { useDispatch, useSelector } from "react-redux";
import {
  RocketsState,
  storeFilteredRockets,
  storeRockets,
} from "../../store/RocketsReducer";
import RocketCard from "../cards/rocketCard";
import { RocketCardProps } from "../../type";
import PaginationCard from "../pagination";
import { generateMoreRockets } from "../../utils/functions";
export default function Datagrid() {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [currentRockets, setCurrentRockets] = useState<Array<RocketCardProps>>(
    []
  );
  const { filteredRockets } = useSelector(
    (state: RocketsState) => state.rockets
  );

  useEffect(() => {
    const fetchRockets = async () => {
      const res = await getData("rockets");

      // The response for rockets is just 4 and I needed to show pagination so I randomize the content and generation more
      const rockets = generateMoreRockets(res);
      dispatch(storeRockets(rockets));
      dispatch(storeFilteredRockets(rockets));
    };
    fetchRockets();
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const indexOfLastRocket = page * 10;
    const indexOfFirstRocket = indexOfLastRocket - 10;
    setCurrentRockets(
      filteredRockets.slice(indexOfFirstRocket, indexOfLastRocket)
    );
  }, [page, filteredRockets]);
  console.log(currentRockets, filteredRockets);

  return (
    <section className="flex flex-col gap-[30px] items-center my-[50px]">
      {currentRockets.length > 0 && (
        <div className="rockets flex flex-wrap justify-center gap-[20px] ">
          {currentRockets.map((r: RocketCardProps, i) => (
            <RocketCard key={JSON.stringify(i)} data={r} index={i} />
          ))}
        </div>
      )}
      <PaginationCard
        count={Math.ceil(filteredRockets.length / 10)}
        onChange={handleChange}
        page={page}
      />
    </section>
  );
}
