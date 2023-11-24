import { substackEmbedStyle } from './styles';

export const SubstackEmbed = () => (
  <iframe
    src="https://teekay.substack.com/embed"
    width="100%"
    height="300"
    style={substackEmbedStyle}
    title="KR's Substack"
  ></iframe>
);
