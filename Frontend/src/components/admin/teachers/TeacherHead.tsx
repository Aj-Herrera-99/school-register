import { SortOptionAdminTeacher, type SortingCols } from "@/config/types";
import { divide } from "lodash";
import { TriangleRight } from "lucide-react";
import type { MouseEvent } from "react";

export const TeacherHead = ({
  sortingCols,
  activeDir,
  activeSort,
  onClick,
}: {
  sortingCols: SortingCols[];
  activeDir: string;
  activeSort: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className="flex text-center border border-b-0 rounded-t-sm overflow-hidden font-semibold bg-zinc-950">
      {sortingCols.map((col, i, ar) => (
        <div key={i} id={col.sort} className={col.className} onClick={onClick}>
          <span>{col.label}</span>
          {i < ar.length - 2 && (
            <TriangleRight
              className={`${
                (col.dir === "desc" || activeDir === "desc") && "rotate-180"
              } ${
                activeSort === col.sort && "!opacity-100"
              } opacity-0 scale-70`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
