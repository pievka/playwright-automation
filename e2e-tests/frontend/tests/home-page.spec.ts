import { test } from "../fixtures";

test.describe("Example1", () => {
    test("@FE Log greeting message", async ({ examplePage }) => {
        await examplePage.goTo("/search?q=softeta");
        examplePage.greeting(process.env.USER);
        await examplePage.getInfoFromFirstField();
    });
});
