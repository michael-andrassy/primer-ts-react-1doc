import { RecordTypeC } from "@mytypes/RecordTypeC";

export interface ServiceX {
  getRecords: () => Promise<RecordTypeC[]>;
  getTestMessage: () => string;
}
