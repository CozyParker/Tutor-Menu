import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function DataTable({
  headers,
  rows,
  emptyMessage,
  className,
}: {
  headers: string[];
  rows: ReactNode;
  emptyMessage?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border bg-white", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </Table>
      {(!rows || (Array.isArray(rows) && rows.length === 0)) && (
        <div className="p-4 text-sm text-muted-foreground">{emptyMessage}</div>
      )}
    </div>
  );
}
