import { useSectionProps } from "../../../../hooks";
import { useAppStore } from "../../../../store/app.store";
import { h } from "preact";
import { ITextSetting } from "../default";

const PreviewText = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? "border-emerald-400" : "border-white/15"
      }`}
    >
      {h(
        props.settings.tag,
        { style: { textAlign: props.settings.align } },
        props.value
      )}
    </div>
  );
};

export default PreviewText;
