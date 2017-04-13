// module VSCode.Location

import { workspace, Position, Location, Uri } from 'vscode';
import * as Path from 'path';

export const mkLocation = (file : string) => (pos: Position) =>  {
    var fullPath = Path.resolve(workspace.rootPath, file)
    return new Location(Uri.file(fullPath), pos); 
}
