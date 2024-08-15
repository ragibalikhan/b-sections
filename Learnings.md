# Learnings from Shopify App Development

### Shopify App Initialization
To start developing a Shopify app, we use the command shopify app init. This command sets up the initial structure for the app. While Shopify extensions allow us to create small theme extensions, they have limitations. For example, theme extensions can't define blocks within the schema of the extension section, limiting their flexibility.

### Shopify App Configuration
In the shopify.app.toml file, we define the app's permissions using the scope section. This section specifies what the app can read and write. For example:

toml
Copy code
 
```bash 
scopes = "read_products,read_themes,write_products,write_themes"
```
## API Usage
The majority of the work with Shopify apps involves using the Shopify API. This allows us to create various functionalities within the app. For the development process, we use a combination of React, Vite, and Liquid templates to build and interact with the Shopify environment.

 ## Frontend Frameworks
For the app's frontend, we use frameworks like Shopify Polaris, which is specifically designed to provide a consistent and professional user interface for Shopify apps. We may also utilize other frameworks depending on the project's requirements.

