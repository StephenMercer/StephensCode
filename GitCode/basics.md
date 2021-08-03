# Git Basics

## Creating a repository
 - Make Public
 - Add README file
 - Don't add gitignore
 - Chose GNU(General Public Licence) for licence

   www.github.com
## Cloning a repository
 -Link of respository from Git Hub.
```shell
git clone <link>
```

## Status Of Repository
 - find out what has been staged

 ```shell
git status
 ```
## Adding Files To Staging Area / Updates
 - Adds all files

```shell
git add .
```

## Adding Specific Files To Staging Area / Updates
- pretend you have a file in your directory called myFileName.md

```shell
git add myFileName.md
```

## Comiting Changes to Repository

- Commit all staged changes.  Once you have added a file it is in the staging area ready to be committed

```shell
git commit -m "Your informative message here"
```

## Pushing Changes to Repository

- After commiting all changes are local only and so you need to send them to the remote repository.

```shell
git push
```

## Pulling Changes From  Repository

- If someone else has made changes you will need to pull their changes before you commit your changes

```shell
git pull
```

## Creating A Branch
- Branches can be used for testing and experiementing.

```shell
git checkout -b your_branch_name
```

## Go Between Branches
- Go to older version of code

```shell
git checkout your_branch_name
```