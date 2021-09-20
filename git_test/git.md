# GITHUB

## What is the Git command used to get a full copy of an existing Git repository from GitHub?

- Use git clone git@github.com:<your-github-username>/<your-respository-name> to clone a GitHub repository onto your local machine.

## What is the Git command used to check the status of your files?

- Use git status to see any changes made since your last commit.

## What is the Git command used to track files with Git?

- Use git add to track files.

## What is the Git command used to commit files?

- Use git commit to commit tracked files.

## What is the Git command used to view your commit history?

- Use git log to view your commit history.

## What is the Git command used to upload projects onto GitHub?

- Use git push to send your commit to GitHub.

- A save in Git is divided into two terminal commands: add and commit. The combination of these two commands gives you control of exactly what you want to be remembered in your snapshot.
- Staging: Think of add as adjusting the number of people or elements to be included in a photo. With Git, you can select the changes you want to save with git add. Imagine a project that contains multiple files where changes have been made to several files. You want to save some of the changes you have made and leave some other changes to continue working on them.
- Committing: Think of commit as actually taking a photo, resulting in a snapshot. For example, to commit a file named README.md, type git commit -m "Add README.md". The -m flag stands for "message" and must always be followed by a commit message inside quotation marks. In this example, the commit message was "Add README.md".

## Explain what origin is in git push origin main.

- In Git, origin is a placeholder name for the URL of the remote repository. Git sets up the origin by default when it clones a remote repository. You can use origin to access the remote repository without having to enter a full URL every time. This also means that you can have multiple remotes for a repository by giving each a unique name.
