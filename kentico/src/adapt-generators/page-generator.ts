import { Page } from '../cloud-models/page';
import { IAdaptPage, IAdaptArticle, IGeneratorResult } from '../models';
import { generateArticles } from './article-generator';
import { generateBlocks } from './block-generator';
import { generateComponents } from './component-generator';

export function generateData(items: Page[]): IGeneratorResult {

    const result: IGeneratorResult = {
        articles: [],
        pages: [],
        blocks: [],
        components: []
    };

    items.map(item => {

        // map page
        result.pages.push({
            _id: item.system.codename,
            _type: 'page',
            _graphics: undefined,
            _parentId: 'course',
            body: item.text.getHtml(),
            displayTitle: item.displayTitle.text,
            duration: item.duration.value,
            instructions: item.instructions.text,
            linkText: 'link text',
            pageBody: item.text.getHtml(),
            title: item.title.text,
        });

        // add articles
        result.articles = result.articles.concat(generateArticles(item, item.articles));

        // generate blocks for articles
        item.articles.forEach(article => {
            result.blocks = result.blocks.concat(generateBlocks(article, article.blocks));

            article.blocks.forEach(block => {
                // generate components for articles
                result.components = result.components.concat(generateComponents(block, block.components));
            });
        });
    });

    return result;
}
