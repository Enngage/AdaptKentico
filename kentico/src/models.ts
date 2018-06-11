export interface IAdaptGraphics {
    src: string;
    alt: string;
}

export interface IGeneratorResult {
    pages: IAdaptPage[];
    articles: IAdaptArticle[];
    blocks: IAdaptBlock[];
    components: IAdaptComponent[];
}

export interface IAdaptPage {
    _id: string;
    _parentId: string;
    _type: string;
    title: string;
    displayTitle: string;
    body: string;
    pageBody: string;
    instructions: string;
    duration?: number;
    linkText: string;
    _graphics?: IAdaptGraphics;
}

export interface IAdaptArticle {
    _id: string;
    _type: string;
    _parentId: string;
    title: string;
    body: string;
}

export interface IAdaptBlock {
    _id: string;
    _type: string;
    _parentId: string;
    title: string;
    body: string;
}

export interface IAdaptComponent {
    _id: string;
    _type: string;
    _parentId: string;
    _component: string;
    title: string;
    body: string;
}

