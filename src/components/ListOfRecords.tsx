import { useEffect, useState } from "react";
import { RecordTypeC } from "@/types/RecordTypeC";
import { ServiceX } from "@services/ServiceX";
import { useServiceContainer } from "@utils/CustomHooks";

import styles from "./ListOfRecords.module.scss";

const ListOfRecords: React.FC = () => {
  const serviceX = useServiceContainer().get<ServiceX>("ServiceX");

  const [records, setRecords] = useState<RecordTypeC[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await serviceX.getRecords();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching records:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);

  return (
    <div className={styles.listofrecords}>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>SubType</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.subTypeName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListOfRecords;
