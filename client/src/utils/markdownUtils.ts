import { marked } from 'marked';

// Configure marked options for rendering markdown
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
});

/**
 * Renders markdown content to HTML
 * @param markdown Markdown string to be converted to HTML
 * @returns HTML string
 */
export function renderMarkdown(markdown: string): string {
  return marked(markdown);
}
