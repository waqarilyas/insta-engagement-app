import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Plus, Trash2 } from "lucide-react";

export default function UserNotes() {
  return (
    <div className="w-full max-w-xl p-6 space-y-6 bg-white rounded ">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mark this user as lead/local</h3>

        <div className="space-y-3">
          <Select>
            <SelectTrigger className="w-full bg-gray-100 border-0 rounded-full">
              <SelectValue placeholder="Lead" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lead1">Lead 1</SelectItem>
              <SelectItem value="lead2">Lead 2</SelectItem>
              <SelectItem value="lead3">Lead 3</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full bg-gray-100 border-0 rounded-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location1">Location 1</SelectItem>
              <SelectItem value="location2">Location 2</SelectItem>
              <SelectItem value="location3">Location 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <h3 className="text-lg font-semibold">Notes</h3>

        <Plus className="h-5 w-5" />
      </div>

      <Card className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <h4 className="font-medium">Title of note</h4>
          <div className="flex gap-2">
            <button className="text-red-500 hover:text-red-600">
              <Trash2 className="h-4 w-4" />
            </button>
            <button className="text-green-500 hover:text-green-600">
              <Pencil className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          That looks promising. We have been designing the wabi sabi products
          for our clients. Would love to work together to explore more
          interesting design projects.
        </p>
      </Card>
    </div>
  );
}
