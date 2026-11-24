# Eine Erweiterung testen

Sowohl die Erweiterung als auch ein Testprojekt sind in separaten Editor-Tabs im Browser geöffnet. You can work on both simultaneously as you add and modify your extension code. As you switch between them, each will reload automatically.

## API Tests

Um TypeScript-APIs regelmäßig zu testen, benötigst du kein separates Testprojekt mit Code, um die APIs auszuführen. Stattdessen fügst du eine Datei `test.ts` in der Erweiterung selbst ein, die die Tests enthält. Diese Datei wird nur verwendet, wenn dudie Erweiterung direkt ausführst, nicht wenn du die Erweiterung zu einem Projekt hinzufügst. The tests you create are valid code that use your extension APIs.
