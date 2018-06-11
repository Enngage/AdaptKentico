import { Article } from '../cloud-models/article';
import { Page } from '../cloud-models/page';
import { IAdaptArticle, IAdaptBlock } from '../models';
import { Block } from '../cloud-models/block';
import { utilities } from '../utilities';

export function generateBlocks(article: Article, items: Block[], parent: IAdaptArticle): IAdaptBlock[] {
    const result: IAdaptBlock[] = [];

    items.map(item => {
        result.push({
            _id: utilities.newGuid(),
            _type: 'block',
            _parentId: parent._id,
            body: item.body.getHtml(),
            title: item.title.text,
        });
    });

    return result;
}
