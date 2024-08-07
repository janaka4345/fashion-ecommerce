"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
export default function MaintenanceDialog() {
  return (
    <Dialog defaultOpen={true} className="">
      <DialogContent className="h-fitw-1/2 flex flex-col items-center justify-center gap-4">
        <DialogHeader>
          <DialogTitle>User Notice</DialogTitle>
          <DialogDescription>
            This SaaS project is still under development.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
