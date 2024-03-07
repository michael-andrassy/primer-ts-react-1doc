import { DIContainerFactoryForProd } from "./../utils/DIContainerFactory4Prod";
import { ServiceX } from "@services/ServiceX";

const ComponentA: React.FC = () => {
  const serviceX = new DIContainerFactoryForProd()
    .createContainer()
    .get<ServiceX>("ServiceX");
  const message = serviceX.getTestMessage();

  return <div className="just-testing">{message}</div>;
};

export default ComponentA;
