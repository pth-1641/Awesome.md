import { Icon } from '@iconify/react';
// import { useState } from 'preact/hooks';
import { useAppStore } from '../store/app.store';
import { useGenerateMd } from '../hooks';
import { useState } from 'preact/hooks';
import CustomTabs from './common/CustomTabs';
import { EToolkitType } from '../enums/share.enum';
import DevSocialPreview from './toolkits/DevSocial/ui/Preview';
import IconPreview from './toolkits/Icon/ui/Preview';
import ImagePreview from './toolkits/Image/ui/Preview';
import QuotePreview from './toolkits/Quote/ui/Preview';
import StatsPreview from './toolkits/Stats/ui/Preview';
import TextPreview from './toolkits/Text/ui/Preview';
import ViewsPreview from './toolkits/Views/ui/Preview';

export const StickyGenerateButton = () => {
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  return (
    <div
      class={`fixed inset-0 z-20 duration-500 ease-out ${
        openPreview ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div class="bg-primary p-4 h-screen">
        <div class="max-w-5xl mx-auto">
          <button
            class="flex items-center ml-auto gap-2.5 rounded border border-white/20 px-3 py-1 mb-4"
            onClick={() => setOpenPreview(false)}
          >
            <Icon icon="zondicons:close-solid" />
            Close
          </button>
          <CustomTabs
            items={[
              {
                key: 'preview',
                label: 'Preview',
                icon: 'iconoir:view-structure-down',
                children: <Preview />,
              },
              {
                key: 'markdown',
                label: 'Markdown',
                icon: 'ph:markdown-logo-fill',
                children: <Markdown />,
              },
            ]}
          />
        </div>
      </div>
      <button
        class="absolute -bottom-[29px] left-1/2 -translate-x-1/2 border border-white/20 rounded rounded-t-none border-t-0 py-1 px-3 bg-primary text-cyan-500"
        onClick={() => setOpenPreview(true)}
      >
        <Icon
          icon="streamline:ai-generate-portrait-image-spark-solid"
          height={20}
        />
      </button>
    </div>
  );
};

const Preview = () => {
  const { sections } = useAppStore();

  return (
    <div class="grid gap-2.5 border border-white/20 rounded-md p-5 overflow-auto max-h-[calc(100vh_-_135px)]">
      {sections.map((section) => (
        <div>
          {section.type === EToolkitType.TEXT && (
            <TextPreview id={section.id} />
          )}
          {section.type === EToolkitType.TECH && (
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.SOCIAL && (
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.STATS && (
            <StatsPreview id={section.id} />
          )}
          {section.type === EToolkitType.VIEWS && (
            <ViewsPreview id={section.id} />
          )}
          {section.type === EToolkitType.IMAGE && (
            <ImagePreview id={section.id} />
          )}{' '}
          {section.type === EToolkitType.MEME && (
            <ImagePreview id={section.id} />
          )}
          {section.type === EToolkitType.QUOTE && (
            <QuotePreview id={section.id} />
          )}
          {section.type === EToolkitType.DEV_SOCIAL && (
            <DevSocialPreview id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};

const Markdown = () => {
  const { sections } = useAppStore();
  const text: string = useGenerateMd(sections);

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div class="border border-white/20 rounded-md pt-5 text-sm relative max-h-[calc(100vh_-_135px)] overflow-auto">
      <div class="overflow-auto p-5 pt-0">
        <pre>{text}</pre>
      </div>
      <button
        class="rounded-full p-2 border border-white/20 absolute top-3 right-3 text-white/75 hover:text-emerald-300 hover:border-emerald-300 duration-100 bg-primary"
        onClick={handleCopyMarkdown}
      >
        <Icon icon="octicon:copy-24" height={16} />
      </button>
    </div>
  );
};
