; [Issue #119](https://github.com/vscode-autohotkey/vscode-autohotkey-plus-plus/issues/119)
MsgBox, { ; comment with close brace }
bar()
{
    if (foo() == ";")
        true
}
foo()
{
    return ";"
}
