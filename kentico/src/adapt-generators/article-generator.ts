import { Article } from '../cloud-models/article';
import { Page } from '../cloud-models/page';
import { IAdaptArticle, IAdaptPage } from '../models';
import { utilities } from '../utilities';

export function generateArticles(page: Page, items: Article[], parent: IAdaptPage): IAdaptArticle[] {
    const result: IAdaptArticle[] = [];

    items.map(item => {
        result.push({
            _id: utilities.newGuid(),
            _type: 'article',
            _parentId: parent._id,
            body: item.body.getHtml(),
            title: item.title.text,
        });
    });

    return result;
}
