const { test, expect } = require('@playwright/test');
 
test('Search for a pair of sneakers and order the first model found on Amazon', async ({ page }) => {  
  await page.goto('https://www.amazon.fr');
  
  // close the pop up
  await page.getByLabel('Accepter').click();
  // Enter the search term
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  // Click on the search button
  await page.getByRole('button', { name: 'Go' }).click();
  
});
 
// All tests are for amazon.fr
 
// Test case 1 : Verify navigation to amazon.fr
test('Verify navigation to amazon.fr', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  expect(page.url()).toBe('https://www.amazon.fr/');
});
// Step 1: Open the browser and navigate to the amazon.fr
// Expected Result: Verify that the current URL is amazon.fr
 
// Test case 2 : Verify cookie acceptance
test('Verify cookie acceptance', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  expect(await page.isVisible('Accepter')).toBeFalsy();
});
// Step 1: Open the browser and navigate to the amazon.fr
// Step 2: Accept cookies
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)
 
// Test case 3 : Verify product search

test('Verify product search', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  await page.getByRole('button', { name: 'Go',exact: true}).click();
  expect(await page.getByText('"baskets"')).toBeTruthy();
});
// Step 1: Open the browser and navigate to the amazon.fr and Close the pop-up
// Step 2: Search for "sneakers"
// Expected Result: Verify that the search results are displayed
 
// Test case 4 : Verify selection of the first product
test('Verify selection of the first product', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  await page.getByRole('button', { name: 'Go',exact: true }).click();
  await page.getByRole('link', { name: 'Basket Femme Chaussures de Sport Running Sneaker Air Respirant Chaussures de Course Légères Chaussures de Running Fitness Gym Jogging Outdoor Noir Rouge Gris EU 36-42', exact: true }).click();
  expect(await page.getByRole('heading', { name: 'Hitmars Basket Femme' })).toBeTruthy();
});
// Step 1: Navigate to amazon.fr, perform the search
// Step 2: Select the first product
// Expected Result: Verify that the product page is displayed (e.g., check the product title element)
 
// Test case 5 : Verify adding product to cart
test('Verify adding product to cart', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  await page.getByRole('button', { name: 'Go',exact: true }).click();
  await page.getByRole('link', { name: 'Basket Femme Chaussures de Sport Running Sneaker Air Respirant Chaussures de Course Légères Chaussures de Running Fitness Gym Jogging Outdoor Noir Rouge Gris EU 36-42', exact: true }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  expect(await page.isVisible('Ajouter au panier')).toBeTruthy();
});
// Step 1: Navigate to amazon.fr, perform the search and select the product
// Step 2: Add to cart
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)
 
// Test case 6 : Verify accessing the cart
test('Verify accessing the cart', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussures de Running Homme' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Panier' }).click();
  expect(await page.isVisible('Panier')).toBeTruthy();
});

// Step 1: Navigate to amazon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
// Expected Result: Verify that the product is present in the cart
 
// Test case 7 : Verify the checkout process

test('Verify the checkout process', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussures de Running Homme' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Panier' }).click();
  await page.getByRole('button', { name: 'Passer la commande' }).click();
  expect(await page.isVisible('Passer la commande')).toBeTruthy();
}
);
// Step 1: Navigate to amazon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)