import { Container } from "inversify";

export interface DIContainerFactory {
  createContainer: () => Container;
}
