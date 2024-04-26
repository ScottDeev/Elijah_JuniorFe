import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ChangeEvent } from "react";

export default function PaginationCard({
  count,
  onChange,
  page,
}: {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={onChange}
      />
    </Stack>
  );
}
