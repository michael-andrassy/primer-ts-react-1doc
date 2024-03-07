import { injectable, inject } from "inversify";
import "reflect-metadata";

import { ServiceX } from "./ServiceX";
import * as ServiceY from "./ServiceY";

import { RecordTypeA } from "@/types/RecordTypeA";
import { recAList } from "@data/RecordsAProd";

import { RecordTypeB } from "@/types/RecordTypeB";
import { RecordTypeC } from "@/types/RecordTypeC";

@injectable()
export class ServiceXImpl implements ServiceX {
  constructor(@inject("ServiceY") private serviceY: ServiceY.ServiceY) {}

  private getARecords(): RecordTypeA[] {
    return recAList;
  }
  private getBRecords(): RecordTypeB[] {
    return this.serviceY.getRecords();
  }

  async getRecords(): Promise<RecordTypeC[]> {
    const listA = this.getARecords();
    const listB = this.getBRecords();

    const result = listA.map(recordA => {
      // Find the matching record in listB
      const matchingRecordB = listB.find(
        recordB => recordB.myType === recordA.myType
      );

      // Create a new TRecordC instance
      const newRecordC: RecordTypeC = {
        id: recordA.id,
        name: recordA.name,
        subTypeName: matchingRecordB ? matchingRecordB.subTypeName : "unknown", // Use a default or handle the case where there's no match
      };

      return newRecordC;
    });
    return Promise.resolve(result);
  } //m
  getTestMessage(): string {
    return "Hello " + this.serviceY.getInnerTestMessage();
  }
}
