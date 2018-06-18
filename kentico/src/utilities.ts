
export class Utilities {

    capitalizeFirstLetter(text: string): string {
        if (!text) {
            return '';
        }
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    toPascalCase(text: string): string {
        if (!text) {
            return '';
        }

        let pascalCaseName = '';

        const arr = text.split('_');
        for (let i = 0; i < arr.length; i++) {
            let part = arr[i];

            if (i > 0) {
                part = this.capitalizeFirstLetter(part);
            }

            pascalCaseName += part;
        }

        return pascalCaseName;
    }

    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise triple-equals
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export const utilities = new Utilities();


