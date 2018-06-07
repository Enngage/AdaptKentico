import { DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';

import { Article } from './cloud-models/article';
import { Block } from './cloud-models/block';
import { Component } from './cloud-models/component';
import { Page } from './cloud-models/page';

export function provideClient(projectId: string) {
    return new DeliveryClient({
        projectId: projectId,
        typeResolvers: [
            new TypeResolver('page', () => new Page()),
            new TypeResolver('article', () => new Article()),
            new TypeResolver('block', () => new Block()),
            new TypeResolver('component', () => new Component())
        ]
    });
}
