import { ContentItem, Fields } from 'kentico-cloud-delivery';
import { Article } from './article';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Jun 07 2018 07:47:11 GMT+0200 (Central Europe Daylight Time).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Page extends ContentItem {
    public instructions: Fields.TextField;
    public duration: Fields.NumberField;
    public linkText: Fields.TextField;
    public title: Fields.TextField;
    public articles: Article[];
    public text: Fields.RichTextField;
    public displayTitle: Fields.TextField;
    constructor() {
        super({
            propertyResolver: (fieldName: string) => {
                if (fieldName === 'link_text') {
                    return 'linkText';
                }
                if (fieldName === 'display_title') {
                    return 'displayTitle';
                }
                return fieldName;
            }
        });
    }
}
