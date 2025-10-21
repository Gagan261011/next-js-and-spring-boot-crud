from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000")

    try:
        # Add a new employee
        page.get_by_role("button", name="Add Employee").click()
        page.get_by_label("Name").fill("John Doe")
        page.get_by_label("Email").fill("john.doe@example.com")
        page.get_by_label("Department").fill("IT")
        page.get_by_label("Salary").fill("60000")
        page.get_by_role("button", name="Save").click()

        # Verify the employee was added
        expect(page.get_by_text("John Doe")).to_be_visible()

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
