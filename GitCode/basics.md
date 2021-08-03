# Git basics

## Creating a repository

## Cloning a repository

## Adding to a repository

## Status of git repository
 - find out what has been staged

 ```shell
git status
 ```

### Add all new files to a staging area

```shell
git add .
```

### Add a specific file to a staging area
- pretend you have a file in your directory called myFileName.md

```shell
git add myFileName.md
```

## Comiting changes to a repository

Commit all staged changes.  Once you have added a file it is in the staging area ready to be committed

```shell
git commit -m "Your informative message here"
```

## Pushing changes to a repository

After commiting all changes are local only and so you need to send them to the remote repository.

```shell
git push

```

## Pulling changes back from a repository

If someone else has made changes you will need to pull their changes before you commit your changes

```shell
git pull
```

## Creating a branch to test things

```shell
git checkout -b your_branch_name
```

## Go between branches

```shell
git checkout your_branch_name
```