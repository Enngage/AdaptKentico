export interface IAdaptGraphics {
    src: string;
    alt: string;
}

export interface IAdaptPage {
    _id: string;
    _parentId: string;
    title: string;
    displayTitle: string;
    body: string;
    pageBody: string;
    instructions: string;
    duration?: number;
    linkText: string;
    _graphics?: IAdaptGraphics;
}
