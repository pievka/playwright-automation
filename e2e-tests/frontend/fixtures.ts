import { test as base } from "@playwright/test";
import { ExamplePage } from "./pages/example-page";

type ExampleFixtures = {
    examplePage: ExamplePage;
};

export const test = base.extend<ExampleFixtures>({
    examplePage: async ({ page }, use) => {
        await use(new ExamplePage(page));
    },
});
export { expect } from "@playwright/test";
