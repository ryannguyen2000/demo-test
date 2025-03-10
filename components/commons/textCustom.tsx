import _ from "lodash";
import { CSSProperties } from "react";

interface TextCustomProps {
  data?: any;
  style?: CSSProperties;
}

const TextCustom = ({ data, style }: TextCustomProps) => {
  const title = _.get(data, "title", "Title Header");

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div
      style={newStyle}
      className="text-[#858585]"
    >
      {title} TextCustom TextCustom 123
    </div>
  );
};

export default TextCustom;
