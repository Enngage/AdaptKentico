import { Block } from '../cloud-models/block';
import { Component } from '../cloud-models/component';
import { IAdaptComponent, IAdaptBlock } from '../models';
import { utilities } from '../utilities';

export function generateComponents(
    block: Block,
    items: Component[],
    parent: IAdaptBlock
): IAdaptComponent[] {
    const result: IAdaptComponent[] = [];

    items.map(item => {
        result.push({
            _id: utilities.newGuid(),
            _type: 'component',
            _component: 'text',
            _parentId: parent._id,
            body: item.body.getHtml(),
            title: item.title.text
        });
    });

    return result;
}
