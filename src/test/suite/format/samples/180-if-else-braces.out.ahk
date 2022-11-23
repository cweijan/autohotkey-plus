; [Issue #180](https://github.com/vscode-autohotkey/vscode-autohotkey-plus-plus/issues/180)
if (true) {
    foo()
} else {
    foo()
    bar()
}

if (true) {
    foo()
} else
    foo()
bar()

if (true)
    foo()
else {
    foo()
    bar()
}

{
    if (true) {
        return
    } else
        return
    ExitApp
}
