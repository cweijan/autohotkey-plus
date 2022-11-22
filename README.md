# AutoHotkey Plus

AutoHotkey Plus (AHK+) provides AutoHotKey language support for Visual Studio Code. This includes:

-   IntelliSense
-   code highlighting
-   basic debug support
-   code formatting
-   ...and more!

> Currently, AHK+ officially supports only AHK v1. AHK v2 will likely work, but please open issues and be patient if complex workflows are not supported.

## Contents

-   [Why AutoHotkey Plus?][why]
-   [Installation][install]
-   [Commands](#commands)
-   [Debug](#debug)
-   [Language Features](#language-features)
-   [Context Menu](#context-menu)
-   [Credits](#credits)

## Why AutoHotkey Plus?

[why]: #why-autohotkey-plus

AutoHotkey Plus is one of many extensions that offer VS Code language support. So why should you use this one?

-   **IntelliSense**: Smart code completion, syntax highlighting, code navigation, and more.
-   **Actively maintained**: Any issues encountered while using this extension can be reported and fixed. With other extensions, anything that's broken will stay broken forever. You can report any issues with AHK+ (and view all issues) through the [issue tracker](https://github.com/vscode-autohotkey/autohotkey-plus/issues).
-   **Debug support**: Run and debug AHK scripts from VS Code.
-   **New features**: Another benefit to active maintenance is that AHK+ can add new features as users request them.

## Installation

[install]: #installation

Install from VS Code or [install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus).

## Commands

With AHK+, you can compile, debug, and run your scripts with keyboard shortcuts. You can also run a selection as a standalone script. Additionally, you can `Open help` with `Ctrl + F1`.

-   Compile: `Ctrl + Shift + F9`
-   Debug: `F9`
-   Open help: `Ctrl + F1`
-   Run: `Ctrl + F9`
-   Run selection: `Ctrl + F8`

## Debug

1. Click Run or press F9.
2. Debugger supports breakpoints, stack tracing, and variable watching

![debug](image/debug.gif)

If you need an advanced setup, we recommend [zero-plusplus.vscode-autohotkey-debug](https://marketplace.visualstudio.com/items?itemName=zero-plusplus.vscode-autohotkey-debug).

### Debug features

1. **Output message**: You can use `OutputDebug` command instead of `MsgBox` to log values.

    ![Output](image/output.jpg)

2. **Evaluate**: Set and get variable values through the debug console.

    ![Evaluate](image/evalute.jpg)

This extension provides basic debugging functions. For advanced features, we recommend [vscode-autohotkey-debug](https://marketplace.visualstudio.com/items?itemName=zero-plusplus.vscode-autohotkey-debug).

## Language Features

### IntelliSense

Supports IntelliSense for variables and functions.

### Function Symbol

1. You can add a comment to the function using a semicolon on the line above the function declaration

### Go to Definition

1. Supports navigation to symbol definition.
2. Usage: Ctrl-click on the symbol to navigate to its definition.

![Goto Definition](image/gotoDefinition.jpg)

### Find Symbol References

Select a symbol, then:

-   Right-click and select `Find All References`.
-   Or press `Shift + F12`.

### Hover Tip

Usage: Hover over symbol to see IntelliSense documentation.

![Hover](image/hover.png)

### Outline

Assign name to block of code via double semicolon comment `;;Name` and go to it from outline.

![Block Name](image/blockName.png)

### Folding

Custom folding regions:

```autohotkey
;region
MsgBox % "Collapse me!"
;endregion

; Block comments with regions
/* ;region
Collapse me!
*/ ;endregion
```

### Code formatting

Supports standard VS Code formatting with a few options available in the extension settings.

![Code Format](image/codeFormat.jpg)

#### Formatter directives

Formatter directives instruct the formatter to behave a certain way on sections of code.

1. `FormatBlockComment`:

    ```autohotkey
    ;@AHK++FormatBlockCommentOn
    /*
    ;All text inside block comment will be formatted like regular code.
    */
    ;@AHK++FormatBlockCommentOff
    ```

2. `AlignAssignment`:

    ```autohotkey
    ;@AHK++AlignAssignmentOn
    a          = 5 ; number five
    str        = legacy text = with equal symbol
    inputFile := "movie.mkv"
    abc       := "abc" ; string
    abc       := a + b
    ;@AHK++AlignAssignmentOff
    ```

## Context menu

Support below function: ![context](image/context.png)

## Credits

-   [vscode-autohotkey](https://github.com/stef-levesque/vscode-autohotkey): This project started as a fork of vscode-autohotkey.
-   [autohotkey-plus-plus](https://github.com/mark-wiemer/vscode-autohotkey-plus-plus): AHK++ was a fork of this repo from November 2020. Its changes have been merged into this project.
