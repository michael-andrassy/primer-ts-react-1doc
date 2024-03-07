import { RecordTypeB } from "@/types/RecordTypeB";

export interface ServiceY {
  getRecords: () => RecordTypeB[];
  getInnerTestMessage: () => string;
}
