import { waitElement } from "m3-utils";

export default class Footer {
    constructor() {
        this.init();
    }

    async init() {
        await this.selectors();
        console.log(this.item);
    }

    async selectors() {
        this.item = await waitElement("#my-element", {
            //#my-element pode ser a class ou o id do elemento html qeu vocÊ quer pegar
            timeout: 5000, // vai esperar 5 segundos antes de rejeitar a promise
            interval: 1000, // vai verificar a cada 1 segundo se o elemento existe
        });
    }
}
