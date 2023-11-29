import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  // when: navigating to the home page
  await page.goto('http://localhost:8080');

  // then: the page has title 'Index'
  await expect(page).toHaveTitle('Index');

});

test('has inital value after fetch', async ({ page }) => {

  // when: navigating to the home page
  await page.goto('http://localhost:8080');

  // then: input type text has "https://httpbin.org/delay/1" 
  // and textarea will also contain text 'https://httpbin.org/delay/1'
  await expect(page.locator('input[type="text"]')).toHaveValue("https://httpbin.org/delay/1")
  await expect(page.locator('textarea')).toContainText('https://httpbin.org/delay/1')

});

test('has value after click in button fetch', async ({ page }) => {

  // when: navigating to the home page
  await page.goto('http://localhost:8080');

  // filling input text with 'https://httpbin.org/delay/2' and click in Fetch Button
  await page.locator('input[type="text"]').fill('https://httpbin.org/delay/2')
  await page.locator('button').click();

  //then : textarea will contain 'https://httpbin.org/delay/2'
  await expect(page.locator('textarea')).toContainText('https://httpbin.org/delay/2')

});

