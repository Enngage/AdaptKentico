import { Block } from '../cloud-models/block';
import { Component } from '../cloud-models/component';
import { IAdaptComponent } from '../models';

export function generateComponents(
    block: Block,
    items: Component[]
): IAdaptComponent[] {
    const result: IAdaptComponent[] = [];

    items.map(item => {
        result.push({
            _id: item.system.codename,
            _type: 'component',
            _parentId: block.system.codename,
            body: item.body.getHtml(),
            title: item.title.text
        });
    });

    return result;
}
