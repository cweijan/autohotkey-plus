# Changelog

## 3.0.0 - unreleased

### Major formatter changes

Formatter options now available in settings:

-   `allowedNumberOfEmptyLines` removes extra empty lines (defaults to 1, can be disabled)
-   `indentCodeAfterLabel` defaults to `true`
-   `indentCodeAfterSharpDirective` defaults to `true`
-   `preserveIndent` keeps whitespace on empty lines. Defaults to `false`
-   `trimExtraSpaces` trims extra spaces between words. Defaults to `true`

Formatter directives:

-   `AlignAssignment` aligns blocks of assignments:

    ```ahk
    ;@AHK++AlignAssignmentOn
    a=5
    str = legacy text = with equal symbol
    inputFile:="movie.mkv"
    ; more variables below!
    abc := "abc"
    abc := a + b
    ;@AHK++AlignAssignmentOff
    ```

    becomes

    ```ahk
    ;@AHK++AlignAssignmentOn
    a          = 5
    str        = legacy text = with equal symbol
    inputFile := "movie.mkv"
    ; more variables below!
    abc       := "abc"
    abc       := a + b
    ;@AHK++AlignAssignmentOff
    ```

-   `FormatBlockComment` tries to format block comments like code:

    ```ahk
    ;@AHK++FormatBlockCommentOn
    /*
    typedef struct TEST {
    DWORD cbSize ; 0
    } CMINVOKECOMMANDINFOEX;
    */
    ```

    becomes

    ```ahk
    ;@AHK++FormatBlockCommentOn
    /*
    typedef struct TEST {
        DWORD cbSize ; 0
    } CMINVOKECOMMANDINFOEX;
    */
    ```

And many, many bugfixes!

### Commands

AHK commands are now in the "AutoHotkey Plus" category

Commands have been renamed, and some have been given new keybindings.

We've also added a new command to compile with the AHK GUI. It's available in the context/right-click menu.

| Old name                 | New name                 | New default keybinding             |
| ------------------------ | ------------------------ | ---------------------------------- |
| Open AutoHotkey Document | Open AutoHotkey Help     | Ctrl + F1                          |
| Compile Script           | Compile AHK Script       | Ctrl + Shift + F9 (same as before) |
| Run Script               | Run AHK Script           | Ctrl + F9 (same as before)         |
| Run Selection Script     | Run Selection            | Ctrl + F8                          |
| Debug Script             | Debug AHK Script         | F9 (same as before)                |
| (new command)            | Compile AHK Script (GUI) | (none)                             |

### Settings

Along with the formatter changes, some settings have been renamed. Default values have not been changed.

| Old name             | New name            |
| -------------------- | ------------------- |
| Compile MPRESS       | Use MPRESS          |
| Document path        | Help path           |
| Enable Intelli Sense | Enable IntelliSense |

A new setting, `Show debug button`, shows or hides the debug button in the editor title menu. It defaults to `true`.

### Syntax highlighting

Minor bugfixes for syntax highlighting.

### Developer-only changes

-   Now using [YAML grammar](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#:~:text=USING%20YAML%20TO%20WRITE%20A%20GRAMMAR) for readability
-   Added many more unit tests
-   Added grammar tests
-   Add documentation

## 2.7.1 - 2022-09-16

-   Better debugger interaction.

## 2.7.0 - 2022-09-15

-   Reduce extension size.
-   Modify the debug icon.
-   Output program args after debugging is started.

## 2.6.2 - 2020-12-6

-   Update ahk language config @fade2gray.
-   fix getLabelByLine to allow tab characters @tmplinshi.

## 2.6.1 - 2020-11-19

-   Remove variables from outline.
-   resolve #52.

## 2.6.0 - 2020-11-17

-   Support run selection script.
-   Support open doc

## 2.5.6 - 2020-10-6

-   Fix syntax error.
-   Fix variable detect error.

## 2.5.5 - 2020-09-29

-   Fix rename bug.
-   Bind key to context menu command.

## 2.5.4 - 2020-09-27

-   Enable IntelliSense as default.
-   Fix switch format error.
-   fix variable detech fail.

## 2.5.3 - 2020-09-22

-   Fix rename fail when unsave.
-   Simple support variable detect.
-   Simple implement intellisence.

## 2.5.0 - 2020-09-21

-   Adaptation zeroplus debuger extension.
-   Support rename method name.

## 2.4.5~2.4.16

-   Just fix bugs.

## 2.4.4 - 2020-06-27

-   Support find method references.
-   Fix syntax bug.

## 2.4.3 - 2020-06-25

-   Add command|method hover feature.
-   Add labels to outline.
-   More syntax support.

## 2.4.2 - 2020-06-24

-   Support restart current programe.
-   Support go to label.
-   Fix bugs.

## 2.4.1 - 2020-05-31

-   Support config compiler path.
-   Show variable detail in debug evalute

## 2.4.0 - 2020-05-30

-   Support get and modify variable in debug evalute
-   Support pause and continue run script.
-   Support OutputDebug command.
-   Support run unsave ahk script.

## 2.3.4 - 2020-04-15

-   Suport change variable value when debug, contribute by @zero-plusplus.

## 2.3.1 - 2020-04-12

-   Support view variable when change call stack.

## 2.3.0 - 2020-04-11

-   Variable view support complex variable value, contribute by @zero-plusplus.
-   Enhance method detecher.

## 2.2.2 - 2020-03-27

-   Fix path with space error.

## 2.2.0 - 2020-03-25

-   Support change defualt ahk execute path.
-   Support simple debug.

## 2.1.6 - 2020-03-23

-   Find definition in whole workspace.
-   Try go to include script in workspce.

## 2.1.2 - 2020-03-22

-   Update snippets.

## 2.1.0 - 2020-03-19

-   Support Run Script.

## 2.0.3 - 2020-03-10

-   Fix detecher if and while block as methods.
-   Support go to method definition in same file.

## 2.0.2 - 2019-11-27

-   Enhance method symbol detection.
