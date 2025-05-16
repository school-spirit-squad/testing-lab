import { test, expect } from "@playwright/test";

test("should navigate between pages", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Welcome to our App")).toBeVisible();

  await page.getByRole("link", { name: "About Us" }).click();
  await page.waitForURL("**/about");

  await expect(page.url()).toContain("/about");
  await expect(page.getByText("This is the about page")).toBeVisible();

  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.waitForURL("**/contact");

  await expect(page.url()).toContain("/contact");
  await expect(page.getByText("Contact Us")).toBeVisible();

  await page.getByRole("link", { name: "Home" }).click();
  await page.waitForURL("http://localhost:3000/");

  await expect(page.url()).toBe("http://localhost:3000/");
  await expect(page.getByText("Welcome to our App")).toBeVisible();
});