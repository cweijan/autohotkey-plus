import * as assert from 'assert';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as vscode from 'vscode';
import { FormatProvider } from '../../../providers/formattingProvider';

const inFilenameSuffix = '.in.ahk';
const outFilenameSuffix = '.out.ahk';
interface FormatTest {
    /** Name of the file, excluding the suffix (@see inFilenameSuffix, @see outFilenameSuffix) */
    filenameRoot: string;
}
/** Default formatting options, meant to match default extension settings */
const defaultOptions = {
    tabSize: 4,
    insertSpaces: true,
    allowedNumberOfEmptyLines: 1,
    indentCodeAfterLabel: true,
    indentCodeAfterSharpDirective: true,
    preserveIndent: false,
    trimExtraSpaces: true,
};

// Currently in `out` folder, need to get back to main `src` folder
const filesParentPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'src',
    'test',
    'suite',
    'format',
    'samples',
);

suite('External formatter', () => {
    const externalFormatTests: FormatTest[] = [{ filenameRoot: 'demo' }];

    externalFormatTests.forEach((formatTest) => {
        test(`${formatTest.filenameRoot} external format`, async () => {
            // Arrange
            const inFilename = formatTest.filenameRoot + inFilenameSuffix;
            const outFilename = formatTest.filenameRoot + outFilenameSuffix;
            const outFileString = fs
                .readFileSync(path.join(filesParentPath, outFilename))
                .toString();
            const unformattedSampleFile =
                await vscode.workspace.openTextDocument(
                    path.join(filesParentPath, inFilename),
                );
            const originalText = unformattedSampleFile.getText();
            const textEditor = await vscode.window.showTextDocument(
                unformattedSampleFile,
            );
            const formatter = new FormatProvider();

            // Act
            const edits = await formatter.provideDocumentFormattingEdits(
                unformattedSampleFile,
                {
                    ...defaultOptions,
                },
                null,
            );

            // editing the file also saves the file, so we'll need to teardown
            await textEditor.edit((editBuilder) => {
                edits.forEach((edit) =>
                    editBuilder.replace(edit.range, edit.newText),
                );
            });

            // Assert
            assert.strictEqual(textEditor.document.getText(), outFileString);

            // Teardown - revert the file to its original state
            const lastLineIndex = unformattedSampleFile.lineCount - 1;
            const lastLineLength =
                unformattedSampleFile.lineAt(lastLineIndex).text.length;
            const fullDocumentRange = unformattedSampleFile.validateRange(
                new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(lastLineIndex + 1, lastLineLength + 1), // + 1 to ensure full coverage
                ),
            );

            // editing the file also saves the file
            await textEditor.edit((editBuilder) =>
                editBuilder.replace(fullDocumentRange, originalText),
            );
        });
    });
});
