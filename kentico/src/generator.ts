import * as fs from 'fs';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { Page } from './cloud-models/page';
import { provideClient } from './delivery-client-provider';
import { generatePages } from './adapt-generators/page-generator';
import { generatorConfig } from './config';

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

        this.generatePages()
            .pipe(
                finalize(() => {
                    console.log('Generator finished');
                })
            )
            .subscribe(
                () => undefined,
                err => {
                    console.log(
                        `Generator failed with error: ${err.message ? err.message : err}`
                    );
                    console.log(err);
                    throw Error(err);
                }
            );
    }

    private generatePages(): Observable<void> {
        return this.deliveryClient
            .items<Page>()
            .getObservable()
            .pipe(
                map(response => {
                    this.createFile(
                        generatorConfig.pageFileName,
                        JSON.stringify(generatePages(response.items))
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
            console.log(`Class '${fileName}' was created`);
        });
    }
}
