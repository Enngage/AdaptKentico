
export interface IGeneratorConfig {
    pagesFilename: string;
    articlesFilename: string;
    blocksFilename: string;
    componentsFilename: string;
}

export const generatorConfig: IGeneratorConfig = {
    pagesFilename: 'contentObjects.json',
    articlesFilename: 'articles.json',
    blocksFilename: 'blocks.json',
    componentsFilename: 'components.json'
};
