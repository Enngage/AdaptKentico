import { Article } from '../cloud-models/article';
import { Page } from '../cloud-models/page';
import { IAdaptArticle, IAdaptBlock } from '../models';
import { Block } from '../cloud-models/block';

export function generateBlocks(article: Article, items: Block[]): IAdaptBlock[] {
    const result: IAdaptBlock[] = [];

    items.map(item => {
        result.push({
            _id: item.system.codename,
            _type: 'block',
            _parentId: article.system.codename,
            body: item.body.getHtml(),
            title: item.title.text,
        });
    });

    return result;
}
