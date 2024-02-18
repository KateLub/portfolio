


# Getting Started

Follow these steps to create a new React project using Vite, set up dependencies, and deploy it to GitHub Pages:

1. **Create a new React project using Vite:** 

npm create vite@latest portfolio -- template react

Follow the prompts to set up your project, then navigate into your project directory:
    ```bash
    cd <your new project directory>
    ```

2. **Install dependencies:** Install the necessary dependencies for your project:
    ```bash
    npm install react-router-dom localforage match-sorter sort-by
    npm install react-icons --save
    ```

3. **Run the development server:** Start the development server:
    ```bash
    npm run dev
    ```

4. **Build your project:** Build your project for production:
    ```bash
    npm run build
    ```

5. **Preview your build:** Preview your build before deployment:
    ```bash
    npm run preview
    ```

6. **Set up GitHub Pages deployment:** If you're deploying to `https://<USERNAME>.github.io/<REPO>/`:
   - Set `base` to `'/<REPO>/'` in your project's configuration.
   - Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions". This will guide you to create a workflow that builds and deploys your project. A sample workflow that installs dependencies and builds using npm is provided.

7. **Initialize a Git repository and push your code to GitHub:** Initialize a Git repository and push your code to GitHub:
    ```bash
    git init 
    git add . 
    git commit -m "add: initial files" 
    git branch -M main 
    git remote add origin https://github.com/[USER]/[REPO_NAME] 
    git push -u origin main
    ```

   Make sure to replace `[USER]` and `[REPO_NAME]` with your GitHub username and repository name.


# Common Errors and How to Fix Them


1. **Failed to deploy (completed).
Failed to deploy to github-pages
by KateLub via Deploy static content to Pages #1** :
    ```bash
    Prior to establishing a workflow, ensure that you choose "Github Actions" as source of deployment
    ```

2. **How to re-run Failed Deployment** :
    ```bash
    
    Github Actions -> Deploy static content to Pages -> Click on the failed deployment (in red) -> sidebar Jobs -> deploy
    ```