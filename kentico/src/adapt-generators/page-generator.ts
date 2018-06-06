import { Page } from '../cloud-models/page';
import { IAdaptPage } from '../models';

export function generatePages(items: Page[]): IAdaptPage[] {
    const result: IAdaptPage[] = [];

    items.map(item => {
        result.push({
            _id: item.system.codename,
            _graphics: undefined,
            _parentId: 'course',
            body: item.text.getHtml(),
            displayTitle: item.displayTitle.text,
            duration: item.duration.value,
            instructions: 'instructions',
            linkText: 'link text',
            pageBody: item.text.getHtml(),
            title: item.title.text
        });
    });

    return result;
}
