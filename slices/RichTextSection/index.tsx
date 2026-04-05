import type { SharedSlice } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

type Props = SliceComponentProps<SharedSlice>;

const RichTextSection = ({ slice }: Props) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {/* TODO: Map to existing component */}
      <pre>{JSON.stringify(slice.primary, null, 2)}</pre>
    </section>
  );
};

export default RichTextSection;
