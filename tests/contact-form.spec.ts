import { test, expect } from "@playwright/test"

test("should show validation error for empty form", async ({ page }) => {
  await page.goto("/contact")

  await page.getByTestId("submit-button").click()

  await expect(page.getByTestId("error-message")).toBeVisible()
  await expect(page.getByText("Please fill in all fields")).toBeVisible()
})

test("should submit form successfully", async ({ page }) => {
  await page.goto("/contact")

  await page.getByTestId("name-input").fill("John Doe")
  await page.getByTestId("email-input").fill("john@example.com")
  await page.getByTestId("message-input").fill("This is a test message")

  await page.getByTestId("submit-button").click()

  await expect(page.getByText("Thank you for your message!")).toBeVisible()
  await expect(page.getByText("We'll get back to you soon.")).toBeVisible()
})
