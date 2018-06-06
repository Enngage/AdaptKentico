import { DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';

import { Page } from './cloud-models/page';

export function provideClient(projectId: string) {
  return new DeliveryClient({
    projectId: projectId,
    typeResolvers: [new TypeResolver('page', () => new Page())]
  });
}
