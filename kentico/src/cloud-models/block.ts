import { ContentItem, Fields } from 'kentico-cloud-delivery';
import { Component } from './component';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Jun 07 2018 07:47:11 GMT+0200 (Central Europe Daylight Time).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Block extends ContentItem {
  public body: Fields.RichTextField;
  public title: Fields.TextField;
  public components: Component[];
}
