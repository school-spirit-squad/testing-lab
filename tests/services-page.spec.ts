import { test, expect } from "@playwright/test";

test("should navigate to and from the services page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Welcome to our App")).toBeVisible();

  await page.getByRole("link", { name: "Our Services" }).click();
  await page.waitForURL("**/services");

  await expect(page.url()).toContain("/services");
  await expect(page.getByText("Our Services")).toBeVisible();
  await expect(page.getByText("We offer a variety of services")).toBeVisible();

  await expect(page.getByText("End-to-end testing solutions")).toBeVisible();
  await expect(page.getByText("Automated testing frameworks")).toBeVisible();

  await page.getByRole("link", { name: "Home" }).click();
  await page.waitForURL("http://localhost:3000/");
  await expect(page.url()).toBe("http://localhost:3000/");

  await page.getByRole("link", { name: "Our Services" }).click();
  await page.waitForURL("**/services");
  await page.getByRole("link", { name: "Contact Us" }).click();
  await page.waitForURL("**/contact");
  await expect(page.url()).toContain("/contact");
});
