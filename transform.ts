import { Transform, FileInfo, API } from "jscodeshift";

const transform: Transform = ({ source }: FileInfo, { jscodeshift }: API) => {
  const j = jscodeshift;
  return j(source)
    .find(j.Identifier, (node) => {
      return node.name === "VFC";
    })
    .replaceWith((path) => {
      return j.identifier("FC");
    })
    .toSource();
};

export default transform;
