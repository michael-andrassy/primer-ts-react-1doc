import { Container } from "inversify";

import { DIContainerFactory } from "../../src/utils/DIContainerFactory";
import { DIContainerFactoryForProd } from "../../src/utils/DIContainerFactory4Prod";

import { ServiceY } from "../../src/services/ServiceY";
import { ServiceYTestImpl } from "../services/ServiceYTestImpl";

export class DIContainerFactoryForTest implements DIContainerFactory {
  createContainer(): Container {
    const prodContainerFactory = new DIContainerFactoryForProd();
    const modifiedProdContainer = prodContainerFactory.createContainer();
    modifiedProdContainer.rebind<ServiceY>("ServiceY").to(ServiceYTestImpl);
    //console.log("TEST-FACTORY: overridden ServiceY");

    return modifiedProdContainer;
  }
}
