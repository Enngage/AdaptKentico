
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
}

export const utilities = new Utilities();


