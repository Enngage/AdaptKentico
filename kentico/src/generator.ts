import * as fs from 'fs';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { generateData } from './adapt-generators/page-generator';
import { Page } from './cloud-models/page';
import { generatorConfig } from './config';
import { provideClient } from './delivery-client-provider';

export class Generator {
    private readonly deliveryClient: DeliveryClient;
    private readonly projectId: string;

    constructor(config: { projectId: string }) {
        (<any>Object).assign(this, config);

        // init delivery client
        this.deliveryClient = provideClient(this.projectId);
    }

    generateModels(): void {
        console.log('Generator started ...');

        this.generateData().subscribe(
            () => {
                console.log('Generator finished');
            },
            err => {
                console.log(
                    `Generator failed with error: ${err.message ? err.message : err}`
                );
                console.log(err);
                throw Error(err);
            }
        );
    }

    private generateData(): Observable<void> {
        return this.deliveryClient
            .items<Page>()
            .type('page')
            .depthParameter(5)
            .getObservable()
            .pipe(
                map(response => {
                    const data = generateData(response.items);

                    // pages
                    this.createFile(
                        generatorConfig.pagesFilename,
                        JSON.stringify(data.pages)
                    );

                    // articles
                    this.createFile(
                        generatorConfig.articlesFilename,
                        JSON.stringify(data.articles)
                    );

                    // blocks
                    this.createFile(
                        generatorConfig.blocksFilename,
                        JSON.stringify(data.blocks)
                    );

                    // components
                    this.createFile(
                        generatorConfig.componentsFilename,
                        JSON.stringify(data.components)
                    );
                })
            );
    }

    private createFile(fileName: string, data: any): void {
        if (!fileName) {
            throw Error('Invalid filename');
        }
        // create class file
        fs.writeFile('./' + fileName, data, error => {
            if (error) {
                throw Error(`Could not create class file '${fileName}'`);
            }
            console.log(`File '${fileName}' was created`);
        });
    }
}
