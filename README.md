# Testcafe Bootcamp

Compilation of exercises part of the  QA MindLabs' testcafe bootcamp
made by the one and only papitas leys excusez moi

## Testcafe installation
#### Preconditions

* brew
* nodejs
* testcafe

## MacOS

Install brew ( https://brew.sh/ ) \
Run the following command on your terminal \

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

Install node via homebrew

    brew install node

Install testcafe via nodejs

    npm install -g testcafe

Verify your installation

    testcafe -v

## Linux 

Install node via apt

    sudo apt install nodejs

Install testcafe via nodejs

    npm install -g testcafe

Verify your installation

    testcafe -v

## Windows

Open command promp an run the following command

    shudown -s -t 0

And go cry in the corner

## Usage

Open any IDE or text editor, it is recommended to use one that incorporates javascript sintaxis. Save your code with a .js extension. \
Some editors and IDE such as Atom, Sublime text, VS Code, IntelliJ, Eclipse etc would work.

To run an script using testcafe open your terminal and navigate to your directory

    cd /path/to/your/script

Simple way to run it its just:

    testcafe [browser --[options]] [your script]

Run without User Interface (headless mode)

    testcafe [browser:headless] [yout script]

Run an specific test

    testcafe [browser] [your script] -t [your test]




