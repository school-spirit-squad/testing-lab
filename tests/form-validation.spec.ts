import { test, expect } from "@playwright/test";

test.describe("Form Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("email field validates email format", async ({ page }) => {
    await page.getByTestId("name-input").fill("Test User");
    await page.getByTestId("email-input").fill("not-an-email");
    await page.getByTestId("message-input").fill("This is a test message");

    await page.getByTestId("submit-button").click();

    await expect(
      page.getByText("Thank you for your message!")
    ).not.toBeVisible();

    await page.getByTestId("email-input").fill("valid@example.com");
    await page.getByTestId("submit-button").click();

    await expect(page.getByText("Thank you for your message!")).toBeVisible();
  });

  test("all fields are required", async ({ page }) => {
    await page.getByTestId("email-input").fill("test@example.com");
    await page.getByTestId("message-input").fill("Test message");
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("error-message")).toBeVisible();

    await page.getByTestId("name-input").fill("Test User");
    await page.getByTestId("email-input").clear();
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("error-message")).toBeVisible();

    await page.getByTestId("email-input").fill("test@example.com");
    await page.getByTestId("message-input").clear();
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("error-message")).toBeVisible();

    await page.getByTestId("message-input").fill("Test message");
    await page.getByTestId("submit-button").click();
    await expect(page.getByText("Thank you for your message!")).toBeVisible();
  });

  test("form state resets after submission", async ({ page }) => {
    await page.getByTestId("name-input").fill("Test User");
    await page.getByTestId("email-input").fill("test@example.com");
    await page.getByTestId("message-input").fill("Test message");

    await page.getByTestId("submit-button").click();

    await expect(page.getByText("Thank you for your message!")).toBeVisible();

    await expect(page.getByTestId("name-input")).not.toBeVisible();
    await expect(page.getByTestId("email-input")).not.toBeVisible();
    await expect(page.getByTestId("message-input")).not.toBeVisible();
  });
});
