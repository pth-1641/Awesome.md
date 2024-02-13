import { EToolkitType } from '../enums/toolkit.enum';
import { useSectionProps } from '../hooks';
import { useAppStore } from '../store/app.store';
import TechsSetting from './common/Techs/ui/Setting';
import TextSetting from './common/Text/ui/Setting';
import SocialSetting from './common/Social/ui/Setting';

export const Settings = () => {
  const sectionId = useAppStore((state) => state.sectionId);
  if (!sectionId) return <div class="flex-1 max-w-72 amd-border px-4 py-2.5" />;

  const section = useSectionProps<any>(sectionId);

  return (
    <div class="flex-1 max-w-72 amd-border px-4 py-2.5 overflow-auto">
      {section.type === EToolkitType.TEXT && <TextSetting id={sectionId} />}
      {section.type === EToolkitType.TECH && <TechsSetting id={sectionId} />}
      {section.type === EToolkitType.SOCIAL && <SocialSetting id={sectionId} />}
    </div>
  );
};
