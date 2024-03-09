export type JsonDataType = Record<string, string | number>;

export type Node = {
  label: string;
  children: Node[];
};

// Json 데이터를 트리 형태로 변환하는 함수
function convertJsonToTree(json: Record<string, any>): Node[] {
  const result: Node[] = [];

  const traverse = (
    obj: Record<string, any>,
    parentNode: Node | null = null,
  ) => {
    for (const [key, value] of Object.entries(obj)) {
      const node: Node = { label: key, children: [] };

      if (parentNode) {
        parentNode.children.push(node);
      } else {
        result.push(node);
      }

      if (typeof value === 'object' && value !== null) {
        traverse(value, node);
      } else {
        node.children.push({ label: value, children: [] });
      }
    }
  };

  traverse(json);

  return result;
}

// 계층 구조로 데이터 변환하는 함수
function convertToHierarchicalData(
  input: Record<string, any>,
): Record<string, any> {
  const hierarchicalData: Record<string, any> = {};

  for (const [key, value] of Object.entries(input)) {
    const keys = key.split('.');
    let currentLevel = hierarchicalData;

    keys.forEach((k, index) => {
      if (!currentLevel[k]) {
        currentLevel[k] = {};
      }

      if (index === keys.length - 1) {
        currentLevel[k] = value;
      }

      currentLevel = currentLevel[k];
    });
  }

  return hierarchicalData;
}

export function createTreeFromJson(input: JsonDataType): Node[] {
  const hierarchicalData = convertToHierarchicalData(input);
  return convertJsonToTree(hierarchicalData);
}
