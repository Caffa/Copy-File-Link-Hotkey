import { Notice, Plugin } from 'obsidian';

export default class CopyFileLinkHotkeyPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'copy-file-link-wiki',
			name: 'Copy file link (wiki)',
			checkCallback: (checking: boolean) => {
				const file = this.app.workspace.getActiveFile();
				if (!file) return false;
				if (checking) return true;
				const linktext = this.app.metadataCache.fileToLinktext(file, file.path, true);
				const wikiLink = `[[${linktext}]]`;
				navigator.clipboard.writeText(wikiLink).then(
					() => new Notice('Copied file link to clipboard'),
					() => new Notice('Failed to copy to clipboard')
				);
				return true;
			}
		});
	}

	onunload() {
	}
}
