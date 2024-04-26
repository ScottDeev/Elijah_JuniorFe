import { test, expect } from "@playwright/test";

test("Confirm page has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/Rockets/);
});

test("Rockets are fetched successfully and displayed", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Wait for API response.
  await page.waitForResponse((res) => res.status() === 200);

  // Wait for the rockets containers
  const rockets = await page.waitForSelector(".rockets");
  await rockets.scrollIntoViewIfNeeded();
  const RocketsVisible = await page.isVisible(".rockets");

  // Expect rocket container to be visible
  expect(RocketsVisible).toBeTruthy();
});

test("Confirm users can click on a rocket card and the modal shows", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");

  // Wait for API response.
  await page.waitForResponse((res) => res.status() === 200);

  // Wait for the rockets containers
  const rockets = await page.waitForSelector(".rockets");
  await rockets.scrollIntoViewIfNeeded();
  await page.click(".rocket-0");
  await page.waitForSelector(".rocket-modal-0");
  const RocketModal = await page.isVisible(".rocket-modal-0");

  // Expect rocket container to be visible
  expect(RocketModal).toBeTruthy();
});

test("Confirm the filters are visible", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Wait for API response.
  await page.waitForResponse((res) => res.status() === 200);

  // Wait for the filter container
  const filter = await page.waitForSelector(".filter");
  await filter.scrollIntoViewIfNeeded();
  const RocketsVisible = await page.isVisible(".filter");

  // Expect rocket container to be visible
  expect(RocketsVisible).toBeTruthy();
});
