import { Article } from '../cloud-models/article';
import { Page } from '../cloud-models/page';
import { IAdaptArticle } from '../models';

export function generateArticles(page: Page, items: Article[]): IAdaptArticle[] {
    const result: IAdaptArticle[] = [];

    items.map(item => {
        result.push({
            _id: item.system.codename,
            _type: 'article',
            _parentId: page.system.codename,
            body: item.body.getHtml(),
            title: item.title.text,
        });
    });

    return result;
}
