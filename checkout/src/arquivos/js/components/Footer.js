import { waitElement } from "m3-utils";

export default class Footer {
    constructor() {
        this.init();
    }

    async init() {
        await this.selectors();
        // this.onUpdate();
    }

    async selectors() {
        //Para verificar se o carrinho está vazio e remover a prateleira de produtos:
        // vocês devem olhar a doc fornecida no Desafio para aprender a usar o waitElement
        this.checkoutVazio = await waitElement(".empty-cart-content");
    }

    onUpdate() {
        //Função qeu fará a verificação se o carrinho está vazio para remover a prateleira de produtos:
        // vocês devem olhar a doc fornecida no Desafio para aprender a usar a MutationObserver
        // sempre que o carrinho estiver vazio o elemento chcekoutVazio fica display: none e isso pode ser usado como atributo para a MutationObserver
        let target = this.checkoutVazio;
        let config = { childList: true, attributes: true };
        let observer = new MutationObserver((mutations) => {
            mutations.forEach(function (mutation) {
                console.log(mutation.type);
            });
        });

        observer.observe(target, config);
    }
    async addCarrossel() {
        const elemento = await waitElement("#my-element");
        $(elemento).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
        });
    }
}
