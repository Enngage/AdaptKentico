import { Page } from '../cloud-models/page';
import { IAdaptPage, IAdaptArticle, IGeneratorResult } from '../models';
import { generateArticles } from './article-generator';
import { generateBlocks } from './block-generator';
import { generateComponents } from './component-generator';
import { utilities } from '../utilities';

export function generateData(items: Page[]): IGeneratorResult {

    const result: IGeneratorResult = {
        articles: [],
        pages: [],
        blocks: [],
        components: []
    };

    for (let p = 0; p < 1000; p++) {

        const item = items[0];

        const pageId = utilities.newGuid();

        // map page
        const page = {
            _id: pageId,
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
        };

        result.pages.push(page);

        // add articles
        const articles = generateArticles(item, [item.articles[0]], page);
        result.articles = result.articles.concat(articles);

        // generate blocks for articles
        articles.forEach(article => {
            const articleId = utilities.newGuid();
            const blocks = generateBlocks(item.articles[0], [item.articles[0].blocks[0]], article);
            result.blocks = result.blocks.concat(blocks);

            for (let k = 0; k < 3; k++) {
                blocks.forEach(block => {
                    const blockId = utilities.newGuid();
                    // generate components for articles
                    // fake generate multiple identical components

                    for (let i = 0; i < 7; i++) {
                        const components = generateComponents(item.articles[0].blocks[0], [item.articles[0].blocks[0].components[0]], block);

                        result.components = result.components.concat(components);
                    }

                });
            }
        });
    }

    return result;
}
