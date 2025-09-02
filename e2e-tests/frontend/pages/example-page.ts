import { Locator, Page } from "@playwright/test";
import environment from "../../../environment";
import { BaseTest } from "../base-test";

export class ExamplePage extends BaseTest {
    readonly page: Page;
    readonly baseUrl = environment.baseUrl;
    readonly firstResultField: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.firstResultField = this.page.locator("#rso > div:nth-child(1) > div");
    }

    async goTo(urlPath?: string): Promise<void> {
        await this.page.goto(`${this.baseUrl}${urlPath ? urlPath : ""}`);
    }

    async getInfoFromFirstField(): Promise<void> {
        const info = await this.firstResultField.textContent();
        // eslint-disable-next-line no-console
        console.log("Softeta info: ", info);
    }

    greeting(name = "Stranger"): void {
        // eslint-disable-next-line no-console
        console.log("Hello ", name);
    }
}
