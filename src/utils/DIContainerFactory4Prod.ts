import { Container } from "inversify";

import { DIContainerFactory } from "./DIContainerFactory";

import { ServiceX } from "@services/ServiceX";
import { ServiceXImpl } from "@services/ServiceXImpl";

import { ServiceY } from "@services/ServiceY";
import { ServiceYImpl } from "@services/ServiceYImpl";

export class DIContainerFactoryForProd implements DIContainerFactory {
  createContainer(): Container {
    const container = new Container();
    container.bind<ServiceX>("ServiceX").to(ServiceXImpl).inTransientScope();
    container.bind<ServiceY>("ServiceY").to(ServiceYImpl).inTransientScope();

    return container;
  }
}
