import { EMyEnum1 } from "@/types/EMyEnum1";
import { RecordTypeB } from "@/types/RecordTypeB";

export const recBList: RecordTypeB[] = [
  { id: 101, myType: EMyEnum1.A, subTypeName: "ThatAType" },
  { id: 102, myType: EMyEnum1.B, subTypeName: "ThatBType" },
];
