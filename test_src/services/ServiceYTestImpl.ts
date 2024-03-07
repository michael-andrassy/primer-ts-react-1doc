import { injectable } from "inversify";

import { RecordTypeB } from "@/types/RecordTypeB";
import { EMyEnum1 } from "@/types/EMyEnum1";
import { ServiceY } from "@services/ServiceY";

@injectable()
export class ServiceYTestImpl implements ServiceY {
  private mockRecBList: RecordTypeB[] = [
    { id: 1101, myType: EMyEnum1.A, subTypeName: "UnitTestAType" },
    { id: 1102, myType: EMyEnum1.B, subTypeName: "UnitTestBType" },
  ];

  getRecords(): RecordTypeB[] {
    return this.mockRecBList;
  }

  getInnerTestMessage(): string {
    return "Mars";
  }
}
