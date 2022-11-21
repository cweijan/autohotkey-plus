import { ConfigKey, Global } from '../common/global';
import { Process } from '../common/processWrapper';

export class DocumentService {
    public static open(): void {
        const documentPath = Global.getConfig(ConfigKey.helpPath);
        Process.exec(`C:/Windows/hh.exe ${documentPath}`);
    }
}
