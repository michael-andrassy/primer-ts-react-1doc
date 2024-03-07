import { injectable } from "inversify";
import "reflect-metadata";

import { ServiceY } from "./ServiceY";
import { RecordTypeB } from "@/types/RecordTypeB";
import { recBList } from "@data/RecordsBProd";

@injectable()
export class ServiceYImpl implements ServiceY {
  getRecords(): RecordTypeB[] {
    return recBList;
  }
  getInnerTestMessage(): string {
    return "World";
  }
}
