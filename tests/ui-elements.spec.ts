import { test, expect } from "@playwright/test";

test.describe("UI Elements", () => {
  test("home page card has correct structure", async ({ page }) => {
    await page.goto("/");

    const card = page
      .locator("div")
      .filter({ hasText: "Welcome to our App" })
      .first();
    await expect(card).toBeVisible();

    await expect(page.getByText("Welcome to our App")).toBeVisible();

    await expect(
      page.getByText("A simple app for Playwright testing")
    ).toBeVisible();

    await expect(page.getByText("This is a demo application")).toBeVisible();

    await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Us" })).toBeVisible();
  });

  test("buttons have correct styling", async ({ page }) => {
    await page.goto("/");

    const buttons = page.getByRole("link");

    await expect(buttons).toHaveCount(2);

    const aboutButton = page.getByRole("link", { name: "About Us" });
    await expect(aboutButton).toBeVisible();

    const contactButton = page.getByRole("link", { name: "Contact Us" });
    await expect(contactButton).toBeVisible();

    await contactButton.hover();
    await page.waitForTimeout(300);
  });

  test("contact form has accessible labels", async ({ page }) => {
    await page.goto("/contact");

    const nameLabel = page.locator('label[for="name"]');
    const nameInput = page.locator("#name");
    await expect(nameLabel).toBeVisible();
    await expect(nameInput).toBeVisible();

    const emailLabel = page.locator('label[for="email"]');
    const emailInput = page.locator("#email");
    await expect(emailLabel).toBeVisible();
    await expect(emailInput).toBeVisible();

    const messageLabel = page.locator('label[for="message"]');
    const messageInput = page.locator("#message");
    await expect(messageLabel).toBeVisible();
    await expect(messageInput).toBeVisible();

    await expect(nameLabel).toHaveText("Name");
    await expect(emailLabel).toHaveText("Email");
    await expect(messageLabel).toHaveText("Message");
  });

  test("page is responsive", async ({ page }) => {
    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    await expect(page.getByText("Welcome to our App")).toBeVisible();
    await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Us" })).toBeVisible();

    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    await expect(page.getByText("Welcome to our App")).toBeVisible();

    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    await expect(page.getByText("Welcome to our App")).toBeVisible();
  });
});