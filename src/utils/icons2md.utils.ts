import { ITechSetting } from '../components/common/Techs/default';

const iconsToMarkdown = (props: ITechSetting) => {
  return `<div align="${props.settings.position}">
  ${props.icons
    .map(
      (icon) =>
        `<img src="https://api.iconify.design/${icon.replace(
          ':',
          '/'
        )}.svg" alt="${icon}" height="${props.settings.size}" />
  <img width="${props.settings.gap}"/>`
    )
    .join('')}
</div>`;
};

export default iconsToMarkdown;